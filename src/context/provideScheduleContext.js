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
  const context = useContext(scheduleContext)
  if (!context) {
    throw Error(
      `Illegal consumption of useSchedule Context: Must be consumed within the scope of Schedule`
    )
  }
  return context
}
