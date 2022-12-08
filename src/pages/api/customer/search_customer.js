import { squareClient } from '@/utils/squareClient'

const { customersApi } = squareClient

//
export default async function handler(req, res) {
  try {
    if (req.method !== `POST`) {
      return res
        .status(404)
        .json({ message: `This endpoint requires a POST request!` })
    }

    const { email } = req.body

    if (!email) {
      return res.status(400).json(`The email can't be blank`)
    }

    const { result } = await customersApi.searchCustomers({
      query: {
        filter: {
          emailAddress: {
            exact: email,
          },
        },
      },
    })

    return res.status(200).json(result)
  } catch (error) {
    return res.status(error.statusCode || 500).send(error)
  }
}
