import Link from 'next/link'
import PropTypes from 'prop-types'
//
export const Error = ({ error }) => {
  return (
    <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
            {error.code}
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-slate-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {error.error}
              </h1>
              <p className="mt-1 text-base text-slate-500">{error.message}</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                What is this button for??
              </a>
              <Link
                href="tel:555-555-5555"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
