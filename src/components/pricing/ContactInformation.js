export const ContactInformation = ({
  firstName,
  lastName,
  handleFirstName,
  handleLastName,
  email,
  handleEmail,
}) => {
  return (
    <div>
      <div>
        <h3
          id="contact-info-heading"
          className="text-lg font-medium text-slate-900"
        >
          Contact information
        </h3>
        <p className="max-w-2xl text-sm text-slate-500">
          We are excited to get to know you
        </p>
      </div>
      <div className="mt-6">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={firstName || ''}
                onChange={handleFirstName}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={lastName || ''}
                onChange={handleLastName}
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

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
            value={email || ''}
            onChange={handleEmail}
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
