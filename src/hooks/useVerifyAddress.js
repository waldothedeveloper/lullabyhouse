import { useEffect, useState } from 'react'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'

import { getFormattedAddress } from '@/utils/getFormattedAddress'
import { isValueAnArray } from '@/utils/isValueAnArray'
import { isValueAnObject } from '@/utils/isValueAnObject'

//
export const useVerifyAddress = () => {
  const [validAddress, setValidAddress] = useState(false)
  const [structuredAddress, setStructuredAddress] = useState(null)

  const {
    // ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: true,
    requestOptions: {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'geometry', 'address_components'],
    },
    debounce: 200,
  })

  const handleInput = (e) => setValue(e)

  const handleSelect = async (val) => {
    const chosenAddress = data.filter((elem) => elem.description === val)

    if (isValueAnArray(chosenAddress)) {
      try {
        await getDetails({
          placeId: chosenAddress[0]?.place_id,
        })
          .then((details) => {
            if (isValueAnObject(details) && Object.keys(details).length > 0) {
              const { address_components } = details

              const youGotIt = getFormattedAddress(address_components)
              setStructuredAddress(youGotIt)
            }
          })
          .catch((error) => {
            throw new Error(`Coudn't get the property details`, error)
          })
      } catch (error) {
        throw new Error(`Coudn't get the property details`, error)
      }
    } else {
      throw new Error(`We couldn't find the property details.`)
    }

    setValue(val, false)
    setValidAddress(chosenAddress)
    clearSuggestions()

    return val
  }

  useEffect(() => {
    if (value === '') {
      setValidAddress(false)
      setStructuredAddress(null)
    }
  }, [value])

  useEffect(() => {
    if (!validAddress) {
      setValue('', false)
      setStructuredAddress(null)
    }
  }, [setValue, validAddress])

  return {
    value,
    handleSelect,
    handleInput,
    data,
    validAddress,
    status,
    setValidAddress,
    structuredAddress,
  }
}
