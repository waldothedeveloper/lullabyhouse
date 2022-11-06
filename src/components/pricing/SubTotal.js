import PropTypes from 'prop-types'
//
export const SubTotal = ({ price }) => {
  return (
    <div className="flex items-center justify-between">
      <dt className="">Subtotal:</dt>
      <dd>{price?.basePrice}</dd>
    </div>
  )
}

SubTotal.propTypes = {
  price: PropTypes.object,
}
