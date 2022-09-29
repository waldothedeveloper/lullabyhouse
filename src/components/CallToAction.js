import {
  AcademicCapIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import { BlurryColoredBg } from '@/components/BlurryColoredBg'

//
const benefits = [
  {
    id: 0,
    text: `Money back guaranteed`,
    icon: (
      <BanknotesIcon className="h-6 w-6 text-slate-900 dark:text-slate-300" />
    ),
  },
  {
    id: 1,
    text: `Fully bonded & insured`,
    icon: (
      <ShieldCheckIcon className="h-6 w-6 text-slate-900 dark:text-slate-300" />
    ),
  },
  {
    id: 2,
    text: `Best Florida Cleaning Company of ${new Date().getFullYear()}`,
    icon: (
      <AcademicCapIcon className="h-6 w-6 text-slate-900 dark:text-slate-300" />
    ),
  },
]

//
export const CallToAction = () => {
  return (
    <section className="py-12 dark:bg-slate-800 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl px-8 py-10 md:py-20 lg:px-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl">
              Say goodbye 👋 to the cleaning hassles and hello 😘 to a clean
              house every day.
            </h2>
          </div>

          <ul className="mt-8 flex flex-col items-center justify-center space-y-5 sm:mt-12 md:flex-row md:space-y-0 md:space-x-12 lg:mt-16">
            {benefits.map((elem) => (
              <li
                key={elem.id}
                className="flex items-center text-slate-900 dark:text-slate-300"
              >
                <span>{elem.icon}</span>
                <span className="ml-3 text-lg font-bold"> {elem.text} </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center sm:mt-12">
            <div className="group relative inline-flex">
              <BlurryColoredBg>Schedule a Cleaning</BlurryColoredBg>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-800 dark:text-slate-400">
              100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
