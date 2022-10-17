import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { SavingsToolTip } from '@/components/schedule/step3/SavingsToolTip'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'

//
const services = [
  {
    id: 1,
    title: 'Just once',
    circleIconColor: 'h-5 w-5 text-slate-600',
    borderColor: 'border-slate-500',
    active: 'border-slate-500 ring-2 ring-slate-500',
    textColor: 'relative block text-sm font-medium text-slate-800',
  },
  {
    id: 2,
    title: 'Every week',
    savingsTip: 'Get 20% off',
    color:
      'inline-flex whitespace-nowrap rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow shadow-cyan-500/75',
    circleIconColor: 'h-5 w-5 text-cyan-600',
    borderColor: 'border-cyan-500',
    active: 'border-cyan-500 ring-2 ring-cyan-500',
    textColor: 'relative block text-sm font-medium text-cyan-800',
  },
  {
    id: 3,
    title: 'Every 2 weeks',
    savingsTip: 'Get 15% off',
    color:
      'inline-flex whitespace-nowrap rounded-full bg-green-500 px-4 py-1 text-xs font-semibold text-white shadow shadow-green-500/75',
    circleIconColor: 'h-5 w-5 text-green-600',
    borderColor: 'border-green-500',
    active: 'border-green-500 ring-2 ring-green-500',
    textColor: 'relative block text-sm font-medium text-green-800',
  },
  {
    id: 4,
    title: 'Once a month',
    savingsTip: 'Get 10% off',
    color:
      'inline-flex whitespace-nowrap rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white shadow shadow-indigo-500/75',
    circleIconColor: 'h-5 w-5 text-indigo-600',
    borderColor: 'border-indigo-500',
    active: 'border-indigo-500 ring-2 ring-indigo-500',
    textColor: 'relative block text-sm font-medium text-indigo-800',
  },
]

//
export const ServiceFrequency = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(services[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {services.map((service) => (
          <RadioGroup.Option
            key={service.id}
            value={service}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-slate-300',
                active ? service.active : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={
                        checked
                          ? service.textColor
                          : active
                          ? service.textColor
                          : 'relative block text-sm font-medium text-slate-800'
                      }
                    >
                      <SavingsToolTip list={service} />
                      {service.title}
                    </RadioGroup.Label>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? 'invisible' : '',
                    service.circleIconColor
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? service.borderColor : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
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
