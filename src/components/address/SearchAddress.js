import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Combobox, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import PropTypes from 'prop-types'

export const SearchAddress = ({
  structuredAddress,
  handleSelect,
  handleInput,
  data,
  status,
  // value,
}) => {
  return (
    <div>
      <Combobox
        value={structuredAddress?.addressLine1 || ''}
        onChange={handleSelect}
      >
        <div className="relative">
          <div>
            <Combobox.Input
              placeholder="Type your address here..."
              className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              displayValue={structuredAddress?.addressLine1 || ''}
              onChange={(event) => handleInput(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options
              className={
                data.length <= 0
                  ? 'absolute mt-1 max-h-60 w-full overflow-auto'
                  : 'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              }
            >
              {status === 'ZERO_RESULTS' ? (
                <p className="text-sm text-red-600">
                  Mmm...that address doesn&apos;t seem right. Check the
                  spelling, try again.
                </p>
              ) : (
                status === 'OK' &&
                data.map(({ place_id, description }) => (
                  <Combobox.Option
                    key={place_id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-4 text-sm ${
                        active ? 'bg-teal-600 text-white' : 'text-slate-900'
                      }`
                    }
                    value={description}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {description}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

SearchAddress.propTypes = {
  structuredAddress: PropTypes.object,
  handleSelect: PropTypes.func,
  handleInput: PropTypes.func,
  data: PropTypes.array,
  value: PropTypes.string,
  status: PropTypes.string,
}
