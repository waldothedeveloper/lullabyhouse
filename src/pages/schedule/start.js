import { Layout } from '@/components/schedule/Layout'
import { Stepper } from '@/components/schedule/Stepper'

//
const GetAddressForSquareFootageQuote = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link> */}
        <div className="mt-6">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Schedule a Cleaning Service
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-slate-500 dark:text-slate-400">
            Our promise is to leave your house looking like a million bucks.
            Hesitating? We will make you a believer.
          </p>
        </div>
      </div>
      <Stepper />
    </Layout>
  )
}

export default GetAddressForSquareFootageQuote
