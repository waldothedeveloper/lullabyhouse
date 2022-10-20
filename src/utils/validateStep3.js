import { isValid } from 'date-fns'
import { serviceFrequency } from '@/utils/services'
//
export const validate = (frequency, dateAndTime) => {
  console.log('dateAndTime: ', dateAndTime)
  console.log('frequency: ', frequency)
  let errors = {}

  const noServiceFrequencySelected = serviceFrequency.filter(
    (elem) => elem?.title === frequency?.title
  )
  if (noServiceFrequencySelected.length === 0) {
    errors.frequency = `Please select at least one type of frecuency for your cleaning quote`
  }

  if (!dateAndTime || !isValid(dateAndTime)) {
    errors.dateAndTime = `Please select a date and a time for your cleaning quote`
  }

  return errors
}
