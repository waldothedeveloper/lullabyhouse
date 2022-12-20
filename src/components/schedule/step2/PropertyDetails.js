import {
  BiArea,
  BiBath,
  BiBed,
  BiCalendarEvent,
  BiHomeSmile,
} from 'react-icons/bi'

import { BsBarChartSteps } from 'react-icons/bs'
import PropTypes from 'prop-types'
import { PropertyDisclaimer } from '@/components/schedule/step2/PropertyDisclaimer'

//
export const PropertyDetails = ({ propertyDetails }) => {
  const {
    beds,
    halfBath,
    bath,
    livableArea,
    floors,
    year_built,
    status,
    neighborhood,
  } = propertyDetails || {}

  return status && status !== 200 ? (
    <section className="flex flex-col rounded-xl bg-slate-100 pt-12 shadow-lg dark:bg-slate-700 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50">
            Property Details
          </h2>
          <p className="mt-4 text-base font-medium text-slate-800 dark:text-slate-400">
            We are sorry, but this isn&apos;t a residential property. As of
            right now, Residential customers are the only ones we serve.
          </p>
        </div>
      </div>
      <PropertyDisclaimer />
    </section>
  ) : propertyDetails && Object.keys(propertyDetails).length > 0 ? (
    <section className="flex flex-col rounded-xl bg-slate-100 pt-12 shadow-lg dark:bg-slate-700 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50">
            Property Details
          </h2>
          <p className="mt-4 text-base font-medium text-slate-800 dark:text-slate-400">
            Here are your property&apos;s facts and features:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-10">
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Bedrooms
              </div>
              <div className="mt-1 inline-flex items-center">
                <BiBed className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p className="text-base font-medium text-slate-800 dark:text-slate-300">
                  {beds}
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Bathrooms / Half
              </div>
              <div className="mt-1 inline-flex items-center">
                <BiBath className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p className="text-base font-medium text-slate-800 dark:text-slate-300">
                  {halfBath ? bath : bath} / {halfBath ? halfBath : 0}
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Livable Area
              </div>
              <div className="mt-1 inline-flex items-center">
                <BiArea className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p
                  className={
                    Number(livableArea <= 0)
                      ? `rounded-lg bg-slate-200 px-1 text-base font-medium text-slate-800 dark:text-slate-300`
                      : 'rounded-lg bg-teal-200 px-1 text-base font-medium text-slate-800 dark:bg-transparent dark:text-slate-300'
                  }
                >
                  {Number(livableArea) <= 0 ? `-` : `${livableArea} sq.ft.`}
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Floors
              </div>
              <div className="mt-1 inline-flex items-center">
                <BsBarChartSteps className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p className="text-base font-medium text-slate-800 dark:text-slate-300">
                  {floors === 0 ? `Other` : floors}
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Year Built
              </div>
              <div className="mt-1 inline-flex items-center">
                <BiCalendarEvent className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p
                  className={
                    year_built.length > 4
                      ? `text-ellipsis text-xs font-medium text-slate-800 dark:text-slate-300`
                      : `text-ellipsis text-base font-medium text-slate-800 dark:text-slate-300`
                  }
                >
                  {year_built}
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="font-bold text-slate-800 dark:text-slate-100">
                Neighborhood
              </div>
              <div className="mt-1 inline-flex items-center">
                <BiHomeSmile className="inline-flex h-12 w-12 items-center  px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-300" />
                <p className="text-ellipsis text-sm font-medium text-slate-800 dark:text-slate-300">
                  {neighborhood}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertyDisclaimer />
    </section>
  ) : (
    <section className="rounded-xl bg-slate-100 py-12 shadow-lg dark:bg-slate-500 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <h2 className="w-full text-3xl font-bold text-slate-800 dark:text-slate-50">
            Your property details
          </h2>
          <p className="mt-4 text-base font-medium text-slate-500 dark:text-slate-50">
            The details will appear here once we have your property address.
          </p>
        </div>
        <div className="mt-12 grid animate-pulse grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10">
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="h-1 w-24 bg-slate-400 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-800" />

              <div className="mt-1 inline-flex items-center">
                <BiBed className="inline-flex h-12 w-12 items-center px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-800" />
                <p className="h-1 w-12 rounded bg-slate-400 text-base font-medium dark:bg-slate-800" />
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="h-1 w-24 bg-slate-400 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-800" />

              <div className="mt-1 inline-flex items-center">
                <BiBath className="inline-flex h-12 w-12 items-center px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-800" />
                <p className="h-1 w-12 rounded bg-slate-400 text-base font-medium dark:bg-slate-800" />
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="h-1 w-24 bg-slate-400 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-800" />

              <div className="mt-1 inline-flex items-center">
                <BiArea className="inline-flex h-12 w-12 items-center px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-800" />
                <p className="h-1 w-12 rounded bg-slate-400 text-base font-medium dark:bg-slate-800" />
              </div>
            </div>
          </div>
          <div className="relative sm:flex sm:items-center">
            <div className="relative">
              <div className="h-1 w-24 bg-slate-400 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-800" />

              <div className="mt-1 inline-flex items-center">
                <BsBarChartSteps className="inline-flex h-12 w-12 items-center px-3 py-0.5 text-sm font-medium text-slate-400 dark:text-slate-800" />
                <p className="h-1 w-12 rounded bg-slate-400 text-base font-medium dark:bg-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PropertyDetails.propTypes = {
  propertyDetails: PropTypes.object,
}
