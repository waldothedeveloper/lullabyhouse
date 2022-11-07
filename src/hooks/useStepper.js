import { scheduleSteps } from '@/utils/scheduleSteps'
import { useReducer } from 'react'

const createSchedule = () => scheduleSteps

const reducer = (state, action) => {
  const { type, data } = action

  switch (type) {
    case 1: {
      return {
        ...state,
        typeOfCleaning: {
          ...state.typeOfCleaning,
          status: 'complete',
          typesOfServices: data,
        },
        address: {
          ...state.address,
          status: 'current',
        },
      }
    }

    case 2:
      return {
        ...state,
        address: {
          ...state.address,
          status: 'complete',
          verifiedAddress: data?.customerAddress[0]?.description,
          propertyDetails: data?.propertyDetails,
        },
        date: { ...state.date, status: 'current' },
      }
    case 3: {
      return {
        ...state,
        date: {
          ...state.date,
          status: 'complete',
          serviceFrecuency: data?.selectedService,
          verifiedDateAndTime: data?.timeAndDateOfBooking,
          extras: data?.extrasSelected.filter((elem) => elem.checked),
          pets: {
            quantiy: data?.petQuantity.filter((pet) => pet.checked),
          },
        },
      }
    }
    case 'reset':
      return createSchedule()

    default:
      break
  }
  throw Error(`Unknown action: ${type}`)
}

export const useStepper = () => {
  const [context, dispatch] = useReducer(reducer, null, createSchedule)
  console.log('context: ', context)
  return { context, dispatch }
}
