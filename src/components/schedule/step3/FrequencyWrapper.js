import { ServiceFrequency } from '@/components/schedule/step3/ServiceFrequency'

export const FrequencyWrapper = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2"
      >
        Choose your Frequency
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <ServiceFrequency />
      </div>
    </div>
  )
}
