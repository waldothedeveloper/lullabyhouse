import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Combobox, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import Image from 'next/future/image'
import { NextStep } from '@/components/schedule/step2/NextStep'
import { PropertyDetails } from '@/components/schedule/step2/PropertyDetails'
import { PropertyNotFound } from '@/components/schedule/step2/PropertyNotFound'
import { addressFetcher } from '@/utils/addressFetcher'
import dogBored from '@/images/dog_bored.jpg'
import { folioFetcher } from '@/utils/folioFetcher'
import house from '@/images/house_with_stairs.jpg'
import { useFindAddressFolio } from '@/hooks/useFindAddressFolio'
import { useGetAddressByFolio } from '@/hooks/useGetAddressByFolio'
import { useVerifyAddress } from '@/hooks/useVerifyAddress'

//
export const GetClientAddress = () => {
  const {
    value,
    handleSelect,
    handleInput,
    data,
    validAddress,
    status,
    setValidAddress,
  } = useVerifyAddress()
  const { addressFolio } = useFindAddressFolio(validAddress, addressFetcher)
  const { addressDetails } = useGetAddressByFolio(addressFolio, folioFetcher)
  const showNextStep = addressDetails && addressDetails?.status === 200

  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-y-10 md:grid-cols-3">
            <div className="pr-12 sm:pr-0">
              <div className="relative mb-12 max-w-xs">
                <Image
                  className="rounded-md object-bottom"
                  src={house}
                  layout="responsive"
                  alt="Photo by Jason Briscoe on Unsplash"
                />
                <Image
                  className="absolute -bottom-12 -right-12 origin-bottom-right scale-75 rounded-md"
                  src={dogBored}
                  layout="responsive"
                  alt="Photo by Brina Blum on Unsplash"
                />
              </div>
            </div>
            {addressFolio && addressFolio.status !== 200 ? (
              <div className="col-span-2">
                <PropertyNotFound startOver={setValidAddress} />
              </div>
            ) : (
              <div className="h-full overflow-hidden rounded-lg md:col-span-2">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid gap-8 sm:gap-x-12 sm:gap-y-10 md:grid-cols-2">
                    <div className="px-4 py-5 sm:px-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-tight text-black dark:text-slate-50">
                          Location📍
                        </h2>
                        <p className="mt-2 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                          Let&apos;s start by typing your residential address.
                          This will be the address were we will clean.
                        </p>
                      </div>
                      <div className="mt-6">
                        <Combobox value={value} onChange={handleSelect}>
                          <div className="relative mt-1">
                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-50 sm:text-sm">
                              <Combobox.Input
                                placeholder="Let's get your address"
                                className="w-full scroll-py-3.5 border-none px-3 text-base font-medium leading-5 text-slate-900 focus:ring-0"
                                displayValue={value}
                                onChange={(event) =>
                                  handleInput(event.target.value)
                                }
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
                              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {data.length === 0 && value !== '' ? (
                                  <div className="relative cursor-default select-none py-2 px-4 text-slate-700">
                                    Nothing found so far. Check your spelling or
                                    try a different address.
                                  </div>
                                ) : (
                                  status === 'OK' &&
                                  data.map(({ place_id, description }) => (
                                    <Combobox.Option
                                      key={place_id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-3 pr-4 text-sm ${
                                          active
                                            ? 'bg-teal-600 text-white'
                                            : 'text-slate-900'
                                        }`
                                      }
                                      value={description}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? 'font-medium'
                                                : 'font-normal'
                                            }`}
                                          >
                                            {description}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active
                                                  ? 'text-white'
                                                  : 'text-teal-600'
                                              }`}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
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
                      <Transition
                        show={showNextStep ? true : false}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        {showNextStep && (
                          <NextStep
                            step="1"
                            customerAddress={validAddress}
                            propertyDetails={addressDetails}
                          />
                        )}
                      </Transition>
                    </div>

                    <PropertyDetails propertyDetails={addressDetails} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
