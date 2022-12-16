import { AmountDue } from '@/components/pricing/AmountDue'
import { BillingInformation } from '@/components/pricing/BillingInformation'
import { CheckoutBreakdown } from '@/components/pricing/CheckoutBreakdown'
import { ContactInformation } from '@/components/pricing/ContactInformation'
import { Discount } from '@/components/pricing/Discount'
import { Error } from '@/components/Error'
import { Extras } from '@/components/pricing/Extras'
import { PaymentInfo } from '@/components/pricing/PaymentInfo'
import { PetsPremiumCharge } from '@/components/pricing/PetsPremiumCharge'
import { SubTotal } from '@/components/pricing/SubTotal'
import { Toaster } from 'react-hot-toast'
import { Total } from '@/components/pricing/Total'
import { TotalBeforeDiscount } from '@/components/pricing/TotalBeforeDiscount'
import { Transition } from '@headlessui/react'
import { useCalculatePrice } from '@/hooks/pricing/useCalculatePrice'
import { useCardInstance } from '@/hooks/pricing/useCardInstance'
import { useCheckout } from '@/hooks/pricing/useCheckout'
import { useDisableSubmitBUtton } from '@/hooks/pricing/useDisableSubmitButton'
import { useErrors } from '@/hooks/useErrors'
import { useOneTimeCardPayment } from '@/hooks/pricing/useOneTimeCardPayment'
import { usePlan } from '@/hooks/pricing/usePlan'

//
export const Checkout = () => {
  const { errors, handleErrors } = useErrors()

  const { price, products, date, address, typeOfCleaning } = useCalculatePrice()

  const { disableSubmitButton, setDisableSubmitButton } =
    useDisableSubmitBUtton()
  const { subscriptionPlans } = usePlan(date)
  const { card, cardErrors } = useCardInstance()
  const { handleCardPayment } = useOneTimeCardPayment(
    price,
    card,
    setDisableSubmitButton,
    handleErrors
  )

  const { handleCheckoutProcess, register, handleSubmit, formErrors } =
    useCheckout(
      address?.address_components,
      date,
      subscriptionPlans,
      price,
      setDisableSubmitButton,
      card,
      handleErrors
    )

  //
  if (cardErrors) {
    return <Error error={cardErrors} />
  }

  return (
    <>
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
            <form onSubmit={handleSubmit(handleCheckoutProcess)}>
              <h2 id="payment-and-shipping-heading" className="sr-only">
                Payment details
              </h2>

              <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                {Boolean(card) && (
                  <Transition
                    show={true}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ContactInformation
                      register={register}
                      errors={formErrors}
                    />
                    <BillingInformation />
                    <PaymentInfo
                      errors={errors}
                      handlePayment={
                        date?.serviceFrecuency?.cadence
                          ? handleCheckoutProcess
                          : handleCardPayment
                      }
                      disableSubmitButton={disableSubmitButton}
                    />
                  </Transition>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 100000 }}
      />
    </>
  )
}
