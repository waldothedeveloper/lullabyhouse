import { AmountDue } from '@/components/pricing/AmountDue'
import { CheckoutBreakdown } from '@/components/pricing/CheckoutBreakdown'
import { ContactInformation } from '@/components/pricing/ContactInformation'
import { Discount } from '@/components/pricing/Discount'
import { Extras } from '@/components/pricing/Extras'
import { PaymentInformation } from '@/components/pricing/PaymentInformation'
import { PetsPremiumCharge } from '@/components/pricing/PetsPremiumCharge'
import { SubTotal } from '@/components/pricing/SubTotal'
import { Total } from '@/components/pricing/Total'
import { TotalBeforeDiscount } from '@/components/pricing/TotalBeforeDiscount'
import { useCalculatePrice } from '@/hooks/pricing/useCalculatePrice'

//
export const Checkout = () => {
  const { price, products, date, address, typeOfCleaning } = useCalculatePrice()

  return (
    <div className="z-40 bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden h-full w-1/2 bg-sky-800 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-sky-800 py-12 text-sky-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <AmountDue price={price} date={date} />

            <CheckoutBreakdown
              address={address}
              date={date}
              products={products}
              serviceType={typeOfCleaning}
            />

            <dl className="space-y-3 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
              <SubTotal price={price} />

              <Extras date={date} />

              <PetsPremiumCharge price={price} />

              <TotalBeforeDiscount price={price} />

              <Discount date={date} price={price} />

              <Total date={date} price={price} />
            </dl>
          </div>
        </section>
        {/* Contact & Payment Info */}
        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment details
          </h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <ContactInformation />

              <PaymentInformation />

              <div className="mt-10 flex justify-end border-t border-slate-200 pt-6">
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  Pay now
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
