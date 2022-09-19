import { Button } from '@/components/Button'
import { PlusIcon } from '@heroicons/react/20/solid'
import { SliderBeforeAfter } from '@/components/SliderBeforeAfter'
// import { Steps } from '@/components/Steps'
import { checkRedirectURL } from '@/utils/checkRedirectURL'
import { useUser } from '@auth0/nextjs-auth0'

//
export const Hero = () => {
  const { user } = useUser()

  //
  return (
    <div className="relative mx-auto h-full w-full overflow-hidden py-48 md:max-w-5xl xl:max-w-7xl">
      <SliderBeforeAfter />
      <div className="absolute inset-0 -translate-x-20 xl:max-w-5xl">
        <div className="relative sm:text-center md:mx-auto lg:text-left">
          <h1>
            <span className="mt-20 ml-20 block font-serif font-extrabold tracking-tight md:text-4xl lg:text-8xl">
              <span className="block text-rose-500">
                We clean like you wish you could.
              </span>
            </span>
          </h1>

          <div className="ml-20 mt-8 flex flex-nowrap items-center lg:justify-start">
            <Button
              href={checkRedirectURL(user)}
              className="relative inline-flex items-center rounded-sm border border-transparent bg-rose-500 font-semibold text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              <span className="font-serif">Book a Service Now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
