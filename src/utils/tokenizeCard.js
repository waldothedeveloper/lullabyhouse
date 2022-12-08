export const tokenizeCard = async (card) => {
  const result = await card.tokenize()

  if (result?.status === 'OK') {
    const { token } = result

    return token
  }

  return null
}
