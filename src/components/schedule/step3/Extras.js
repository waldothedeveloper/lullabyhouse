import PropTypes from 'prop-types'
//
export const Extras = ({ extras, handleExtraSelect }) => {
  return (
    <div className="space-y-6 divide-y divide-slate-200 pt-8 sm:space-y-5 sm:pt-10">
      <div className="space-y-6 divide-y divide-slate-200 sm:space-y-5">
        <div className="pt-6 sm:pt-5">
          <div role="group" aria-labelledby="label-extras">
            <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
              <div>
                <div
                  className="text-base font-medium text-slate-900 sm:text-sm sm:text-slate-700"
                  id="label-extras"
                >
                  Choose Any Extras
                  <span className="mt-1 block text-xs text-slate-400">
                    These are totally optional, but highly recommended, our
                    regular customers get most of them for free.
                  </span>
                </div>
              </div>
              <div className="mt-4 sm:col-span-2 sm:mt-0">
                <fieldset className="space-y-5">
                  <legend className="sr-only">Notifications</legend>
                  <div className="grid grid-cols-2 gap-6">
                    {extras.map((service) => {
                      return (
                        <div
                          key={service.id}
                          className="relative flex items-start"
                        >
                          <div className="flex h-5 items-center">
                            <input
                              id={service.id}
                              name={service.extra}
                              onChange={() => handleExtraSelect(service)}
                              checked={service.checked}
                              aria-describedby={service.extra}
                              type="checkbox"
                              className="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={service.extra}
                              className="font-medium text-slate-700"
                            >
                              {service.extra}
                            </label>
                            <p id={service.id} className="text-slate-500">
                              ${service.price}{' '}
                              {service.flat
                                ? `in total`
                                : service.perLoad
                                ? `per load`
                                : service.perUnit
                                ? `per unit`
                                : ``}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Extras.propTypes = {
  extras: PropTypes.array,
  handleExtraSelect: PropTypes.func,
}
