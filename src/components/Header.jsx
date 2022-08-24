import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/future/image'
import logo from '@/images/lulhouse.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            src={logo}
            alt="Lullaby house logo"
            placeholder="blur"
            // width={200}
            // height={200}
            priority
            layout="responsive"
          />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <strong>Florida&apos;s Top Cleaning Service</strong>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="/sign_up">Sign Up</Button>
        </div>
      </Container>
    </header>
  )
}
