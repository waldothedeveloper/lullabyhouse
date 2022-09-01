import { ErrorMessage, Field, Form, Formik } from 'formik'

import { Error } from '@/components/Error'
import Image from 'next/image'
import { formatPhoneNumber } from '@/utils/format_phone_number'
import hero2 from '@/images/hero_bg_2.jpeg'
import logo from '@/images/lulhouse.png'
import { useAuth } from '@/hooks/auth/useAuth'
import { validateSignIn } from '@/components/auth/validate_signIn'

//
export default function SignInOrCreateAccount() {
  const { logIn, error } = useAuth()

  return error ? (
    <Error error={error} />
  ) : (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="relative">
              <Image src={logo} alt="lullaby house logo" layout="responsive" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-700">
                Sign in or create account
              </h2>
              <p className="text-base text-gray-500">
                Enter your phone number to start.
              </p>
            </div>

            <div className="mt-6">
              <Formik
                initialValues={{ phone: '' }}
                validate={(values) => validateSignIn(values)}
                onSubmit={(values, { setSubmitting }) =>
                  logIn(values, setSubmitting)
                }
              >
                {({ isSubmitting, errors, values }) => (
                  <Form>
                    <Field
                      maxLength={14}
                      value={formatPhoneNumber(values.phone)}
                      type="text"
                      name="phone"
                      id="phone_btn"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="(888) 454-5555"
                      className={
                        errors.phone
                          ? 'block w-full appearance-none rounded-md border-2 border-red-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                          : 'block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                      }
                    />
                    <ErrorMessage
                      className="mt-1 text-sm text-red-600"
                      name="phone"
                      component="div"
                    />

                    <button
                      disabled={
                        (errors.phone || isSubmitting || !values.phone) ?? true
                      }
                      type="submit"
                      className={
                        errors.phone || !values.phone
                          ? 'mt-6 flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm'
                          : 'mt-6 flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      }
                    >
                      {!values.phone
                        ? 'Just start typing...⏱️'
                        : errors.phone
                        ? 'Almost there, keep going...✍🏻'
                        : "Looks good, let's do it ⭐"}
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="mt-2">
                <p className="text-xs text-gray-400">
                  In order to protect the security of your account, please type
                  your phone number. We will send you a text message with a
                  verfication code that you&apos;ll need to enter on the popup
                  screen. Msg & data rates may apply.
                </p>
              </div>
              <div id="recaptcha_container" />
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={hero2}
            alt=""
            layout="fill"
            priority
          />
        </div>
      </div>
    </>
  )
}
