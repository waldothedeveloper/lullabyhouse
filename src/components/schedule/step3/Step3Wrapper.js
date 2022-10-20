import { CalendarWrapper } from '@/components/schedule/step3/CalendarWrapper'
import { Extras } from '@/components/schedule/step3/Extras'
import { Frequency } from '@/components/schedule/step3/Frequency'
import Link from 'next/link'
import { useExtras } from '@/hooks/useExtras'
import { useFrequency } from '@/hooks/useFrequency'
import { useHandleCalendar } from '@/hooks/useHandleCalendar'
//

export const Step3Wrapper = () => {
  const { selectedService, setSelectedService } = useFrequency()
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
    firstDayCurrentMonth,
  } = useHandleCalendar()
  const { extrasSelected, handleExtraSelect } = useExtras()

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-8 divide-y divide-slate-200"
    >
      <div className="space-y-8 divide-y divide-slate-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-slate-900">
              Schedule a Date and Time
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              These are the final step to get an accurate quote. Try our
              services today. We will make you a believer.
            </p>
          </div>
          <Frequency
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
          <CalendarWrapper
            today={today}
            days={days}
            nextMonth={nextMonth}
            hours={hours}
            previousMonth={previousMonth}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            handleTime={handleTime}
            currentMonth={currentMonth}
            firstDayCurrentMonth={firstDayCurrentMonth}
          />
        </div>
        <Extras extras={extrasSelected} handleExtraSelect={handleExtraSelect} />
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Link
            href="/schedule/start"
            className="rounded-md border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Go back
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Ok, show me my quote
          </button>
        </div>
      </div>
    </form>
  )
}
