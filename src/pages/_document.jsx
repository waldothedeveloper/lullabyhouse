import { Head, Html, Main, NextScript } from 'next/document'

import Script from 'next/script'

//
export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com&display=optional" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACES}&libraries=places`}
          strategy="beforeInteractive"
        />
        <Script
          src={
            process.env.NODE_ENV !== 'production'
              ? 'https://sandbox.web.squarecdn.com/v1/square.js'
              : 'https://web.squarecdn.com/v1/square.js'
          }
          strategy="beforeInteractive"
        />
      </Head>
      <body className="h-full dark:bg-slate-800">
        <Main />
        <NextScript />
        <Script
          src="//code.tidio.co/wiwd8tuym33ob9lfloqo8obi4iutqt4y.js"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  )
}
