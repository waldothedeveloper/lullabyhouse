import { SearchAddress } from '@/components/address/SearchAddress'
import { useVerifyAddress } from '@/hooks/useVerifyAddress'
//
export const BillingInformation = () => {
  const { value, handleSelect, handleInput, data, status, structuredAddress } =
    useVerifyAddress()

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
          Address as listed on your credit card statement.
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
          <SearchAddress
            structuredAddress={structuredAddress}
            handleSelect={handleSelect}
            handleInput={handleInput}
            data={data}
            value={value}
            status={status}
          />
        </div>
      </div>
      <div className="mt-1 sm:col-span-6">
        <label
          htmlFor="street_address_2"
          className="block text-sm font-medium text-slate-700"
        >
          Address 2 (optional)
        </label>
        <div className="mt-1">
          <input
            disabled
            defaultValue={structuredAddress?.addressLine2 || ''}
            // onChange={handleBillingAddress}
            type="text"
            name="street_address_2"
            id="street_address_2"
            autoComplete="street-address"
            className="block w-full rounded-md border-slate-200 bg-slate-200 text-slate-800 sm:text-sm"
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
            disabled
            defaultValue={structuredAddress?.locality || ''}
            // onChange={handleBillingAddress}
            type="text"
            name="city"
            id="city"
            autoComplete="address-level2"
            className="block w-full rounded-md border-slate-200 bg-slate-200 text-slate-800 sm:text-sm"
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
            disabled
            defaultValue={structuredAddress?.administrativeDistrictLevel1 || ''}
            // onChange={handleBillingAddress}
            type="text"
            name="region"
            id="region"
            autoComplete="address-level1"
            className="block w-full rounded-md border-slate-200 bg-slate-200 text-slate-800 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="postal_code"
          className="block text-sm font-medium text-slate-700"
        >
          ZIP / Postal code
        </label>
        <div className="mt-1">
          <input
            disabled
            defaultValue={structuredAddress?.postalCode || ''}
            // onChange={handleBillingAddress}
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            className="block w-full rounded-md border-slate-200 bg-slate-200 text-slate-800 sm:text-sm"
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
            disabled
            defaultValue={structuredAddress?.country || ''}
            // onChange={handleBillingAddress}
            type="text"
            name="country"
            id="country"
            autoComplete="country"
            className="block w-full rounded-md border-slate-200 bg-slate-200 text-slate-800 sm:text-sm"
          />
        </div>
      </div>
    </div>
  )
}
