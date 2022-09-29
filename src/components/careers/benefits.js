import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  SwatchIcon,
  UserIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    id: 1,
    title: `Schedule`,
    message: `Work on your own schedule. Weekends and holidays are optional, so you opt-in if you want.`,
    icon: <CalendarDaysIcon className="mx-auto h-16 w-16" />,
    class: `md:p-8 lg:p-14`,
  },
  {
    id: 2,
    title: `Compensation`,
    message: `We offer competitive compensation, on an hourly basis. We offer holiday bonuses if you are ok working on those times.`,
    icon: <CurrencyDollarIcon className="mx-auto h-16 w-16" />,
    class: `md:border-l md:border-slate-200 md:p-8 lg:p-14`,
  },
  {
    id: 3,
    title: `Training & Support`,
    message: `Every one of our hires goes through a complete training process. Junior hires will be paired with a seasonal pro.`,
    icon: <SwatchIcon className="mx-auto h-16 w-16" />,
    class: `md:border-l md:border-slate-200 md:p-8 lg:p-14`,
  },
  {
    id: 4,
    title: `Disney/Orlando Raffles`,
    message: `If you become a highly rated cleaning proffesional, you can receive vacation tickets to Orlando/Disney parks.`,
    icon: <GlobeAmericasIcon className="mx-auto h-16 w-16" />,
    class: `md:border-t md:border-slate-200 md:p-8 lg:p-14`,
  },
  {
    id: 5,
    title: `Gym discounts`,
    message: `We are always looking for ways to keep our cleaning partners fullfilled with healthier opportunities.`,
    icon: <UserIcon className="mx-auto h-16 w-16" />,
    class: `md:border-l md:border-t md:border-slate-200 md:p-8 lg:p-14`,
  },
  {
    id: 6,
    title: `Bonus Pay`,
    message: `If you opt-in for working on holidays, late nights, special events, we will pay you a bonus pay.`,
    icon: <WalletIcon className="mx-auto h-16 w-16" />,
    class: `md:border-l md:border-t md:border-slate-200 md:p-8 lg:p-14`,
  },
]

export const Benefits = () => {
  return (
    <section className="py-12 dark:bg-slate-800 sm:py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl xl:text-5xl">
            Why working for us is a great experience
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-8">
            We offer a wide range of perks and a dedicated team to help you
            succeed both personally and professionally. What&apos;s more,
            you&apos;ll be working with a company that values your hard work and
            dedication.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-12 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {benefits.map((benefit) => (
            <div key={benefit.id} className={benefit.class}>
              {benefit.icon}
              <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-slate-50">
                {benefit.title}
              </h3>
              <p className="mt-5 text-base text-slate-600 dark:text-slate-300">
                {benefit.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
