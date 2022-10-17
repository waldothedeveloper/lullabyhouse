export const addressFetcher = (url) => {
  return fetch(url).then((res) => res.json())
}
