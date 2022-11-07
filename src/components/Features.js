import Image from 'next/future/image'
import cleaningCrew from '@/images/cleaning_crew_2.jpeg'
import family from '@/images/family_having_fun.jpeg'
import saving from '@/images/family_saving_money.jpeg'

const features = [
  {
    id: 0,
    title: `Clean more for less.`,
    message: `We are an affordable cleaning company that gets the job done. Our low rates mean you can afford to clean more.`,
    imgSrc: saving,
  },
  {
    id: 1,
    title: `Get more time to do what you love.`,
    message: `Schedule a cleaning service and say goodbye to chores like scrubbing, vacuuming, and mopping. You'll get back the hours you spent doing these things.`,
    imgSrc: family,
  },
  {
    id: 2,
    title: `Your cleaner is bonded and insured.`,
    message: `You deserve peace of mind when you hire someone to clean your home or office. So there are no worries when you call us for a deep cleaning service or a move-in out.`,
    imgSrc: cleaningCrew,
  },
]
//
export const Features = () => {
  return (
    <section className="py-12 dark:bg-slate-800 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xs text-center md:max-w-lg lg:max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            The Thrill of a Clean House 💖
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-slate-600 dark:text-slate-400 lg:mt-20 lg:text-lg lg:leading-8">
            Lullaby House offers deep cleaning, move in-out, and regular
            cleaning services for residential customers. We specialize in deep
            cleaning tasks like ovens, refrigerators, carpets and upholstery, so
            you can enjoy the comfort of a clean home.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-5 sm:mt-16 sm:gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="rounded-2xl">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="pt-6 text-xl font-semibold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                  {feature.message}
                </p>

                <Image
                  className="relative mt-12 rounded-xl object-cover dark:shadow-lg dark:shadow-slate-100/30"
                  src={feature.imgSrc}
                  layout="fill"
                  priority
                  alt="images of lullaby house customers"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
