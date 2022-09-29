import {
  Bars4Icon,
  BellIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

import { Fragment } from 'react'
import Image from 'next/image'
import { OfflineApp } from '@/components/Offline'
import { classNames } from '@/utils/classNames'
import logo from '@/images/logo.png'
import { navigation } from '@/utils/navigation'
import { useEffect } from 'react'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { useRouter } from 'next/router'
import userPhoto from '@/images/user.jpg'

//

const userTwo = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: userPhoto,
}

export const getServerSideProps = withPageAuthRequired()
//
function UserAccount() {
  const router = useRouter()
  const onlineStatus = useOnlineStatus()
  const { user } = useUser()

  useEffect(() => {
    if (user && user?.sid) {
      router.push(`/user/account?id=${user?.sid}`, undefined, { shallow: true })
    }
    // eslint-disable-next-line
  }, [user])

  //
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: `/api/auth/logout` },
  ]

  if (!onlineStatus) {
    return <OfflineApp />
  }

  return (
    <>
      <div className="min-h-full">
        <div className="bg-rose-600 pb-32">
          <Disclosure
            as="nav"
            className="border-b border-rose-300 border-opacity-25 bg-rose-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-rose-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        <Image
                          src={logo}
                          className="rounded-full"
                          alt="Lullaby House logo"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-rose-700 text-white'
                                  : 'text-white hover:bg-rose-500 hover:bg-opacity-75',
                                'rounded-md py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                      <div className="w-full max-w-lg lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-slate-400 focus-within:text-slate-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            className="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-slate-900 placeholder-slate-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-rose-600 p-2 text-rose-200 hover:bg-rose-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars4Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-rose-600 p-1 text-rose-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <Menu.Button className="flex rounded-full bg-rose-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600">
                              <span className="sr-only">Open user menu</span>
                              <Image
                                src={userTwo.imageUrl.src}
                                className="rounded-full"
                                alt="user imagine"
                                width={32}
                                height={32}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-slate-100' : '',
                                        'block py-2 px-4 text-sm text-slate-700'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-rose-700 text-white'
                            : 'text-white hover:bg-rose-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-rose-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <Image
                          src={userTwo.imageUrl.src}
                          className="rounded-full"
                          alt="user imagine"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {userTwo.name}
                        </div>
                        <div className="text-sm font-medium text-rose-300">
                          {userTwo.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-rose-600 p-1 text-rose-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-rose-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="h-96 rounded-lg border-4 border-dashed border-slate-200" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default UserAccount
