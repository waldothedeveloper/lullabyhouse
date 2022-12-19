export const formatPhoneNumber = (value: string) => {
  if (!value) return value
  const phoneNumber: string = value.replace(/[^\d]/g, '')
  const phoneNumberLength: number = phoneNumber.length
  if (phoneNumberLength < 4) return phoneNumber
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`
}
