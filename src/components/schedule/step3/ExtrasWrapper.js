import { Extras } from '@/components/schedule/step3/Extras'

export const ExtrasWrapper = () => {
  return (
    <div className="space-y-6 divide-y divide-slate-200 pt-8 sm:space-y-5 sm:pt-10">
      <div className="space-y-6 divide-y divide-slate-200 sm:space-y-5">
        <div className="pt-6 sm:pt-5">
          <div role="group" aria-labelledby="label-extras">
            <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
              <div>
                <div
                  className="text-base font-medium text-slate-900 sm:text-sm sm:text-slate-700"
                  id="label-extras"
                >
                  Choose Any Extras
                </div>
              </div>
              <div className="mt-4 sm:col-span-2 sm:mt-0">
                <Extras />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
