export const checkIfCustomerExists = async (email) => {
  const response = await fetch(`/api/customer/search_customer`, {
    method: 'POST',
    headers: {
      'content-type': `application/json`,
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((data) => data)

  return response
}
