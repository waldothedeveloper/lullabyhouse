import { randomUUID } from 'crypto'
import { squareClient } from '@/utils/squareClient'

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = squareClient

export default async function handler(req, res) {
  try {
    if (req.method !== `POST`) {
      return res
        .status(404)
        .json({ message: `This endpoint requires a POST request!` })
    }
    const { sourceId, amount } = req.body

    if (!sourceId) {
      return res.status(400).json({ message: `sourceId is required` })
    }

    if (!amount) {
      return res.status(400).json({ message: `dollar amount is required` })
    }

    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: `USD`,
        amount,
      },
    })

    return res.status(200).json(result)
  } catch (error) {
    return res.status(error?.statusCode || 500).send(error)
  }
}
