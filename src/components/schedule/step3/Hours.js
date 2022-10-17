import { RadioGroup } from '@headlessui/react'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'

//
const hours = [
  { time: '8:00AM', afterHours: false },
  { time: '8:30AM', afterHours: false },
  { time: '9:00AM', afterHours: false },
  { time: '9:30AM', afterHours: false },
  { time: '10:00AM', afterHours: false },
  { time: '10:30AM', afterHours: false },
  { time: '11:00AM', afterHours: false },
  { time: '11:30AM', afterHours: false },
  { time: '12:00PM', afterHours: false },
  { time: '12:30PM', afterHours: false },
  { time: '1:00PM', afterHours: false },
  { time: '1:30PM', afterHours: false },
  { time: '2:00PM', afterHours: false },
  { time: '2:30PM', afterHours: false },
  { time: '3:00PM', afterHours: false },
  { time: '3:30PM', afterHours: false },
  { time: '4:00PM', afterHours: false },
  { time: '4:30PM', afterHours: false },
  { time: '5:00PM', afterHours: false },
  { time: '5:30PM', afterHours: true },
  { time: '6:00PM', afterHours: true },
  { time: '6:30PM', afterHours: true },
  { time: '7:00PM', afterHours: true },
  { time: '7:30PM', afterHours: true },
  { time: '8:00PM', afterHours: true },
  { time: '8:30PM', afterHours: true },
  { time: '9:00PM', afterHours: true },
  { time: '9:30PM', afterHours: true },
  { time: '10:00PM', afterHours: true },
  { time: '10:30PM', afterHours: true },
  { time: '11:00PM', afterHours: true },
  { time: '11:30PM', afterHours: true },
  { time: '12:00AM', afterHours: true },
]
//
export const ServiceHours = () => {
  const [selected, setSelected] = useState(null)

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only"> Server size </RadioGroup.Label>
      <div className="h-96 space-y-4 overflow-y-auto px-6 py-2">
        {hours.map((plan) => (
          <RadioGroup.Option
            key={plan.time}
            value={plan}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent bg-cyan-500' : 'border-gray-300',
                active
                  ? 'border-cyan-600 bg-cyan-500 ring-2 ring-cyan-600'
                  : '',
                'relative block cursor-pointer rounded-md border bg-white px-6 py-4 text-center shadow-sm focus:outline-none sm:flex sm:justify-between'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex w-full flex-col items-center justify-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked || active ? 'text-white' : 'text-slate-800',
                        'font-semibold'
                      )}
                    >
                      {plan.time}
                    </RadioGroup.Label>
                  </span>

                  <span
                    className={
                      active || checked
                        ? 'text-xs font-medium text-white'
                        : 'text-xs font-medium text-slate-900'
                    }
                  >
                    {plan.afterHours ? 'after-hours' : ''}
                  </span>
                </span>

                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-cyan-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-md'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
