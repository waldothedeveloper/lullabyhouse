import { scheduleSteps } from '@/utils/scheduleSteps'
import { useState } from 'react'

export const useStepper = () => {
  // states: current, upcoming, complete
  const [context, setContext] = useState(scheduleSteps)
  console.log(`context`, context)

  const handleStepContext = ({ step, data }) => {
    // console.log('data: ', data)
    // console.log('step: ', step)
    setContext((prevContext) => {
      if (step === 1) {
        return {
          ...prevContext,
          typeOfCleaning: {
            ...prevContext.typeOfCleaning,
            status: 'complete',
            selectedService: data,
          },
          address: {
            ...prevContext.address,
            status: 'current',
          },
        }
      } else if (step === 2) {
        return {
          ...prevContext,
          address: {
            ...prevContext.address,
            status: 'complete',
            verifiedAddress: data[0]?.description,
          },
          date: { ...prevContext.date, status: 'current' },
        }
      } else if (step === 3) {
        //
      } else {
        return {
          ...prevContext,
        }
      }
    })
  }

  return { context, handleStepContext, setContext }
}
