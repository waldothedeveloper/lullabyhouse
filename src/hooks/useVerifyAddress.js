import { useEffect, useState } from 'react'

import usePlacesAutocomplete from 'use-places-autocomplete'

//
export const useVerifyAddress = () => {
  const [validAddress, setValidAddress] = useState(false)

  const {
    // ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'geometry', 'name', 'address_component'],
    },
    debounce: 200,
  })

  const handleInput = (e) => setValue(e)

  const handleSelect = (val) => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"

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
  }
}
