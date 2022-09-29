import { CallToAction } from '@/components/CallToAction'
import { Features } from '@/components/Features'
import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'

//
export default function Home() {
  return (
    <>
      <Head>
        <title>Lullaby House, say goodbye to your cleaning troubles.</title>
        <meta
          name="description"
          content="At Lullaby House, we provide a wide range of cleaning services to help you keep your home clean and tidy."
        />
      </Head>

      <main>
        <Hero />
        <Features />
        <CallToAction />
        <Testimonials />
      </main>
    </>
  )
}
