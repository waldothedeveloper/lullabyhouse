import { BlurryColoredBg } from '@/components/BlurryColoredBg'
// import { SliderBeforeAfter } from '@/components/SliderBeforeAfter'
import Image from 'next/future/image'
import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/20/solid'
// import menCouple from '@/images/men_couple.jpeg'
import team_of_janitors from '@/images/team_of_janitors.jpeg'

const heroCopy = [
  {
    title: 'Get your home clean, fast.',
    subtitle:
      'We take care of the dirty work while you enjoy your life. Your friends and family will thank you, too.',
  },
  {
    title: 'Get a clean home without the hassle.',
    subtitle:
      "Who would you rather have clean your house, your kids? With Lullaby House cleaning services, that's never a question. We will make sure your home is free of dust and grime so you can enjoy it.",
  },
  {
    title: 'Have a free day.',
    subtitle:
      "Leave the house cleaning to us so you don't have to worry about it!",
  },
]

//
export const Hero = () => {
  // const [copy, setCopy] = useState(heroCopy[0])

  // useEffect(() => {
  //   const randomCopy = heroCopy[Math.floor(Math.random() * heroCopy.length)]
  //   setCopy(randomCopy)
  // }, [])

  return (
    <div className="overflow-x-hidden bg-white dark:bg-slate-800">
      <section className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="bg-gradient-to-r from-sky-400 via-pink-400 to-teal-500 bg-clip-text px-6 text-lg text-transparent">
              {heroCopy[0].subtitle}
            </h1>

            <p className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              {heroCopy[0].title}
            </p>

            <div className="mt-20 px-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 sm:px-0 lg:mt-24">
              <BlurryColoredBg>Get a Cleaning Quote</BlurryColoredBg>

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
              100% Satisfaction Guaranteed · Money back Guaranteed{' '}
              <span className="text-xs">(fees apply)</span>
            </p>
          </div>
        </div>

        <div className="pb-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3"></div>
            <div className="relative mx-auto">
              <div className="mt-16 lg:mx-auto lg:max-w-6xl">
                <Image
                  className="scale-110 transform rounded-lg"
                  src={team_of_janitors}
                  layout="fill"
                  priority
                  alt="lullaby house crew cleaning customer house"
                />
                {/* <img
                  className="scale-110 transform"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt=""
                /> */}
                {/* <SliderBeforeAfter
                    aspectRatio={16 / 9}
                    orientation="horizontal"
                    value={75}
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
