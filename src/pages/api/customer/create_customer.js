import { randomUUID } from 'crypto'
import { squareClient } from '@/utils/squareClient'
const { customersApi } = squareClient

export default async function handler(req, res) {
  const { emailAddress, familyName, givenName, phone } = req.body

  if (!emailAddress) {
    return res.status(400).json(`The email can't be blank`)
  }

  if (!familyName) {
    return res.status(400).json(`The customer's last name can't be blank`)
  }

  if (!givenName) {
    return res.status(400).json(`The customer's first name can't be blank`)
  }

  if (!phone) {
    return res.status(400).json(`The phone number can't be blank`)
  }

  try {
    const { result } = await customersApi.createCustomer({
      idempotencyKey: randomUUID(),
      givenName,
      familyName,
      emailAddress,
      phone_number: phone,
    })

    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).send()
  }
}
