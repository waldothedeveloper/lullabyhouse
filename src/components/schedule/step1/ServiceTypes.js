// import { Attribution } from '@/components/schedule/Attribution'
import Image from 'next/image'
import Link from 'next/link'
import { classNames } from '@/utils/classNames'
import { typesOfCleaningServices } from '@/utils/cleaningServices'
import { useRouter } from 'next/router'
import { useSchedule } from '@/context/provideScheduleContext'

//
export const ServiceTypes = () => {
  const router = useRouter()
  const { handleStepContext } = useSchedule()

  const handleClick = (step, data) => {
    handleStepContext({ step, data })
    return router.push(`/schedule/start`)
  }

  return (
    <div className="mx-auto max-w-7xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 sm:text-4xl">
          <span className="block">Choose any of our premium services</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-500 dark:text-slate-300">
          Each one of our cleaning services comes with a{' '}
          <Link
            href="/checkpoint_list"
            className="font-medium text-sky-600 dark:text-sky-400"
          >
            6 checkpoint list{' '}
          </Link>
          that the cleaning crew must pass before they leave your property.
        </p>
      </div>
      <div className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-lg bg-slate-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 lg:grid-cols-3">
        {typesOfCleaningServices.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : actionIdx === typesOfCleaningServices.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 dark:bg-slate-700'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-slate-50'
                )}
              >
                <Image src={action.icon} width={50} height={50} />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <button
                  onClick={() => handleClick(1, action.title)}
                  className="focus:outline-none dark:text-slate-100"
                >
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </button>
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {action.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-slate-300 group-hover:text-sky-500"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      {/* FreePik - Flaticon Attribution */}
      {/* <Attribution typesOfCleaningServices={typesOfCleaningServices} /> */}
    </div>
  )
}
