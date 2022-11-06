import PropTypes from 'prop-types'

//
export const TotalBeforeDiscount = ({ price }) => {
  return (
    <div className="flex items-center justify-between">
      <dt className="">Total before discount:</dt>
      <dd>{price?.totalPrice}</dd>
    </div>
  )
}

TotalBeforeDiscount.propTypes = {
  price: PropTypes.object,
}
