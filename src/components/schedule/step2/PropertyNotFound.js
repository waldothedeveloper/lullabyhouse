export const PropertyNotFound = ({ startOver }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-teal-600">500</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Property Not Found.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            We are sorry but this property address doesn&apos;t appear to be a
            residential property.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700"
            >
              Get a Quote
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <button
              type="button"
              onClick={() => startOver(false)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-100 px-5 py-3 text-base font-medium text-teal-700 hover:bg-teal-200"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
