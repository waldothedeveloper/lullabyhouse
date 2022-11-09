import { isValid } from 'date-fns'
import { isValueAnArray } from '@/utils/isValueAnArray'
import { serviceFrequency } from '@/utils/services'
//
export const validate = (frequency, dateAndTime, pets) => {
  const errors = {}

  const noServiceFrequencySelected = serviceFrequency.filter(
    (elem) => elem?.title === frequency?.title
  )
  if (noServiceFrequencySelected.length === 0) {
    errors.frequency = `To get a quote, choose one of the available cleaning frequencies`
    // errors = {
    //   frequency: `To get a quote, choose one of the available cleaning frequencies`,
    //   id: `freq_id`,
    // }
  }

  if (!dateAndTime || !isValid(dateAndTime)) {
    errors.dateAndTime = `Please select a date and a time for your cleaning quote`
    // errors = {
    //   dateAndTime: `Please select a date and a time for your cleaning quote`,
    //   id: `date_n_time`,
    // }
  }

  const doesUserHasPets =
    pets && isValueAnArray(pets) && pets.filter((pet) => pet.checked)

  if (
    doesUserHasPets &&
    isValueAnArray(doesUserHasPets) &&
    doesUserHasPets.length === 0
  ) {
    errors.pets = `Please let us know if you have household pets`
  }

  return errors
}
