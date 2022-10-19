import { CheckCircleIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'
import { RadioGroup } from '@headlessui/react'
import { SavingsToolTip } from '@/components/schedule/step3/SavingsToolTip'
import { classNames } from '@/utils/classNames'
import { services } from '@/utils/services'

//
export const Frequency = ({ selectedService, setSelectedService }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2"
      >
        Choose your Frequency
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <RadioGroup value={selectedService} onChange={setSelectedService}>
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
      </div>
    </div>
  )
}

Frequency.propTypes = {
  selectedService: PropTypes.object,
  setSelectedService: PropTypes.func,
}