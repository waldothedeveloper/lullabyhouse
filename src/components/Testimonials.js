// import Image from 'next/future/image'
// import cleaningPlant from '@/images/cleaning_plant.jpeg'
// const reviews = [
//   {
//     id: 1,
//     title: 'This is the best white t-shirt out there',
//     rating: 5,
//     content: `
//       I've been with them for a year, and never turn back!
//     `,
//     author: 'Mark Edwards',
//     avatarSrc:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     id: 2,
//     title: 'Adds the perfect variety to my wardrobe',
//     rating: 4,
//     content: `They are lovely, hardworking and super fast, unbelievable!`,
//     author: 'Blake Reid',
//     avatarSrc:
//       'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
//   },
//   {
//     id: 3,
//     title: 'All good things come in 6-Packs',
//     rating: 5,
//     content: 'It is hard to find a profesional company in my area!',
//     author: 'Ben Russel',
//     avatarSrc:
//       'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
// ]

export const Testimonials = () => {
  return (
    <section className="pt-10 dark:bg-slate-800 sm:pt-16 md:pt-0 2xl:py-24">
      <div className="mx-auto max-w-7xl rounded-md bg-rose-400 px-4 sm:px-6 lg:px-8">
        <div className="2xl:pl-24">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="text-center md:py-16 md:text-left xl:py-24">
              <blockquote>
                <p className="text-2xl font-semibold leading-relaxed text-slate-900">
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.”
                </p>
              </blockquote>
              <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p className="text-base font-semibold text-slate-900">
                  Jenny Wilson
                </p>
                <p className="mt-2 text-base text-slate-700 sm:mt-0 sm:ml-2">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="relative">
              {/* <Image
                className="md:absolute md:bottom-0 md:origin-bottom-right md:scale-110 lg:scale-75 2xl:-mt-20 2xl:scale-100"
                src={cleaningPlant}
                layout="fill"
              /> */}
              <img
                className="md:absolute md:bottom-0 md:origin-bottom-right md:scale-110 lg:scale-75 2xl:-mt-20 2xl:scale-100"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
