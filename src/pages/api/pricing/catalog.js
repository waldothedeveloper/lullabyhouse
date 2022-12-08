import { squareClient } from '@/utils/squareClient'
BigInt.prototype.toJSON = function () {
  return this.toString()
}
const { catalogApi } = squareClient

export default async function handler(req, res) {
  try {
    const { result } = await catalogApi.listCatalog(
      undefined,
      'SUBSCRIPTION_PLAN'
    )

    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).send()
  }
}
