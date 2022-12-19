import { useEffect, useState } from 'react'

import { isValueAnArray } from '@/utils/isValueAnArray'
import { isValueAnObject } from '@/utils/isValueAnObject'
import { notify } from '@/components/Notifications'

//
const handleErrorCases = (code, detail) => {
  let error = {}
  switch (code) {
    case 'CVV_FAILURE':
      error = {
        message: `The card cvv is incorrect. Please check your card details.`,
        detail,
      }
      break
    case 'GENERIC_DECLINE':
      error = {
        message: `The payment used was declined. Check your card details or contact your bank institution.`,
        detail,
      }
      break
    case 'CARD_DECLINED_VERIFICATION_REQUIRED':
      error = {
        message: `The paymend used was declined. Verification requried. Please try again or contact support.`,
        detail,
      }
      break
    case 'ADDRESS_VERIFICATION_FAILURE':
      error = {
        message: `The postal code doesn't match what's in your card. Check your postal code is correct.`,
        detail,
      }
      break
    case 'INVALID_EXPIRATION':
      error = {
        message: `The expiration date in your card is invalid. Please check your card details.`,
        detail,
      }
      break
    case 'IDEMPOTENCY_KEY_REUSED':
      error = {
        message: `The token has already been used. Contact support if error persists.`,
        detail,
      }
      break
    case 'INVALID_CARD_DATA':
      error = {
        message: `Invalid card data. Make sure your zipcode, cvv and/or card number are correct.`,
        detail,
      }
      break
    case 'INTERNAL_SERVER_ERROR':
      error = {
        message: `Something went really wrong. Please contact support if error persists.`,
        detail,
      }
      break
    case 'INVALID_DATE':
      error = {
        message: `The provided date is not allowed in the past.`,
        detail,
      }
      break
    default:
      error = {
        message: `Something went wrong. Try again or contact support if error persist.`,
        detail,
      }
      break
  }

  return error
}
//
export const useErrors = () => {
  const [errors, setErrors] = useState(null)

  const handleErrors = (err) => {
    if (err && isValueAnArray(err) && err[0]?.code) {
      const { code, detail } = err[0]
      setErrors(handleErrorCases(code, detail))
    }
  }

  useEffect(() => {
    if (errors && isValueAnObject(errors)) {
      notify(errors)
    }
  }, [errors])

  useEffect(() => {
    return () => setErrors(null)
  }, [])

  return { errors, handleErrors }
}
