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
      const petQuantity = data?.petQuantity.filter((pet) => pet.checked)

      return {
        ...state,
        date: {
          ...state.date,
          status: 'complete',
          serviceFrecuency: data?.selectedService,
          verifiedDateAndTime: data?.timeAndDateOfBooking,
          extras: data?.extrasSelected.filter((elem) => elem.checked),
          pets: {
            quantity: petQuantity.length > 0 ? petQuantity[0].quantity : 0,
            price:
              petQuantity.length > 0
                ? petQuantity[0].quantity >= 3
                  ? 50
                  : 25
                : 0,
          },
          notes: data?.notes?.length > 0 ? data?.notes : ``,
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
  
  return { context, dispatch }
}
