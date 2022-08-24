import { validatePhoneRegex } from '@/utils/regex'

export const validateSignIn = (values) => {
  // console.log('values: ', values)
  const errors = {}
  if (!values.phone) {
    errors.phone = 'A valid phone number is required'
  } else if (!validatePhoneRegex.test(values.phone)) {
    errors.phone = 'Invalid or imcomplete phone number'
  }
  return errors
}
