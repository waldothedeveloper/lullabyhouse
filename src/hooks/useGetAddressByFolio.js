import useSWR from 'swr'

//
export const useGetAddressByFolio = (folio, fetcher) => {
  //
  const { data: addressDetails, error: addressError } = useSWR(() => {
    if (folio && folio?.result?.Completed) {
      return `/api/get_address_by_folio?folioNumber=${folio?.result?.MinimumPropertyInfos[0]?.Strap.replaceAll(
        /-/g,
        ''
      )}`
    }
    return null
  }, fetcher)

  return { addressDetails, addressError }
}
