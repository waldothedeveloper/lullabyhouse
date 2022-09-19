import 'focus-visible'
import '@/styles/tailwind.css'

import { OnlineStatusProvider } from '@/components/providers/OnlineStatus'
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@auth0/nextjs-auth0'

//
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class" enableSystem={true}>
        <OnlineStatusProvider>
          <Component {...pageProps} />
        </OnlineStatusProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
