import { Calendar } from '@/components/schedule/step3/Calendar'
import { ServiceHours } from '@/components/schedule/step3/Hours'

//
export const CalendarWrapper = ({
  errors,
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
}) => {
  //
  return (
    <div className="space-y-6 sm:space-y-5">
      <div className="sm:grid sm:grid-cols-6 sm:items-start sm:gap-6 sm:border-t sm:border-slate-200 sm:pt-5">
        <label
          htmlFor="cover-photo"
          className={
            errors?.dateAndTime
              ? 'block text-sm font-medium text-red-500 sm:mt-px sm:pt-2'
              : 'block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2'
          }
        >
          Pick a Date and Time
          <span
            className={
              errors?.dateAndTime
                ? 'mt-1 block text-xs text-red-400'
                : 'mt-1 block text-xs text-slate-400'
            }
          >
            Depending on the type of service, such as holidays or special
            events, after-hours services may incur additional convenience fees.
          </span>
        </label>

        <div className="mt-1 sm:col-span-3 sm:mt-0">
          <Calendar
            errors={errors}
            today={today}
            days={days}
            nextMonth={nextMonth}
            previousMonth={previousMonth}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            handleTime={handleTime}
            currentMonth={currentMonth}
            firstDayCurrentMonth={firstDayCurrentMonth}
          />
        </div>
        <div className="mt-1 sm:col-span-2 sm:col-start-5 sm:mt-0">
          <ServiceHours errors={errors} hours={hours} handleTime={handleTime} />
        </div>
      </div>
    </div>
  )
}
