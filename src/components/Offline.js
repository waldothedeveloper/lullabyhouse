import Image from 'next/future/image'
import Link from 'next/link'
import bgOffline from '@/images/space.jpeg'
//
export const OfflineApp = () => {
  return (
    <>
      <div className="fixed -z-50 h-screen w-screen overflow-hidden">
        <Image
          alt="young woman cleaning her yoga mat"
          src={bgOffline}
          layout="fill"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          quality={100}
          priority
        />
      </div>
      <div className="z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-3xl font-semibold text-slate-50">503</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
          Uh oh! You lost internet.
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-50">
          Wouldn&apos;t it be better if you give us a call so we can help the
          old-fashioned way?
        </p>
        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
          <Link
            href="tel:555-555-5555"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Call support
          </Link>
        </div>
      </div>
    </>
  )
}
