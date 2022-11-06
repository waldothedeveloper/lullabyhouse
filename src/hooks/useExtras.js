import { extras } from '@/utils/extras'
import { useState } from 'react'
//
export const useExtras = () => {
  const [extrasSelected, setExtrasSelected] = useState(extras)

  const handleExtraSelect = (elem) => {
    return setExtrasSelected((prevState) => {
      const extraToBeUpdated = prevState.map((obj) => {
        if (obj.id === elem.id) {
          return { ...obj, checked: !obj.checked }
        }
        return obj
      })

      return extraToBeUpdated
    })
  }
  return { extrasSelected, handleExtraSelect }
}
