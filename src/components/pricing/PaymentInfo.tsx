import PropTypes from 'prop-types'

type err = { message: string; detail: string }
type PaymentInfoparams = {
  disableSubmitButton: boolean
  errors: err
}
export const PaymentInfo = ({
  disableSubmitButton,
  errors,
}: PaymentInfoparams) => {
  return (
    <div className="mt-10 space-y-8">
      <h3
        id="contact-info-heading"
        className="text-lg font-medium text-slate-900"
      >
        Payment Information
      </h3>
      <div id="card-container" />
      <button
        type="submit"
        id="card-button"
        disabled={disableSubmitButton ?? false}
        className={
          disableSubmitButton
            ? 'animate-pulse rounded-md border border-transparent bg-slate-300 py-2 px-4 text-sm font-medium text-white shadow-sm'
            : errors
            ? 'rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-50'
            : 'rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50'
        }
      >
        Pay
      </button>
      <p className="mt-1 max-w-2xl text-xs text-slate-500">
        By providing your card information, you allow Lullaby House to charge
        your card for future payments in accordance with their terms.
      </p>
    </div>
  )
}

PaymentInfo.propTypes = {
  disableSubmitButton: PropTypes.bool.isRequired,
  errors: PropTypes.object,
}
