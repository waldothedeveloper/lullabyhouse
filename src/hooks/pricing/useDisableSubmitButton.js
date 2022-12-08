import { useState } from 'react'

export const useDisableSubmitBUtton = () => {
  const [disableSubmitButton, setDisableSubmitButton] = useState(false)

  return { disableSubmitButton, setDisableSubmitButton }
}
