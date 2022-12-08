import { randomUUID } from 'crypto'
import { squareClient } from '@/utils/squareClient'
const { subscriptionsApi } = squareClient
BigInt.prototype.toJSON = function () {
  return this.toString()
}

export default async function handler(req, res) {
  try {
    if (req.method !== `POST`) {
      return res
        .status(404)
        .json({ message: `This endpoint requires a POST request!` })
    }

    const { amount, startDate, planId, cardId, customerId } = req.body

    const { result } = await subscriptionsApi.createSubscription({
      idempotencyKey: randomUUID(),
      locationId:
        process.env.NODE_ENV !== 'production'
          ? process.env.NEXT_PUBLIC_SQUAREUP_SANDBOX_LOCATION_ID
          : process.env.NEXT_PUBLIC_SQUAREUP_PROD_APPID,
      planId,
      customerId,
      startDate,
      priceOverrideMoney: {
        amount,
        currency: 'USD',
      },
      cardId,
      timezone: 'America/New_York',
    })

    return res.status(200).json(result)
  } catch (error) {
    res.status(500).send()
  }
}
