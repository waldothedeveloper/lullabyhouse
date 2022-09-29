import 'focus-visible'
import '@/styles/tailwind.css'

import { Layout } from '@/components/Layout'
import { OnlineStatusProvider } from '@/components/providers/OnlineStatus'
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@auth0/nextjs-auth0'

//
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class" enableSystem={true}>
        <OnlineStatusProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </OnlineStatusProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
