import PropTypes from 'prop-types'

export const HavePets = ({ pets, handlePets, errors }) => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center">
        <label
          className={
            errors?.pets
              ? 'text-base font-medium text-red-500'
              : 'text-base font-medium text-slate-900'
          }
        >
          Pets are important to us
        </label>
      </div>
      <p
        className={
          errors?.pets
            ? 'text-sm leading-5 text-red-500'
            : 'text-sm leading-5 text-slate-500'
        }
      >
        Are there any furry or feathered household pets?
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">How many pets do you have?</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {pets.map((pet) => (
            <div key={pet.id} className="flex items-center">
              <input
                id={pet.id}
                onChange={() => handlePets(pet)}
                name="notification-method"
                type="radio"
                className={
                  errors?.pets
                    ? 'h-4 w-4 border-red-500 text-rose-600 focus:ring-rose-500'
                    : 'h-4 w-4 border-slate-300 text-rose-600 focus:ring-rose-500'
                }
              />
              <label
                htmlFor={pet.id}
                className={
                  errors?.pets
                    ? 'ml-3 block text-sm font-medium text-red-500'
                    : 'ml-3 block text-sm font-medium text-slate-700'
                }
              >
                {pet.answer}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
HavePets.propTypes = {
  pets: PropTypes.array,
  handlePets: PropTypes.func,
  errors: PropTypes.object,
}
