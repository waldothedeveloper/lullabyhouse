export const formatCentsToDollars = (value) => {
  let newValue = String(value).replace(/[^\d.-]/g, '')
  newValue = parseFloat(newValue)
  return newValue ? newValue / 100 : 0
}
