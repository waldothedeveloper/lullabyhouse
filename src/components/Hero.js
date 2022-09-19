import { BlurryColoredBg } from '@/components/BlurryColoredBg'
import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/20/solid'
import { SliderBeforeAfter } from '@/components/SliderBeforeAfter'

//
export const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-slate-800">
      <section className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500 bg-clip-text px-6 text-lg font-bold text-transparent">
              We take care of the dirty work so you don&apos;t have to.
            </h1>

            <p className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              Get a deep clean for your home without the hassle
            </p>

            <div className="mt-16 px-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 sm:px-0 lg:mt-24">
              <BlurryColoredBg>Schedule a Cleaning</BlurryColoredBg>

              <Link
                href="#"
                className="group mt-4 inline-flex w-full items-center justify-center px-6 py-3 text-lg font-bold transition-all duration-200 focus:outline-none dark:text-slate-100 sm:mt-0 sm:w-auto"
                role="button"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-400">
                  <PlayIcon className="h-4 w-4 dark:text-slate-100" />
                </span>
                <span className="pl-2">How we do it</span>
              </Link>
            </div>

            <p className="mt-8 text-base font-semibold text-slate-500 dark:text-slate-400">
              20% Off New Customers · 100% Satisfaction Guaranteed
            </p>
          </div>
        </div>

        <div className="pb-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3"></div>
            <div className="relative mx-auto">
              <div className="lg:mx-auto lg:max-w-6xl">
                <div className="mt-16">
                  <SliderBeforeAfter
                    aspectRatio={16 / 9}
                    orientation="horizontal"
                    value={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
