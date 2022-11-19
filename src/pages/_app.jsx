import 'focus-visible'
import '@/styles/tailwind.css'

// import FormProvider from '@/context/provideSquarePayment'
import { Layout } from '@/components/Layout'
import { ProvideSchedule } from '@/context/provideScheduleContext'
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@auth0/nextjs-auth0'

//
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      {/* <FormProvider
        applicationId={process.env.NEXT_PUBLIC_SQUAREUP_SANDBOX_APPID}
        locationId={process.env.NEXT_PUBLIC_SQUAREUP_LOCATION_ID}
      > */}
      <ThemeProvider attribute="class" enableSystem={true}>
        <ProvideSchedule>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProvideSchedule>
      </ThemeProvider>
      {/* </FormProvider> */}
    </UserProvider>
  )
}
