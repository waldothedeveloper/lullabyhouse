import { useEffect, useState } from 'react'

import { isValueAnObject } from '@/utils/isValueAnObject'
import { notify } from '@/components/Notifications'
import toast from 'react-hot-toast'
import { useExtras } from '@/hooks/useExtras'
import { useFrequency } from '@/hooks/useFrequency'
import { useHandleCalendar } from '@/hooks/useHandleCalendar'
import { useNotes } from '@/hooks/useNotes'
import { usePets } from '@/hooks/usePets'
import { useRouter } from 'next/router'
import { useSchedule } from '@/context/provideScheduleContext'
import { validate } from '@/utils/validateStep3'

//
export const useForm = () => {
  const router = useRouter()
  const { dispatch } = useSchedule()
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { extrasSelected, handleExtraSelect } = useExtras()

  const {
    pets,
    handlePets,
    petQuantity,
    handlePetQuantity,
    selectedPetQuantity,
  } = usePets()

  const { selectedService, handleSelectedService } = useFrequency()

  const {
    today,
    days,
    nextMonth,
    previousMonth,
    selectedDay,
    setSelectedDay,
    handleTime,
    hours,
    currentMonth,
    timeAndDateOfBooking,
    firstDayCurrentMonth,
  } = useHandleCalendar()

  const { handleNotes, notes } = useNotes()

  // checking the type of some values
  const bookingDate = isValueAnObject(timeAndDateOfBooking)
  const frequency = isValueAnObject(selectedService)
  const noErrors = errors && Object.keys(errors).length === 0

  // show notification errors
  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      notify(errors)
    }
  }, [errors])

  // populate local error state if the form has errors
  useEffect(() => {
    if (isSubmitting) {
      setErrors(validate(selectedService, timeAndDateOfBooking))
    }
  }, [selectedService, timeAndDateOfBooking, isSubmitting])

  // dismiss notification errors
  useEffect(() => {
    if (noErrors && isSubmitting) {
      toast.dismiss()
      setIsSubmitting(false)
    }
  }, [noErrors, errors, isSubmitting])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(selectedService, timeAndDateOfBooking))
    // submit your changes
    dispatch({
      type: 3,
      data: {
        selectedService,
        timeAndDateOfBooking,
        extrasSelected,
        petQuantity,
        notes,
      },
    })
    // this will allow to submit the form if there's not errors, and after all mandatory options have been selected
    if (noErrors && bookingDate && frequency) {
      router.push(`/checkout`)
    }
  }

  return {
    errors,
    handleSubmit,
    today,
    days,
    nextMonth,
    previousMonth,
    selectedDay,
    setSelectedDay,
    handleTime,
    hours,
    currentMonth,
    firstDayCurrentMonth,
    handleExtraSelect,
    handleSelectedService,
    selectedService,
    extrasSelected,
    pets,
    handlePets,
    petQuantity,
    handlePetQuantity,
    selectedPetQuantity,
    handleNotes,
    notes,
  }
}
