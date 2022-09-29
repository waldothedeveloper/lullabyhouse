import { OnlineStatusContext } from '@/components/providers/OnlineStatus'
import { useContext } from 'react'

//
export const useOnlineStatus = () => {
  const onlineStatus = useContext(OnlineStatusContext)
  return onlineStatus
}
