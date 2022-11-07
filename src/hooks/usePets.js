import { useState } from 'react'
//
export const usePets = () => {
  const [pets, setPets] = useState([
    { id: 1, answer: 'Yes', checked: false },
    { id: 2, answer: 'No', checked: false },
  ])

  const [selectedPetQuantity, setSelectedPetQuantity] = useState(null)
  const [petQuantity, setPetQuantity] = useState([
    { quantity: 1, checked: false },
    { quantity: 2, checked: false },
    { quantity: 3, checked: false },
    { quantity: 4, checked: false },
    { quantity: 5, checked: false },
  ])

  // console.log('petQuantity: ', petQuantity)
  const petQuant = [...petQuantity]

  const resetPetChecked = () => {
    petQuant.forEach((pet) => (pet.checked = false))
    setPetQuantity(petQuant)
    setSelectedPetQuantity(null)
  }

  const handlePets = (pet) => {
    const thePets = [...pets]
    const idx = thePets.indexOf(pet)

    thePets[idx].checked = true
    if (idx > 0) {
      thePets[idx - 1].checked = false
      resetPetChecked()
    } else {
      thePets[idx + 1].checked = false
      // resetPetChecked()
    }

    setPets(thePets)
  }

  const handlePetQuantity = (selected) => {
    setSelectedPetQuantity(selected)

    petQuant.forEach((elem) => {
      if (elem?.quantity === selected?.quantity) {
        elem.checked = true
      } else {
        elem.checked = false
      }
    })
    setPetQuantity(petQuant)
  }

  return {
    pets,
    handlePets,
    petQuantity,
    handlePetQuantity,
    selectedPetQuantity,
  }
}
