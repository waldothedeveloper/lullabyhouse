import { useState } from 'react'

export const useNotes = () => {
  const [notes, setNotes] = useState('')

  const handleNotes = (event) => {
    const { value } = event.target
    setNotes(value)
  }

  return { handleNotes, notes }
}
