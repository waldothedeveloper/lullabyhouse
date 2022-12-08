import { useEffect, useState } from 'react'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'

import { getFormattedAddress } from '@/utils/getFormattedAddress'
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
    try {
      await getDetails({
        placeId: data[0].place_id,
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

    setValue(val, false)
    setValidAddress(data.filter((elem) => elem.description === val))
    clearSuggestions()

    return val
  }

  useEffect(() => {
    if (value === '') {
      setValidAddress(false)
    }
  }, [value])

  useEffect(() => {
    if (!validAddress) {
      setValue('', false)
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
