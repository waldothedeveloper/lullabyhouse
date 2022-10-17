import { UserCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils/classNames'

//
const jobOpenings = [
  {
    id: 0,
    title: `Cleaning Professional`,
    category: {
      name: 'Cleaning Services',
      href: 'https://bit.ly/3BRNavB',
      color: 'bg-teal-100 text-teal-800',
    },
    description: `We are looking for highly qualified cleaners, cleaning teams or small cleaning companies to work with for residential house cleaning (occupied, move in/move out cleanings, holidays & special occasions).`,
    date: `September 28, 2022`,
    datetime: '2022-09-28',
    details: {
      position: `Part-time ~ Florida (Miami-Dade & Broward counties)`,
      salary: `$15-23 per hour`,
    },
  },
]

//
export default function OpenPosition() {
  return (
    <div className="px-4 pt-16 pb-20 dark:bg-slate-800 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-slate-200 dark:divide-slate-600 lg:max-w-7xl">
        <div>
          <p className="text-base font-semibold text-teal-600">
            Job Openings at Lullaby House
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            A rewarding career is just steps away
          </h2>
          <p className="mt-3 text-xl text-slate-500 dark:text-slate-400 sm:mt-4">
            We are a full-service residential and commercial cleaning company
            founded in 2022 in the heart of Miami, Florida. We offer
            fully-qualified staff and a top-notch customer service.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {jobOpenings.map((post) => (
            <div key={post.title}>
              <div className="inline-block">
                <span
                  className={classNames(
                    post.category.color,
                    'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
                  )}
                >
                  {post.category.name}
                </span>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                  {post.description}
                </p>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={post.category.href}
                className="mt-6 inline-flex items-center rounded-md border border-transparent bg-slate-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Apply here
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <UserCircleIcon className="h-10 w-10 rounded-full text-slate-500 dark:text-slate-400" />
                </div>
                <div className="ml-3">
                  <div className="flex flex-col text-sm font-medium text-slate-500 dark:text-slate-400">
                    <time dateTime={post.datetime}>
                      {post.details.position}
                    </time>
                    <span className="text-base">{post.details.salary}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
