import { CalendarWrapper } from '@/components/schedule/step3/CalendarWrapper'
import { Extras } from '@/components/schedule/step3/Extras'
import { Frequency } from '@/components/schedule/step3/Frequency'
import { HavePets } from '@/components/schedule/step3/HavePets'
import { HowManyPets } from '@/components/schedule/step3/HowManyPets'
import Link from 'next/link'
import { Notes } from '@/components/schedule/step3/Notes'
import { Toaster } from 'react-hot-toast'
import { Transition } from '@headlessui/react'
import { useForm } from '@/hooks/useForm'
//

//
export const Step3Wrapper = () => {
  const {
    errors,
    handleSubmit,
    today,
    days,
    nextMonth,
    previousMonth,
    selectedDay,
    setSelectedDay,
    handleTime,
    hours,
    currentMonth,
    firstDayCurrentMonth,
    handleExtraSelect,
    handleSelectedService,
    selectedService,
    extrasSelected,
    pets,
    handlePets,
    petQuantity,
    handlePetQuantity,
    selectedPetQuantity,
    handleNotes,
    notes,
  } = useForm()

  //
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 divide-y divide-slate-200"
      >
        <div className="space-y-8 divide-y divide-slate-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-slate-900">
                Schedule a Date and Time
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                These are the final step to get an accurate quote. Try our
                services today. We will make you a believer.
              </p>
            </div>
            <Frequency
              errors={errors}
              selectedService={selectedService}
              handleSelectedService={handleSelectedService}
            />
            <CalendarWrapper
              errors={errors}
              today={today}
              days={days}
              nextMonth={nextMonth}
              hours={hours}
              previousMonth={previousMonth}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              handleTime={handleTime}
              currentMonth={currentMonth}
              firstDayCurrentMonth={firstDayCurrentMonth}
            />
          </div>
          <div className="py-12">
            <HavePets pets={pets} handlePets={handlePets} />
            <Transition
              show={
                pets.filter((pet) => pet.answer === 'Yes' && pet.checked)
                  .length > 0
                  ? true
                  : false
              }
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <HowManyPets
                petQuantity={petQuantity}
                handlePetQuantity={handlePetQuantity}
                selectedPetQuantity={selectedPetQuantity}
              />
            </Transition>
          </div>
          <Extras
            extras={extrasSelected}
            handleExtraSelect={handleExtraSelect}
          />
          <Notes handleNotes={handleNotes} notes={notes} />
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link
              href="/schedule/start"
              className="rounded-md border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Go back
            </Link>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Ok, show me my quote
            </button>
          </div>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
