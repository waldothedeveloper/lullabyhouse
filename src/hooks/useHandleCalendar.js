import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isValid,
  parse,
  set,
  startOfToday,
} from 'date-fns'
import { useEffect, useState } from 'react'

export const useHandleCalendar = () => {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(null)
  const [timeAndDateOfBooking, setTimeAndDateOfBooking] = useState(null)
  const [hours, setHandleHours] = useState(null)
  const [fullHours, setFullHours] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  //
  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  const firstDayOfNextMonth = (numberOfMonthsToAdd) =>
    add(firstDayCurrentMonth, { months: numberOfMonthsToAdd })

  const nextMonth = () => {
    firstDayOfNextMonth(1)
    setCurrentMonth(format(firstDayOfNextMonth(1), 'MMM-yyyy'))
  }

  const previousMonth = () => {
    firstDayOfNextMonth(-1)
    setCurrentMonth(format(firstDayOfNextMonth(-1), 'MMM-yyyy'))
  }

  const handleTime = ({ time, militaryHour, minutes }) => {
    setHandleHours(time)
    setFullHours({ time, militaryHour, minutes })
  }

  // I'm not 100% convinced with this thing here, I'll think about it
  useEffect(() => {
    const result = set(selectedDay, {
      hours: fullHours?.militaryHour,
      minutes: fullHours?.minutes,
    })

    if (selectedDay && fullHours && isValid(selectedDay)) {
      setTimeAndDateOfBooking(result)
    }
  }, [fullHours, selectedDay])

  return {
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
    timeAndDateOfBooking,
  }
}
