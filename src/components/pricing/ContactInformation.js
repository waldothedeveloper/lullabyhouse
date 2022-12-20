import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

export const ContactInformation = ({ register, errors, setValue }) => {
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
              htmlFor="firstName"
              className="block text-sm font-medium text-slate-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                placeholder="John"
                type="text"
                {...register('firstName', { required: true })}
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className={
                  errors?.firstName
                    ? 'block w-full rounded-md border-red-500 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm'
                    : 'block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm'
                }
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-600" id="firstName-error">
                  {errors?.firstName?.message}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-slate-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                placeholder="Appleseed"
                type="text"
                {...register('lastName', { required: true })}
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className={
                  errors?.lastName
                    ? 'block w-full rounded-md border-red-500 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm'
                    : 'block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm'
                }
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-600" id="lastName-error">
                  {errors?.lastName?.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            placeholder="adan@example.com"
            type="email"
            {...register('email', { required: true })}
            name="email"
            id="email"
            autoComplete="email"
            className={
              errors?.email
                ? 'block w-full rounded-md border-red-500 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm'
                : 'block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm'
            }
          />
          {errors?.email && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors?.email?.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700"
        >
          Phone Number
        </label>
        <div className="mt-1">
          <input
            placeholder="(555) 444-3322"
            maxLength={14}
            type="tel"
            {...register('phone', {
              onChange: (event) => {
                const { value } = event.target
                const formattedPhone = formatPhoneNumber(value)
                if (formattedPhone) setValue('phone', formattedPhone)
              },
              required: true,
            })}
            name="phone"
            id="phone"
            autoComplete="tel"
            className={
              errors?.phone
                ? 'block w-full rounded-md border-red-500 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm'
                : 'block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm'
            }
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600" id="phone-error">
              {errors?.phone?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
