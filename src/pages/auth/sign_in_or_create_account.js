import { ErrorMessage, Field, Form, Formik } from 'formik'
import { signInWithGoogle, signInWithMagicLink } from '@/utils/supabaseClient'

import { Error } from '@/components/Error'
import Image from 'next/image'
import { NotificationModal } from '@/components/Notification'
import hero2 from '@/images/hero_bg_2.jpeg'
import logo from '@/images/lulhouse.png'
import { validateSignIn } from '@/components/auth/validate_signIn'

let error = null
//
export default function SignInOrCreateAccount() {
  //
  return error ? (
    <>
      <Error error={error} />
      <NotificationModal />
    </>
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
            </div>
            {/* Social sign up/ Sign in */}
            <div className="mt-6">
              <div className="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <button
                    onClick={signInWithGoogle}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    {/* <a target="_blank" href="https://icons8.com/icon/17949/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="25px"
                      height="25px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mt-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="my-3 text-base text-gray-500">
                Enter your email and we will send you magic link.
              </p>
              <Formik
                initialValues={{ email: '' }}
                validate={(values) => validateSignIn(values)}
                onSubmit={(values, { setSubmitting }) =>
                  signInWithMagicLink(values, setSubmitting).then(
                    () => console.log(`show email notification `)
                    // handleNotification({ bool: true, email: values.email })
                  )
                }
              >
                {({ isSubmitting, errors, values }) => (
                  <Form>
                    <Field
                      type="email"
                      name="email"
                      id="email_btn"
                      autoComplete="email"
                      placeholder="john@test.com"
                      className={
                        errors.email
                          ? 'block w-full appearance-none rounded-md border-2 border-red-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                          : 'block w-full appearance-none rounded-md border border-blue-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                      }
                    />
                    <ErrorMessage
                      className="mt-1 text-sm text-red-600"
                      name="email"
                      component="div"
                    />

                    <button
                      disabled={
                        (errors.email || isSubmitting || !values.email) ?? true
                      }
                      type="submit"
                      className={
                        errors.email || !values.email || isSubmitting
                          ? 'mt-6 flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm'
                          : 'mt-6 flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      }
                    >
                      {!values.email
                        ? 'Start typing to get your magic link ⏱️'
                        : errors.email
                        ? 'Almost there, keep going...✍🏻'
                        : 'Looks good, send magic link 🦄'}
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="mt-2">
                <p className="text-xs text-gray-400">
                  Lullaby House puts the security of our clients at a high
                  priority.Unfortunately, full security of the email cannot be
                  ensured as, despite our efforts, the data included in emails
                  could be infected, intercepted, or corrupted. Therefore, the
                  recipient should check the email for threats with proper
                  software, as the sender does not accept liability for any
                  damage inflicted by improper use of this tool.
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
      <NotificationModal />
    </>
  )
}
