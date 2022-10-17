import Image from 'next/future/image'
import Link from 'next/link'
import blue_cleaning_crew from '@/images/blue_couple_cleaners_1a.jpeg'
import curvedLines from '@/images/curved-lines.png'
//
export const Hero = () => {
  return (
    <div className="relative">
      <section className="overflow-hidden bg-gradient-to-bl from-sky-300 via-rose-100 to-yellow-50">
        <div className="flex flex-col lg:min-h-[800px] lg:flex-row lg:items-stretch">
          <div className="relative flex w-full items-center justify-center lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <Image
                className="h-48 w-auto object-contain"
                src={curvedLines}
                layout="fill"
                placeholder="blur"
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 lg:py-24 lg:text-left 2xl:px-32">
              <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl xl:text-8xl">
                Join us in making the world a cleaner place.
              </h1>
              <p className="mt-8 text-xl text-slate-800">
                We believe that every person does important work. That&apos;s
                why we hire the best and create a culture that makes everyone
                feel welcome and appreciated. Come join us and be a part of our
                elite cleaning team!
              </p>
              <div className="mt-12 max-w-xs">
                <Link
                  href="/careers/current_job_openings"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-5 py-3 text-base font-medium text-white hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-500"
                >
                  See open positions
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden lg:order-1 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={blue_cleaning_crew}
                layout="fill"
                placeholder="blur"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <svg
                    className="h-10 w-10 text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="ml-2.5 text-7xl font-bold text-white">+5K</h2>
                </div>
                <p className="mt-1.5 max-w-xs text-xl text-white">
                  Happy Floridians with clean homes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
