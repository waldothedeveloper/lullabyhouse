import { createContext, useContext } from 'react'

import { useStepper } from '@/hooks/useStepper'

const scheduleContext = createContext(null)

export const ProvideSchedule = ({ children }) => {
  const schedule = useStepper()
  return (
    <scheduleContext.Provider value={schedule}>
      {children}
    </scheduleContext.Provider>
  )
}

export const useSchedule = () => {
  return useContext(scheduleContext)
}
