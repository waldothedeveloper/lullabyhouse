export const createNewCustomer = async (
  givenName,
  familyName,
  emailAddress
) => {
  const newCustomer = await fetch(`/api/customer/create_customer`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      givenName,
      familyName,
      emailAddress,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)

  return newCustomer
}
