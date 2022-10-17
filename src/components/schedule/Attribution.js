export const Attribution = ({ typesOfCleaningServices }) => {
  return (
    <div className="mt-32 rounded-lg bg-slate-200">
      <div className="mx-auto max-w-7xl py-12 px-6">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="space-y-2">
            <p className="text-base text-slate-500">
              Icons on this page created with love by these amazing individuals
              available at Flaticon.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="grid space-y-6 text-slate-600 sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {typesOfCleaningServices.map((service) => (
                <li key={service.id}>
                  <div className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 rounded-full bg-slate-100 p-1 text-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <div className="text-sm font-medium leading-6 underline decoration-sky-300 decoration-wavy">
                      {service.iconAttribution}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
