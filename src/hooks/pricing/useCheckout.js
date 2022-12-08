import { addCardOnFileAndAddSubscription } from '@/utils/addCardOnFileAndAddSubscription'
import { checkIfCustomerExists } from '@/utils/checkIfCustomerExists'
import { createNewCustomer } from '@/utils/createNewCustomer'
import { isValueAnObject } from '@/utils/isValueAnObject'
import { tokenizeCard } from '@/utils/tokenizeCard'
import { useRouter } from 'next/router'
//
export const useCheckout = (
  firstName,
  lastName,
  email,
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

  const handleCheckoutProcess = async () => {
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
          // console.log('customers: ', customers)

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
                email
              )

              if (isValueAnObject(customer) && customer?.id) {
                // console.log(`do we have a new customer?`, customer)
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
            // console.log(`DO WE HAVE AN EXISTING CUSTOMER?`, customers)
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
              console.log(
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
      // console.log('error trying to tokenize the card: ', error)
      handleErrors(error)
    } finally {
      setDisableSubmitButton(false)
    }
  }

  return { handleCheckoutProcess }
}
