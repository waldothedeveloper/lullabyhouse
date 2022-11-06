import { useState } from 'react'
//
export const useFrequency = () => {
  const [selectedService, setSelectedService] = useState(null)

  const handleSelectedService = (data) => {
    setSelectedService(data)
  }

  return { selectedService, handleSelectedService }
}
