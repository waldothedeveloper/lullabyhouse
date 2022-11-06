import PropTypes from 'prop-types'
import { whenToBill } from '@/utils/whenToBill'
//
export const Total = ({ date, price }) => {
  return (
    <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
      <dt className="text-base ">
        Total
        <span className="block text-sm font-medium normal-case text-sky-300">
          {whenToBill(date?.serviceFrecuency?.key)}
        </span>
      </dt>
      <dd className="text-base">{price?.discountedPrice}</dd>
    </div>
  )
}

Total.propTypes = {
  date: PropTypes.object,
  price: PropTypes.object,
}
