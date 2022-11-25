import { Client, Environment } from 'square'

import { randomUUID } from 'crypto'

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
})

const { paymentsApi } = client

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
    res.status(500).send()
  }
}
