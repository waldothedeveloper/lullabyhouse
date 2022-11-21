export const formatCentsToDollars = (value) => {
  value = (value + '').replace(/[^\d.-]/g, '')
  value = parseFloat(value)
  return value ? value / 100 : 0
}
