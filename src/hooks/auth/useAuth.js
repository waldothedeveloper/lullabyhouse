import { createContext, useContext } from 'react'

import { useProvideAuth } from './useProvideAuth'

const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
