import { useState } from 'react'
//
export const useFrequency = () => {
  const [selectedService, setSelectedService] = useState(null)

  return { selectedService, setSelectedService }
}
