import { CheckCircleIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export const PricingQuote = () => {
  return (
    <div className="">
      <div className="bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-rose-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-slate-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5">
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-slate-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-slate-900">
                  Pay once, own it forever
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-slate-900">
                  <span>$349</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-slate-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-slate-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-slate-900">
                    Get a free sample{' '}
                    <span className="font-normal text-slate-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
