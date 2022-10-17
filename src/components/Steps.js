const steps = [
  { name: 'Pick a date and a time', number: '01' },
  { name: 'Pay online in advance', number: '02' },
  { name: 'Sit back and relax while we clean', number: '03' },
]

export const Steps = () => {
  return (
    <div className="w-full py-12">
      <nav className="flex w-full justify-start">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li className="w-full" key={step.number}>
              <div className="flex w-full items-start">
                <div
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="font-semibold text-teal-500">
                    {step.number}
                  </div>
                </div>
                <p className="ml-3 w-full text-sm font-medium text-slate-900">
                  {step.name}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
