import { useEffect, useState } from 'react'

import { magic } from '@/utils/magic'
import { useAuth } from '@/hooks/auth/useAuth'
import { useRouter } from 'next/router'

//
export const useRequireAuth = (
  redirect = `/auth/sign_in_or_create_account`
) => {
  const auth = useAuth()
  const router = useRouter()
  const [error, setError] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await magic.user.isLoggedIn().then((isLoggedIn) => {
          if (!isLoggedIn) {
            router.push(redirect)
          }
        })
      } catch (err) {
        setError(err)
        router.push(`/auth/sign_in_or_create_account`)
      }
    }
    checkAuth()
  }, [router, redirect])

  return { auth, error }
}
