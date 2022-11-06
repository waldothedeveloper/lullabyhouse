import PropTypes from 'prop-types'
import { whenToBill } from '@/utils/whenToBill'

//
export const AmountDue = ({ price, date }) => {
  return (
    <dl>
      <dt className="text-sm font-medium uppercase">Amount</dt>
      <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
        {price?.discountedPrice}{' '}
        <span className="block text-sm font-medium text-slate-300">
          {whenToBill(date?.serviceFrecuency?.key)}
        </span>
      </dd>
    </dl>
  )
}

AmountDue.propTypes = {
  price: PropTypes.object,
  date: PropTypes.object,
}
