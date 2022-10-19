import { RadioGroup } from '@headlessui/react'
import { classNames } from '@/utils/classNames'
import { hoursMapping } from '@/utils/hours'

//
export const ServiceHours = ({ handleTime, hours }) => {
  return (
    <RadioGroup defaultValue={hours} onChange={handleTime} name="select_hours">
      <RadioGroup.Label className="sr-only">
        Select a time for the cleaning schedule
      </RadioGroup.Label>
      <div className="h-96 space-y-4 overflow-y-auto px-6 py-2">
        {hoursMapping.map((service) => (
          <RadioGroup.Option
            key={service.time}
            value={service}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent bg-cyan-500' : 'border-slate-300',
                active
                  ? 'border-cyan-500 bg-cyan-500 ring-2 ring-cyan-600'
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
                      {service.time}
                    </RadioGroup.Label>
                  </span>

                  <span
                    className={
                      active
                        ? 'text-xs font-medium text-white'
                        : checked
                        ? 'text-xs font-medium text-white'
                        : 'text-xs font-medium text-slate-900'
                    }
                  >
                    {service.afterHours ? 'after-hours' : ''}
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
