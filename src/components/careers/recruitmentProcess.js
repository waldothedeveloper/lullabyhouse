const recruitmentProcess = [
  {
    id: 1,
    question: 'Review',
    answer: 'We review applications to screen fro a variety of criteria',
  },
  {
    id: 2,
    question: 'Intro call',
    answer: 'Candidates will have an intro call with one of our recruiters',
  },
  {
    id: 3,
    question: 'Task',
    answer: 'Finalists complete a one-day tasks related to the open position',
  },
  {
    id: 4,
    question: 'Offer',
    answer: 'We will hire you once we feel you are the best fit for the role',
  },
]

//
export const RecruitmentProcess = () => {
  return (
    <div className="bg-slate-700">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our recruitment process
          </h2>
          <p className="mt-4 text-gray-400">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
            elementum blandit et.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {recruitmentProcess.map((step) => (
              <div key={step.id}>
                <div className="flex items-center justify-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-800">
                    {step.id}
                  </div>
                  <dt className="ml-2 font-semibold text-white">
                    {step.question}
                  </dt>
                </div>
                <dd className="mt-3 text-gray-400">{step.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
