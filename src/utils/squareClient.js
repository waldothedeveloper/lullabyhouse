import { Client, Environment } from 'square'

export const squareClient = new Client({
  accessToken:
    process.env.NODE_ENV !== 'production'
      ? process.env.SQUARE_SANDBOX_ACCESS_TOKEN
      : process.env.SQUARE_PROD_ACCESS_TOKEN,
  environment: Environment.Sandbox,
})
