export function Loader() {
  return (
    <>
      <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-xl font-bold tracking-tight text-blue-600">
              {new Date().toLocaleString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-slate-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Loading...
                </h1>
                <p className="mt-1 text-base text-slate-500">
                  Please wait while we do a little housekeeping...
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
