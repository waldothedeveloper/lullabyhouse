import { useState } from 'react'

export const useHandleNotificationsModal = () => {
  const [notification, setNotification] = useState(false)

  const handleNotification = () => setNotification(true)
  const closeNotification = () => setNotification(false)

  return { notification, handleNotification, closeNotification }
}
