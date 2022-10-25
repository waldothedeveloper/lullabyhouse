import { scheduleSteps } from '@/utils/scheduleSteps'
import { useReducer } from 'react'

const createSchedule = () => scheduleSteps

const reducer = (state, action) => {
  const { type, data } = action

  switch (type) {
    case 1:
      return {
        ...state,
        typeOfCleaning: {
          ...state.typeOfCleaning,
          status: 'complete',
          selectedService: data,
        },
        address: {
          ...state.address,
          status: 'current',
        },
      }

    case 2:
      return {
        ...state,
        address: {
          ...state.address,
          status: 'complete',
          verifiedAddress: data[0]?.description,
        },
        date: { ...state.date, status: 'current' },
      }
    case 3:
      return {
        ...state,
        date: {
          ...state.date,
          status: 'complete',
          verifiedDateAndTime: data?.timeAndDateOfBooking,
          extras: data?.extrasSelected.filter((elem) => elem.checked),
          serviceFrecuency: {
            frequency: data?.selectedService?.title,
            discount: '20%',
          },
        },
      }
    default:
      break
  }
  throw Error('Unknown action: ' + type)
}

export const useStepper = () => {
  const [context, dispatch] = useReducer(reducer, null, createSchedule)
  return { context, dispatch }
}
