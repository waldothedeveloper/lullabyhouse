export const PaymentInfo = ({ handleClick }) => {
  return (
    <div className="mt-10">
      <form id="payment-form">
        <div id="card-container" />

        <button
          onClick={handleClick}
          className="rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50"
          id="card-button"
          type="button"
        >
          Pay
        </button>
      </form>
    </div>
  )
}
