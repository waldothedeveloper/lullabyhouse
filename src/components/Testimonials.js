import Image from 'next/future/image'
import manSmiling from '@/images/black_man_smiling.png'

export const Testimonials = () => {
  return (
    <section className="pt-10 dark:bg-slate-800 sm:pt-16 md:pt-0 2xl:py-24">
      <div className="mx-auto max-w-7xl rounded-md bg-teal-400 px-4 sm:px-6 lg:px-8">
        <div className="2xl:pl-24">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="text-center md:py-16 md:text-left xl:py-24">
              <blockquote>
                <p className="text-2xl font-semibold leading-relaxed text-slate-900">
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.”
                </p>
              </blockquote>
              <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p className="text-base font-semibold text-slate-900">
                  Jenny Wilson
                </p>
                <p className="mt-2 text-base text-slate-700 sm:mt-0 sm:ml-2">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                className="md:absolute md:bottom-0 md:origin-bottom-right md:scale-110 lg:scale-75 2xl:-mt-20 2xl:scale-100"
                src={manSmiling}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
