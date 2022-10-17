import {
  ArrowRightIcon,
  CheckIcon,
  LockClosedIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import PropTypes from 'prop-types'

//
const Numbers = ({ step }) => {
  return step.status === 'current' ? (
    <div className="absolute top-14 -left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-sky-600 bg-white dark:text-slate-800">
      {step.id}
    </div>
  ) : step.status === 'complete' ? (
    <div className="absolute top-14 -left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-green-600">
      <CheckIcon className="h-5 w-5 text-green-50" />
    </div>
  ) : (
    <div className="absolute top-14 -left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-400">
      {step.id}
    </div>
  )
}

export const Complete = ({ step }) => {
  return (
    <>
      <Numbers step={step} />
      <div className="rounded-xl border-2 border-green-600 bg-green-50 pr-6 pl-6 pt-4 pb-8 dark:bg-transparent">
        <div className="flex justify-between">
          <div>
            <h5 className="font-bold text-green-700">{step.title}</h5>
            <p className="pt-3 text-sm font-medium text-green-600">
              {step.description}
            </p>
          </div>
          <Link href={step.href} className="flex h-3 items-center">
            <p className="font-semibold text-green-600">Edit</p>
            <PencilIcon className="h-4 w-6 text-green-500 dark:text-white" />
          </Link>
        </div>
      </div>
    </>
  )
}

export const Upcoming = ({ step }) => (
  <>
    <Numbers step={step} />
    <div className="rounded-xl border-2 border-slate-100 pr-6 pl-6 pt-4 pb-8">
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold text-slate-400">{step.title}</h5>
          <p className="pt-3 font-sans text-sm font-medium text-slate-400">
            {step.description}
          </p>
        </div>
        <LockClosedIcon className="h-10 w-10 text-slate-300" />
      </div>
    </div>
  </>
)

export const Current = ({ step }) => (
  <>
    <Numbers step={step} />
    <div className="rounded-xl border-2 border-sky-600 pr-6 pl-6 pt-4 pb-8 shadow-lg shadow-sky-500/40">
      <div className="flex w-full">
        <div>
          <h5 className="font-bold text-slate-700 dark:text-slate-50">
            {step.title}
          </h5>
          <p className="pt-3 text-sm font-medium text-slate-500 dark:text-slate-200">
            {step.description}
          </p>
        </div>
        <Link href={step.href} className="flex h-3 items-center">
          <p className="text-sm font-semibold text-sky-500 dark:text-white">
            Start
          </p>
          <ArrowRightIcon className="h-4 w-6 text-sky-500 dark:text-white" />
        </Link>
      </div>
    </div>
  </>
)

Numbers.propTypes = {
  step: PropTypes.object.isRequired,
}

Complete.propTypes = {
  step: PropTypes.object.isRequired,
}

Upcoming.propTypes = {
  step: PropTypes.object.isRequired,
}

Current.propTypes = {
  step: PropTypes.object.isRequired,
}
