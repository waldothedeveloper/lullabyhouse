const extras = [
  {
    id: 'changing_bed_sheets',
    name: 'changing_bed_sheets',
    extra: 'Changing Bed Sheets',
    price: '$5 per bed',
  },
  {
    id: 'wash_and_dry_laundry',
    name: 'wash_and_dry_laundry',
    extra: 'Wash & Dry Laundry',
    price: '$10 per load',
  },
  {
    id: 'dusting_blinds',
    name: 'dusting_blinds',
    extra: 'Dusting & Cleaning Blinds',
    price: '$20 flat for all blinds',
  },
  {
    id: 'interior_window_cleaning',
    name: 'interior_window_cleaning',
    extra: 'Interior Window Cleaning',
    price: '$4 per window',
  },
  {
    id: 'exterior_window_cleaning',
    name: 'exterior_window_cleaning',
    extra: 'Exterior Window Cleaning',
    price: '$6 per window',
  },
  {
    id: 'cabinets',
    name: 'cabinets',
    extra: 'Cleaning Interior of Cabinets',
    price: '$35 flat per the entire shelf',
  },
  { id: 'fridge', name: 'fridge', extra: 'Fridge Cleaning', price: '$25 flat' },
  { id: 'oven', name: 'oven', extra: 'Oven Cleaning', price: '$35 flat' },
  {
    id: 'cabinet_organization',
    name: 'cabinet_organization',
    extra: 'Cabinet Organization',
    price: '$50 flat',
  },
]

//
export const Extras = () => {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="grid grid-cols-2 gap-6">
        {extras.map((service) => {
          return (
            <div key={service.id} className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id={service.id}
                  name={service.extra}
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
                  {service.price}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}
