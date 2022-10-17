export const folioFetcher = (url) => {
  return fetch(url).then((res) => res.json())
}
