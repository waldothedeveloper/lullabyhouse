import PropTypes from 'prop-types'

//
export const PetsPremiumCharge = ({ price }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <dt className="block">Pets:</dt>

        <dd>{price?.petPremiumUpCharge}</dd>
      </div>
    </div>
  )
}

PetsPremiumCharge.propTypes = {
  price: PropTypes.object,
}
