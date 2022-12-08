import { isValueAnObject } from '@/utils/isValueAnObject'
import { randomUUID } from 'crypto'
import { squareClient } from '@/utils/squareClient'
const { cardsApi } = squareClient

//
export default async function handler(req, res) {
  try {
    if (req.method !== `POST`) {
      return res
        .status(404)
        .json({ message: `This endpoint requires a POST request!` })
    }

    const { id, firstName, lastName, address, tokenizedCard } = req.body

    const {
      addressLine1,
      addressLine2,
      locality,
      administrativeDistrictLevel1,
      postalCode,
      country,
    } = address

    if (!isValueAnObject(address)) {
      return res.status(400).json(`The customer address cannot be blank`)
    }

    if (!id) {
      return res.status(400).json(`The customer id cannot be blank`)
    }

    const { result } = await cardsApi.createCard({
      idempotencyKey: randomUUID(),
      sourceId: tokenizedCard,
      card: {
        cardholderName: `${firstName} ${lastName}`,
        billingAddress: {
          addressLine1,
          addressLine2,
          locality,
          administrativeDistrictLevel1,
          postalCode,
          country,
        },
        customerId: id,
      },
    })

    return res.status(result?.statusCode || 200).json(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
