import { useState } from 'react'
//
export const useCustomerInfo = () => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)

  const handleEmail = (event) => {
    const { value } = event?.target || null

    setEmail(value)
  }

  const handleFirstName = (event) => {
    const { target } = event
    const { value } = target
    setFirstName(value)
  }

  const handleLastName = (event) => {
    const { target } = event
    const { value } = target
    setLastName(value)
  }

  return {
    firstName,
    lastName,
    handleFirstName,
    handleLastName,
    email,
    handleEmail,
  }
}
