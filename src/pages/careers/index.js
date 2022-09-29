import { Benefits } from '@/components/careers/benefits'
import { Hero } from '@/components/careers/hero'
import Link from 'next/link'
import { Overview } from '@/components/careers/overview'
import { RecruitmentProcess } from '@/components/careers/recruitmentProcess'
//
export default function Home() {
  return (
    <div className="relative">
      <div className="fixed bottom-[50%] right-0 z-50 mx-auto flex origin-center translate-x-[40%] rotate-90 text-base">
        <Link
          href="/careers/current_job_openings"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white hover:bg-rose-600 sm:text-sm lg:text-lg"
        >
          See open positions 🚀
        </Link>
      </div>

      <Hero />
      <Overview />
      <RecruitmentProcess />
      <Benefits />
    </div>
  )
}

// Be a part of our elite cleaning professionals, work where your contributions are appreciated.
