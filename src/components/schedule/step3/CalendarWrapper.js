import { Calendar } from '@/components/schedule/Calendar'
import { ServiceHours } from '@/components/schedule/step3/Hours'

export const CalendarWrapper = () => {
  return (
    <div className="space-y-6 sm:space-y-5">
      <div className="sm:grid sm:grid-cols-6 sm:items-start sm:gap-6 sm:border-t sm:border-slate-200 sm:pt-5">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2"
        >
          Pick a Date and Time
          <span className="mt-1 block text-xs text-slate-400">
            Depending on the type of service, such as holidays or special
            events, after-hours services may incur additional convenience fees.
          </span>
        </label>

        <div className="mt-1 sm:col-span-3 sm:mt-0">
          <Calendar />
        </div>
        <div className="mt-1 sm:col-span-2 sm:col-start-5 sm:mt-0">
          <ServiceHours />
        </div>
      </div>
    </div>
  )
}
