import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  format,
  getDay,
  getMonth,
  getYear,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
} from 'date-fns'

// import { NextStep } from '@/components/schedule/NextStep'
import { classNames } from '@/utils/classNames'
import { useHandleCalendar } from '@/hooks/useHandleCalendar'

const colStartClasses = [
  '',
  'col-start-2 ',
  'col-start-3 ',
  'col-start-4 ',
  'col-start-5 ',
  'col-start-6 ',
  'col-start-7 ',
]

// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ]

//
export const Calendar = () => {
  const {
    today,
    days,
    nextMonth,
    previousMonth,
    selectedDay,
    setSelectedDay,
    currentMonth,
    firstDayCurrentMonth,
  } = useHandleCalendar()

  //
  return (
    <div className="mx-auto max-w-lg text-center">
      <div className="flex flex-shrink-0 flex-col items-center text-slate-900">
        {/* <p className="max-w-xs p-3 text-xs font-medium text-slate-400">
          Dates past{' '}
          <strong className="font-semibold text-slate-600">
            {months[getMonth(today)]}
          </strong>{' '}
          are not available. You can schedule a date for the current month or
          future months.
        </p> */}
        <div className="mt-6 flex w-full items-center">
          <button
            disabled={
              (getMonth(today) === getMonth(new Date(currentMonth)) &&
                getYear(today) === getYear(new Date(currentMonth))) ||
              false
            }
            onClick={previousMonth}
            type="button"
            className={
              getMonth(today) === getMonth(new Date(currentMonth)) &&
              getYear(today) === getYear(new Date(currentMonth))
                ? '-m-1.5 flex flex-none items-center justify-center p-1.5 text-slate-200'
                : '-m-1.5 flex flex-none items-center justify-center p-1.5 text-slate-400 hover:text-slate-500'
            }
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>{' '}
          <div className="flex-auto font-semibold">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </div>
          <button
            onClick={nextMonth}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-slate-400 hover:text-slate-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-slate-500">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px text-sm">
        {days.map((day, dayIdx) => (
          <button
            type="button"
            key={day.toString()}
            disabled={isBefore(day, today) ? true : false}
            onClick={() => setSelectedDay(day)}
            className={classNames(
              isBefore(day, today)
                ? 'py-1.5'
                : 'py-1.5 hover:bg-slate-100 focus:z-10',
              isSameMonth(day, firstDayCurrentMonth)
                ? 'bg-white'
                : 'bg-slate-50',
              (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
              isEqual(day, selectedDay) && 'text-white',
              !isEqual(day, selectedDay) &&
                isSameMonth(day, firstDayCurrentMonth) &&
                !isToday(day) &&
                'text-slate-900',
              !isEqual(day, selectedDay) &&
                !isSameMonth(day, firstDayCurrentMonth) &&
                !isToday(day) &&
                'text-slate-400',
              isToday(day) && !isEqual(day, selectedDay) && 'text-rose-500',
              isBefore(day, today) && 'text-slate-400',
              dayIdx === 0 && colStartClasses[getDay(day)]
            )}
          >
            <time
              dateTime={format(day, 'yyyy-MM-dd')}
              className={classNames(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                isEqual(day, selectedDay) && isToday(day) && 'bg-cyan-500',
                isEqual(day, selectedDay) && !isToday(day) && 'bg-cyan-500'
              )}
            >
              {format(day, 'd')}
            </time>
          </button>
        ))}
      </div>
    </div>
  )
}
