import { RPCError, RPCErrorCode } from 'magic-sdk'
import { useEffect, useState } from 'react'

//
export const useAuthError = (err) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    // if (true) {
    //   setError({
    //     error: 'Sorry, something went wrong',
    //     code: 255,
    //     message: `Sorry, you have been denied access to the system. Contact support if error persist.`,
    //   })
    // }

    if (err instanceof RPCError) {
      switch (err.code) {
        case RPCErrorCode.AccessDeniedToUser:
          setError({
            error: err,
            code: err.code,
            message: `Sorry, you have been denied access to the system. Contact support if error persist.`,
          })
          break
        case RPCErrorCode.MagicLinkRateLimited:
          setError({
            error: err,
            code: err.code,
            message: `Sorry, you have reached the rate limits for authentication. Contact support if error persist.`,
          })
          break
        case RPCErrorCode.UserAlreadyLoggedIn:
          setError({
            error: err,
            code: err.code,
            message: `It looks like you already logged in. Contact support if error persist.`,
          })
          // Handle errors accordingly :)
          break
        case RPCErrorCode.MagicLinkExpired:
          setError({
            error: err,
            code: err.code,
            message: `The magic link code sent has expired. Try again or contact support if error persist.`,
          })
          break
        case RPCErrorCode.MagicLinkFailedVerification:
          setError({
            error: err,
            code: err.code,
            message: `The login verification has failed. Try again or contact support if error persist.`,
          })
      }
    }
    return () => setError(null)
  }, [err])

  return { error }
}
