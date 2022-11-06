import PropTypes from 'prop-types'
import { format } from 'date-fns'

//
export const CheckoutBreakdown = ({ address, date, products, serviceType }) => {
  return (
    <div className="overflow-hidden">
      <div className="py-5">
        <dl>
          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-slate-300">
              Type of Service
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {serviceType?.typesOfServices?.title} Cleaning
            </dd>
          </div>
          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-slate-300">Frequency</dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {date?.serviceFrecuency?.title}
            </dd>
          </div>
          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-slate-300">Date</dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {format(new Date(date?.verifiedDateAndTime), 'PPPP')}
            </dd>
          </div>
          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-slate-300">Time</dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {format(new Date(date?.verifiedDateAndTime), 'p')}
            </dd>
          </div>
          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-slate-300">Address</dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {address?.verifiedAddress}
            </dd>
          </div>

          <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="flex flex-col text-sm font-medium text-slate-300">
              BedRooms
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {products &&
                Array.isArray(products) &&
                products[0]?.property?.beds}
            </dd>
            <dt className="flex flex-col text-sm font-medium text-slate-300">
              BathRooms
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {products &&
                Array.isArray(products) &&
                products[0]?.property?.bath}
            </dd>
            <dt className="flex flex-col text-sm font-medium text-slate-300">
              Half BathRooms
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {products &&
                Array.isArray(products) &&
                products[0]?.property?.halfBath}
            </dd>
            <dt className="flex flex-col text-sm font-medium text-slate-300">
              Livable Area
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {products &&
                Array.isArray(products) &&
                products[0]?.property?.livableArea}{' '}
              sq. feet
            </dd>
            <dt className="flex flex-col text-sm font-medium text-slate-300">
              Floors
            </dt>
            <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
              {products &&
                Array.isArray(products) &&
                products[0]?.property?.floors}
            </dd>
          </div>
          {/* Extras */}
          {date?.extras.map((elem) => (
            <div key={elem.id} className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-slate-300">
                {' '}
                {elem.extra}
              </dt>
              <dd className="mt-1 text-sm text-slate-50 sm:col-span-2 sm:mt-0">
                ${elem.price}{' '}
                {elem.flat
                  ? `total`
                  : elem.perLoad
                  ? `per load`
                  : elem.perUnit
                  ? `per unit`
                  : ``}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

CheckoutBreakdown.propTypes = {
  address: PropTypes.object,
  date: PropTypes.object,
  products: PropTypes.array,
  serviceType: PropTypes.object,
}
