export const convertDollarsToCents = (value) => {
  value = (String(value)).replace(/[^\d.-]/g, '')
  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3)
  }

  return value ? Math.round(parseFloat(value) * 100) : 0
}
