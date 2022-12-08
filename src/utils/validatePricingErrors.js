export const validatePricingErrors = (price, url, token) => {
  let errors = ''

  if (!price?.notFormattedPrice)
    errors = `The price is null, please check that your quote has not expired`
  if (!url || typeof url === 'string') errors = `The url is null or empty`
  if (!token || typeof token === 'string')
    errors = `The tokenized card must be passed`

  return errors
}
