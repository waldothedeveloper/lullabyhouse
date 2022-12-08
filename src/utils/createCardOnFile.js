export const createCardOnFile = async (
  id,
  firstName,
  lastName,
  address,
  tokenizedCard
) => {
  const customerCard = await fetch(`/api/cards/create_card_on_file`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
      firstName,
      lastName,
      address,
      tokenizedCard,
    }),
  })
    .then((val) => val.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(`Error trying to create a card on file`, err)
    })

  return customerCard
}
