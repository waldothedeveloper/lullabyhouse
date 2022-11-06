import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useSchedule } from '@/context/provideScheduleContext'
//
export const NextStep = ({ customerAddress, propertyDetails }) => {
  const router = useRouter()
  const { dispatch } = useSchedule()

  const handleClick = () => {
    if (customerAddress && customerAddress.length > 0) {
      dispatch({ type: 2, data: { customerAddress, propertyDetails } })
      router.push(`/schedule/start`)
    }
  }

  //
  return (
    <div className="py-12 lg:py-16">
      <h2 className="text-sm font-medium leading-tight text-slate-400 dark:text-slate-50">
        <span className="block">
          Did we get this right? Most of our customers find their property for
          more accurate quotes
        </span>
      </h2>
      <div className="mt-8 flex">
        <div className="inline-flex rounded-md shadow">
          <Link
            href="/schedule/start"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-600 px-5 py-3 text-base font-medium text-white hover:bg-slate-700"
          >
            No, doesn&apos;t look right.
          </Link>
        </div>
        <div className="ml-3 inline-flex">
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-100 px-5 py-3 text-base font-semibold text-teal-700 hover:bg-teal-200"
          >
            Yep, it looks good!
          </button>
        </div>
      </div>
    </div>
  )
}

NextStep.propTypes = {
  customerAddress: PropTypes.array,
}
