import { isValueAnArray } from '@/utils/isValueAnArray'
import { isValueAnObject } from '@/utils/isValueAnObject'
import { sendPaymentInfo } from '@/utils/sendPaymentInfo'
import { tokenizeCard } from '@/utils/tokenizeCard'
import { useRouter } from 'next/router'

//
export const useOneTimeCardPayment = (
  price,
  card,
  setDisableSubmitButton,
  handleErrors
) => {
  const router = useRouter()

  const handleCardPayment = async (event) => {
    if (event) event.stopPropagation()

    try {
      setDisableSubmitButton(true)

      const tokenizedCard = await tokenizeCard(card)

      if (tokenizedCard) {
        const result = await sendPaymentInfo(
          `/api/pricing/one_time_card_payment`,
          tokenizedCard,
          price
        )

        if (isValueAnObject(result) && result?.payment) {
          setDisableSubmitButton(false)
          router.push(`/checkout/order_summary`)
        }

        if (
          isValueAnObject(result) &&
          result?.statusCode !== 200 &&
          isValueAnArray(result?.errors)
        ) {
          const { errors } = result
          handleErrors(errors)
        }

        setDisableSubmitButton(false)
      }
    } catch (error) {
      handleErrors(error)
      setDisableSubmitButton(false)
    }
  }

  return { handleCardPayment }
}
