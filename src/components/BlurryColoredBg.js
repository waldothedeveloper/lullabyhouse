import Link from 'next/link'

//
export const BlurryColoredBg = ({ children }) => {
  return (
    <div className="grid items-start justify-center gap-8">
      <div className="group relative">
        <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-sky-400 via-pink-400 to-teal-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
        <Link
          href="/schedule/start"
          className="group relative inline-flex w-full items-center justify-center rounded-xl border-2 border-transparent bg-slate-900 px-7 py-2 text-lg font-bold text-white transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 dark:text-slate-100 dark:hover:bg-slate-50 dark:hover:text-slate-800 sm:w-auto"
          role="button"
        >
          {children}
        </Link>
      </div>
    </div>
  )
}
