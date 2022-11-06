import PropTypes from 'prop-types'
export const Discount = ({ date, price }) => {
  return (
    date?.serviceFrecuency?.discount > 0 && (
      <div className="flex items-center justify-between">
        <dt>
          <span className="block ">Discount</span>
          <span>{price?.discount} off</span>
        </dt>
        <dd>-{price?.discountAmountInCurrency}</dd>
      </div>
    )
  )
}

Discount.propTypes = {
  date: PropTypes.object,
}
