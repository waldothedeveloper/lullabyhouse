import 'focus-visible'
import '@/styles/tailwind.css'

import { OnlineStatusProvider } from '@/components/providers/OnlineStatus'
import { ProvideAuth } from '@/hooks/auth/useAuth'

//
export default function App({ Component, pageProps }) {
  return (
    <OnlineStatusProvider>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </OnlineStatusProvider>
  )
}
