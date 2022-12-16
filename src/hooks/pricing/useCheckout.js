import * as yup from 'yup'

import { addCardOnFileAndAddSubscription } from '@/utils/addCardOnFileAndAddSubscription'
import { checkIfCustomerExists } from '@/utils/checkIfCustomerExists'
import { createNewCustomer } from '@/utils/createNewCustomer'
import { isValueAnObject } from '@/utils/isValueAnObject'
import { tokenizeCard } from '@/utils/tokenizeCard'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'

//
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email().required('A valid email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'The phone number is invalid.')
      .required('A phone number is required'),
    street_address_2: yup.string(),
  })
  .required()

//
export const useCheckout = (
  address,
  date,
  subscriptionPlans,
  price,
  setDisableSubmitButton,
  card,
  handleErrors
) => {
  const router = useRouter()
  const goToThankYouPage = () => router.push(`/checkout/order_summary`)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formErrors = errors

  const handleCheckoutProcess = async (data) => {
    const { firstName, lastName, email, phone } = await data
    const tokenizedCard = await tokenizeCard(card)
    try {
      if (
        tokenizedCard &&
        typeof tokenizedCard === 'string' &&
        tokenizedCard.length > 0
      ) {
        try {
          setDisableSubmitButton(true)
          // always make sure first if a customer exists
          const customers = await checkIfCustomerExists(email)

          if (isValueAnObject(customers) && customers?.errors) {
            handleErrors(customers?.errors)
            return null
          }
          if (!customers) {
            try {
              // can't find the customer? -> create a new customer
              const { customer } = await createNewCustomer(
                firstName,
                lastName,
                email,
                phone
              )

              if (isValueAnObject(customer) && customer?.id) {
                const { id } = customer
                await addCardOnFileAndAddSubscription(
                  id,
                  tokenizedCard,
                  goToThankYouPage,
                  address,
                  date,
                  subscriptionPlans,
                  price,
                  handleErrors,
                  setDisableSubmitButton,
                  firstName,
                  lastName
                )
              }
            } catch (error) {
              handleErrors(error)
            }
          }

          if (isValueAnObject(customers) && customers?.customers) {
            const { id } = customers?.customers[0] || null
            try {
              await addCardOnFileAndAddSubscription(
                id,
                tokenizedCard,
                goToThankYouPage,
                address,
                date,
                subscriptionPlans,
                price,
                handleErrors,
                setDisableSubmitButton,
                firstName,
                lastName
              )
            } catch (error) {
              throw new Error(
                `Error trying to add Card on file or subscription`,
                error
              )
            }
          }
        } catch (error) {
          handleErrors(error)
        }
      }
    } catch (error) {
      handleErrors(error)
    } finally {
      setDisableSubmitButton(false)
    }
  }

  return { handleCheckoutProcess, register, handleSubmit, formErrors }
}
