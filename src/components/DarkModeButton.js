import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

import { Switch } from '@headlessui/react'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'
import { useTheme } from 'next-themes'

//
export const DarkModeButton = () => {
  const { setTheme, systemTheme } = useTheme()

  const [enabled, setEnabled] = useState(systemTheme === 'dark' ? true : false)

  //
  return (
    <Switch
      checked={enabled}
      onChange={() => {
        setEnabled((prevState) => {
          if (prevState) {
            setTheme('light')
            return false
          }
        })
      }}
      className={classNames(
        enabled ? 'bg-sky-600' : 'bg-yellow-300',
        'relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-4 w-4 text-slate-400" />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-4 w-4 text-sky-600" />
        </span>
      </span>
    </Switch>
  )
}
