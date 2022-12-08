import Link from 'next/link'
import PropTypes from 'prop-types'
//
export const Error = ({ error }) => {
  return (
    <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-sky-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Something went wrong
              </h1>
              <p className="mt-1 text-base text-gray-500">
                {error?.message || error?.detail}
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Go back home
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Contact support
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
}
