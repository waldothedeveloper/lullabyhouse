import PropTypes from 'prop-types'

export const BillingInformation = ({ address }) => {
  const {
    addressLine1,
    addressLine2,
    administrativeDistrictLevel1,
    country,
    locality,
    postalCode,
  } = address
  // TODO: OnChange is needed for all inputs, need to finish this later
  return (
    <div className="mt-6 space-y-8">
      <div>
        <h3
          id="contact-info-heading"
          className="text-lg font-medium text-slate-900"
        >
          Billing Address
        </h3>
        <p className="max-w-2xl text-sm text-slate-500">
          Address as listed on your credit card statement
        </p>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="street-address"
          className="block text-sm font-medium text-slate-700"
        >
          Street address
        </label>
        <div className="mt-1">
          <input
            value={addressLine1 || ''}
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="street-address"
          className="block text-sm font-medium text-slate-700"
        >
          Address 2 (apt number)
        </label>
        <div className="mt-1">
          <input
            value={addressLine2 || ''}
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-slate-700"
        >
          City
        </label>
        <div className="mt-1">
          <input
            value={locality || ''}
            type="text"
            name="city"
            id="city"
            autoComplete="address-level2"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="region"
          className="block text-sm font-medium text-slate-700"
        >
          State / Province
        </label>
        <div className="mt-1">
          <input
            value={administrativeDistrictLevel1 || ''}
            type="text"
            name="region"
            id="region"
            autoComplete="address-level1"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium text-slate-700"
        >
          ZIP / Postal code
        </label>
        <div className="mt-1">
          <input
            value={postalCode || ''}
            type="text"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-slate-700"
        >
          Country
        </label>
        <div className="mt-1">
          <input
            value={country || ''}
            type="text"
            name="country"
            id="country"
            autoComplete="country"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  )
}

BillingInformation.propTypes = {
  address: PropTypes.object.isRequired,
}
