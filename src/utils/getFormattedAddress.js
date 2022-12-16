export const getFormattedAddress = (addressArray) => {
  let addressLine1 = '',
    addressLine2 = '',
    locality = '',
    administrativeDistrictLevel1 = '',
    postalCode = '',
    country = ''
  // loop over the address components
  for (let component of addressArray) {
    const componentType = component.types[0]

    switch (componentType) {
      case 'street_number': {
        addressLine1 = `${component.long_name} ${addressLine1}`
        break
      }

      case 'route': {
        addressLine1 += component.short_name
        break
      }

      case 'subpremise': {
        addressLine2 = `#${component.long_name}`
        break
      }

      case 'postal_code': {
        postalCode = `${component.long_name}${postalCode}`
        break
      }

      case 'postal_code_suffix': {
        postalCode = `${postalCode}-${component.long_name}`
        break
      }
      // city
      case 'locality':
        locality = component.long_name
        break
      // state
      case 'administrative_area_level_1': {
        administrativeDistrictLevel1 = component.long_name
        break
      }

      case 'country':
        country = component.short_name
        break
      default:
        break
    }
  }

  return {
    addressLine1,
    addressLine2,
    locality,
    administrativeDistrictLevel1,
    postalCode,
    country,
  }
}
