import { isValid } from 'date-fns'
import { serviceFrequency } from '@/utils/services'
//
export const validate = (frequency, dateAndTime) => {
  const errors = {}

  const noServiceFrequencySelected = serviceFrequency.filter(
    (elem) => elem?.title === frequency?.title
  )
  if (noServiceFrequencySelected.length === 0) {
    errors.frequency = `To get a quote, choose one of the available cleaning frequencies`
  }

  if (!dateAndTime || !isValid(dateAndTime)) {
    errors.dateAndTime = `Please select a date and a time for your cleaning quote`
  }

  return errors
}
