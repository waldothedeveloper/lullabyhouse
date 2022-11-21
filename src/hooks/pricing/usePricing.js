import { useEffect, useState } from 'react'

import { convertDollarsToCents } from '@/utils/convertDollarsToCents'
import { useRouter } from 'next/router'
import { validatePricingErrors } from '@/hooks/pricing/validatePricingErrors'

//
export const usePricing = (price) => {
  const router = useRouter()
  const [card, setCard] = useState(null)
  const [errors, setErrors] = useState(null)
  console.log('errors: ', errors)
  const [disableSubmitButton, setDisableSubmitButton] = useState(false)

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
    return () => setDisableSubmitButton(false)
  }, [card])

  const sendPaymentInfo = async (url, token) => {
    const err = validatePricingErrors(price, url, token)

    if (err && err.length > 0) {
      throw new Error(err)
    } else {
      const res = await fetch(url, {
        method: `POST`,
        headers: {
          'content-type': `application/json`,
        },
        body: JSON.stringify({
          sourceId: token,
          amount: convertDollarsToCents(price?.notFormattedPrice),
        }),
      })
      return res.json()
    }
  }

  const handleClick = async (event) => {
    if (event) event.stopPropagation()

    try {
      setDisableSubmitButton(true)
      const result = await card.tokenize()

      if (result.status === 'OK') {
        sendPaymentInfo(`/api/pricing/pay`, result?.token)
          .then((val) => {
            console.log(`successfull payment`, val)
            setDisableSubmitButton(false)
            router.push(`/checkout/order_summary`)
          })
          .catch((err) => {
            setDisableSubmitButton(false)
            console.log(`err trying to run payment`, err)
            setErrors(err)
          })
      }
    } catch (e) {
      setDisableSubmitButton(false)
      console.error(`there is something wrong`, e)
    }
  }

  return { handleClick, card, errors, disableSubmitButton }
}
