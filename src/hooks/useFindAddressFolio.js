import useSWR from 'swr'

export const useFindAddressFolio = (validAddress, addressFetcher) => {
  const str = validAddress && validAddress[0]?.structured_formatting?.main_text

  //
  const { data: addressFolio, error } = useSWR(
    str ? `/api/find_address_folio?address=${str}` : null,
    (url) => addressFetcher(url, str)
  )

  return { addressFolio, error }
}
