import { Checkout } from '@/components/pricing/Checkout'
import Script from 'next/script'

//
export default function Index() {
  return (
    <>
      <Script
        src="https://secure.myhelcim.com/js/version2.js"
        strategy="beforeInteractive"
      />
      <Checkout />
    </>
  )
}
