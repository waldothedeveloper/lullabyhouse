import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { DarkModeButton } from '@/components/DarkModeButton'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { checkRedirectURL } from '@/utils/checkRedirectURL'
import { useUser } from '@auth0/nextjs-auth0'

export const Header = () => {
  const { user } = useUser()
  return (
    <Disclosure
      as="nav"
      className="relative w-full bg-white shadow dark:bg-slate-800"
    >
      {({ open }) => (
        <>
          <div className="w-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <Link href="/" className="flex flex-shrink-0 items-center">
                  <span className="text-lg font-extrabold leading-8 text-slate-800 dark:text-slate-50">
                    Lullaby House
                  </span>
                </Link>

                {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                    alt="Your Company"
                  /> */}

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    FAQ&apos;s
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    Service Area
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:mr-4 md:flex md:flex-shrink-0 md:items-center">
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Notifications icon */}
                <div className="flex items-center">
                  <Link
                    href={checkRedirectURL(user)}
                    type="button"
                    className="relative inline-flex items-center rounded-3xl border border-transparent bg-slate-700 px-3 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    <span>Log In</span>
                  </Link>
                  {/* Dark mode toggle */}
                  <div className="ml-2 mt-1">
                    <DarkModeButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-pink-500 bg-pink-50 py-2 pl-3 pr-4 text-base font-semibold text-pink-700 sm:pl-5 sm:pr-6"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="border-t border-slate-200 pt-4 pb-3">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-semibold text-slate-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-semibold text-slate-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
