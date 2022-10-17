export const OurJourney = () => {
  return (
    <section className="to-yellow-50sm:py-16 py-10 dark:bg-slate-400 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-slate-700 dark:text-slate-300 md:mt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-slate-800 bg-clip-text text-transparent">
                {' '}
                {new Date().getFullYear() - 2020}+{' '}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-slate-900 dark:text-slate-50">
              Years in business
            </p>
            <p className="mt-0.5 text-base text-slate-500 dark:text-slate-400">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-slate-800 bg-clip-text text-transparent">
                {' '}
                4821{' '}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-slate-900 dark:text-slate-50">
              Projects delivered
            </p>
            <p className="mt-0.5 text-base text-slate-500 dark:text-slate-400">
              In last 6 years
            </p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-slate-800 bg-clip-text text-transparent">
                {' '}
                37+{' '}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-slate-900 dark:text-slate-50">
              Team members
            </p>
            <p className="mt-0.5 text-base text-slate-500 dark:text-slate-400">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
