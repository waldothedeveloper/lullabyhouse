import 'focus-visible'
import '@/styles/tailwind.css'

import { OnlineStatusProvider } from '@/components/providers/OnlineStatus'
import { UserProvider } from '@auth0/nextjs-auth0'

//
export default function App({ Component, pageProps }) {
  return (
    <OnlineStatusProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </OnlineStatusProvider>
  )
}
