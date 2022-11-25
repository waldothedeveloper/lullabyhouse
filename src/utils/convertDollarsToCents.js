export const convertDollarsToCents = (value) => {
  let newValue = String(value).replace(/[^\d.-]/g, '')

  if (newValue && newValue.includes('.')) {
    newValue = newValue.substring(0, newValue.indexOf('.') + 3)
  }

  return newValue ? Math.round(parseFloat(newValue) * 100) : 0
}
