import { CallToAction } from '@/components/CallToAction'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import { Header } from '@/components/Header'
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
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
