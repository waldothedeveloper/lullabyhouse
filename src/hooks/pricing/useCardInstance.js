import { useEffect, useState } from 'react'

const squareCred = {
  appID:
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_SQUAREUP_SANDBOX_APPID
      : process.env.NEXT_PUBLIC_SQUAREUP_PROD_APPID,
  locationID:
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_SQUAREUP_SANDBOX_LOCATION_ID
      : process.env.NEXT_PUBLIC_SQUAREUP_PROD_APPID,
}
//
export const useCardInstance = () => {
  const [card, setCard] = useState(null)
  const [cardErrors, setCardErrors] = useState(null)
  //
  useEffect(() => {
    const processPayment = async () => {
      if (!window.Square) {
        throw new Error('Square.js failed to load properly')
      }

      const payments = window.Square.payments(
        squareCred.appID,
        squareCred.locationID
      )

      const cardInstance = await payments.card()

      return cardInstance
    }

    processPayment()
      .then((value) => setCard(value))
      .catch((error) => {
        setCardErrors({ error, message: `Square.js failed to load properly` })
      })
  }, [])

  useEffect(() => {
    if (card) card.attach('#card-container')
  }, [card])

  return { card, cardErrors }
}
