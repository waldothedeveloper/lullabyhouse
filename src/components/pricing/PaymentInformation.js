export const PaymentInformation = () => {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-medium text-slate-900">Payment details</h3>

      <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4">
        <div className="col-span-3 sm:col-span-4">
          <label
            htmlFor="card-number"
            className="block text-sm font-medium text-slate-700"
          >
            Card number
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="card-number"
              name="card-number"
              autoComplete="cc-number"
              className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-3">
          <label
            htmlFor="expiration-date"
            className="block text-sm font-medium text-slate-700"
          >
            Expiration date (MM/YY)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="expiration-date"
              id="expiration-date"
              autoComplete="cc-exp"
              className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-slate-700"
          >
            CVC
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="cvc"
              id="cvc"
              autoComplete="csc"
              className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
