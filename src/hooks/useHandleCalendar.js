import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns'

import { useRouter } from 'next/router'
import { useSchedule } from '@/context/provideScheduleContext'
import { useState } from 'react'

export const useHandleCalendar = () => {
  const router = useRouter()
  const { handleStepContext } = useSchedule()
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(null)
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

  const handleSelectCleaningDate = (step, data) => {
    handleStepContext({ step, data })
    return router.push(`/schedule/start`)
  }

  return {
    today,
    days,
    nextMonth,
    previousMonth,
    selectedDay,
    setSelectedDay,
    currentMonth,
    firstDayCurrentMonth,
    handleSelectCleaningDate,
  }
}
