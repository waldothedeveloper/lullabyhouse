export const ContactInformation = () => {
  return (
    <div>
      <h3
        id="contact-info-heading"
        className="text-lg font-medium text-slate-900"
      >
        Contact information
      </h3>

      <div className="mt-6">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-slate-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email-address"
            name="email-address"
            autoComplete="email"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium text-slate-700"
        >
          Phone Number
        </label>
        <div className="mt-1">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            id="phone-number"
            name="phone-number"
            autoComplete="tel"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  )
}
