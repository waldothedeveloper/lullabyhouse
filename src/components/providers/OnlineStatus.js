import { createContext, useEffect, useState } from 'react'

export const OnlineStatusContext = createContext(null)

const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true

//
export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(getOnLineStatus())

  const setOnline = () => setOnlineStatus(true)
  const setOffline = () => setOnlineStatus(false)

  useEffect(() => {
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)

    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
  }, [])

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  )
}
