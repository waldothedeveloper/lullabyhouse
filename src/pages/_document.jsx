import { Head, Html, Main, NextScript } from 'next/document'

import Script from 'next/script'

//
export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
      </Head>
      <body className="h-full">
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

// ;<script
//   src="//code.tidio.co/wiwd8tuym33ob9lfloqo8obi4iutqt4y.js"
//   async
// ></script>
