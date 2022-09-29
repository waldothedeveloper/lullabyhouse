import { useState } from 'react'

export const useHandleNotificationsModal = () => {
  const [notification, setNotification] = useState({ bool: false, email: null })

  const handleNotification = ({ bool, email }) => {
    setNotification({ bool, email })
  }

  const closeNotification = () => setNotification({ bool: false, email: `` })

  return { notification, handleNotification, closeNotification }
}
