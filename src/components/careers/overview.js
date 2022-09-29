import Image from 'next/future/image'
import Link from 'next/link'
import bModel from '@/images/beautiful_black_model__2a.jpeg'

//
const ourValues = [
  'We satisfy and delight our customers.',
  'We stand for inclusion.',
  'We support our communities & the enviroment.',
  'We do what’s right.',
  'We reach for top-notch craftsmanship.',
]
//
export const Overview = () => {
  return (
    <section className="relative overflow-hidden py-12 dark:bg-slate-800 sm:py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-6 max-w-4xl text-3xl font-bold dark:text-white sm:text-4xl xl:max-w-5xl xl:text-5xl">
          What makes us different
        </h1>
        <p className="mt-1 max-w-2xl text-lg font-normal leading-7 dark:text-slate-300">
          We are a full-service residential and commercial cleaning company
          founded in 2022 in the heart of Hialeah, FL. We offer fully-qualified
          staff and a top-notch customer service.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-y-10 lg:mt-24 lg:grid-cols-12 lg:gap-x-20">
          <div className="z-40 lg:col-span-5">
            <div className="max-h-96 overflow-hidden rounded-2xl lg:h-full lg:max-h-full">
              <Image
                className="object-cover lg:h-full"
                src={bModel}
                placeholder="blur"
                layout="fill"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              <h2 className="text-2xl font-bold dark:text-white">Our people</h2>
              <p className="mt-6 text-base font-normal leading-7 dark:text-slate-300">
                Our business revolves around our customers and you, the future
                expert cleaning professional. Our expert staff has years of
                experience in the field, and we are proud to be one of the best
                cleaning services in Florida.
              </p>
              <p className="mt-6 text-base font-normal leading-7 dark:text-slate-300">
                We only hire highly skilled professionals who are passionate
                about their work. Our staff takes pride in providing a superior
                level of customer service. We take our job seriously, but we
                also know how to have fun while staying focused on our goals.
              </p>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold dark:text-white">Our values</h2>
              <ul role="list">
                {ourValues.map((value) => (
                  <li key={value} className="flex items-center py-3">
                    <p className="text-base font-normal leading-7 text-slate-800 dark:text-slate-300">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 max-w-xs">
              <Link
                href="/careers/current_job_openings"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-400 px-5 py-3 text-base font-medium text-white hover:bg-slate-600 dark:bg-slate-500"
              >
                See open positions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
