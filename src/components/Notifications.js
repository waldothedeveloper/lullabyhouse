import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
//
export const notify = (errors) => {
  return (
    errors &&
    Object.keys(errors).map((error, idx) => {
      return toast.custom(
        (t) => (
          <div
            key={errors[error.id]}
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className="w-0 flex-1 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ExclamationCircleIcon
                    className="h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-rose-900">Error</p>
                  <p className="mt-1 text-sm text-rose-500">{errors[error]}</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-slate-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-slate-600 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Close
              </button>
            </div>
          </div>
        ),
        { id: `${errors[error]}-${idx}` }
      )
    })
  )
}
