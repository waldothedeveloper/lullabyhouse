import { Complete, Current, Upcoming } from './ScheduleStates'

import { scheduleSteps } from '@/utils/scheduleSteps'
import { useSchedule } from '@/context/provideScheduleContext'

export const Stepper = () => {
  const { context, setContext } = useSchedule()
  //
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center" aria-label="Progress">
        <div className="w-full space-y-6">
          {Object.values(context).map((step) => (
            <div key={step.id} className="group relative" aria-label="Home">
              {/* <span className="absolute inset-0" aria-hidden="true" /> */}
              {step.status === 'complete' ? (
                <Complete step={step} />
              ) : step.status === 'current' ? (
                <Current step={step} reset={setContext} />
              ) : (
                <Upcoming step={step} />
              )}
            </div>
          ))}
        </div>
      </nav>
      <button
        onClick={() => setContext(scheduleSteps)}
        className="my-3 ml-1 text-sm font-medium text-rose-700"
      >
        Reset Progress
      </button>
    </div>
  )
}
