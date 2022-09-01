import { useEffect, useState } from 'react'

import { magic } from '@/utils/magic'
import { useAuthError } from '@/hooks/auth/useAuthError'
import { useRouter } from 'next/router'

const regexParens = new RegExp(/[()]\s*/gm)
const regex = new RegExp(/[-]/g)
//
export const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const [localError, setLocalError] = useState(null)
  const { error } = useAuthError(localError)
  const router = useRouter()

  //
  useEffect(() => {
    setUser({ loading: true })

    const getUser = async () => {
      try {
        await magic.user.isLoggedIn().then((isLoggedIn) => {
          if (isLoggedIn) {
            magic.user.getMetadata().then((userData) => setUser(userData))
          } else {
            setUser(null)
          }
        })
      } catch (err) {
        return setLocalError({
          status: err.status,
          message: err.message,
          error: err,
        })
      }
    }
    getUser()
  }, [])

  const logOut = () => {
    return magic.user
      .logout()
      .then(() => {
        setUser(null)
        router.push('/')
      })
      .catch((err) => {
        setLocalError({ status: err.status, message: err.message, error: err })
      })
  }

  const logIn = async (values, setSubmitting) => {
    const { phone } = values
    const newTel = phone.replace(regexParens, '')
    const finalTel = `+1${newTel.replace(regex, '')}`

    //
    try {
      let didToken
      let response
      let userMetadata
      //
      try {
        didToken = await magic.auth.loginWithSMS({
          phoneNumber: finalTel,
        })
      } catch (err) {
        console.log(`Error obtaining didToken`, err)
      }

      try {
        if (didToken) {
          response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${didToken}`,
            },
          })
        }
      } catch (err) {
        console.log(`Error validating the didToken`)
        setLocalError({ status: err.status, message: err.message, error: err })
      }

      if (response.status === 200) {
        try {
          userMetadata = await magic.user.getMetadata()

          setUser(userMetadata)
          setSubmitting(false)
          router.push(`/user/${userMetadata.publicAddress}`)
        } catch (err) {
          setLocalError({
            status: err.status,
            message: err.message,
            error: err,
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { logOut, logIn, user, error }
}
