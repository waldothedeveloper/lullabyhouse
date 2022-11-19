import { useEffect, useState } from 'react'

export const usePricing = () => {
  const [card, setCard] = useState(null)

  //
  useEffect(() => {
    const processPayment = async () => {
      const payments = window.Square.payments(
        process.env.NEXT_PUBLIC_SQUAREUP_SANDBOX_APPID,
        process.env.NEXT_PUBLIC_SQUAREUP_LOCATION_ID
      )

      const cardInstance = await payments.card()

      return cardInstance
    }

    processPayment().then((value) => setCard(value))
  }, [])

  useEffect(() => {
    if (card) card.attach('#card-container')
  }, [card])

  const handleClick = async (event) => {
    if (event) event.stopPropagation()

    try {
      const result = await card.tokenize()

      if (result.status === 'OK') {
        // console.log(`Payment token is => => =>  ${result.token}`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return { handleClick, card }
}
