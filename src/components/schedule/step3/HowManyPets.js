import { RadioGroup } from '@headlessui/react'
import { classNames } from '@/utils/classNames'

export const HowManyPets = ({
  petQuantity,
  handlePetQuantity,
  selectedPetQuantity,
}) => {
  return (
    <div className="max-w-lg">
      <div className="flex items-center justify-between py-12">
        <h2 className="text-sm font-medium text-slate-900">
          Great! And how many pets?
          <span className="block text-sm leading-5 text-slate-500">
            A small fee of $25 will be charged if there are two pets or less. A
            $50 premium will be applied to houses with 3 or more pets
          </span>
        </h2>
      </div>

      <RadioGroup
        value={selectedPetQuantity}
        onChange={handlePetQuantity}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">How many pets</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {petQuantity.map((option) => (
            <RadioGroup.Option
              key={option.quantity}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  active ? 'ring-2 ring-rose-500 ring-offset-2' : '',
                  checked
                    ? 'border-transparent bg-rose-600 text-white hover:bg-rose-700'
                    : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
                  'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                )
              }
            >
              <RadioGroup.Label as="span">{option.quantity}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
