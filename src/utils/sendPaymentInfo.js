import { convertDollarsToCents } from '@/utils/convertDollarsToCents'

//
export const sendPaymentInfo = async (url, token, price) => {
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
    .then((val) => val.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(`Error sending the payment info`, err)
    })

  return res
}
