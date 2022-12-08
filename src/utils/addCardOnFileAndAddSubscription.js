import { addSubscriptionToCustomer } from '@/utils/addSubscriptionToCustomer'
import { createCardOnFile } from '@/utils/createCardOnFile'
import { isValueAnObject } from '@/utils/isValueAnObject'
//
export const addCardOnFileAndAddSubscription = async (
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
) => {
  try {
    const response = await createCardOnFile(
      id,
      firstName,
      lastName,
      address,
      tokenizedCard
    )

    // handle errors
    if (isValueAnObject(response) && response?.errors) {
      handleErrors(response?.errors)
      setDisableSubmitButton(false)
      return null
    }

    try {
      const subscriptionCreatedOk = await addSubscriptionToCustomer(
        date,
        subscriptionPlans,
        response,
        id,
        price
      )
      if (subscriptionCreatedOk && subscriptionCreatedOk?.id) {
        setDisableSubmitButton(false)
        goToThankYouPage()
      }
    } catch (error) {
      setDisableSubmitButton(false)
      handleErrors(error)
    }
  } catch (error) {
    setDisableSubmitButton(false)
    handleErrors(error)
    return error
  }
}
