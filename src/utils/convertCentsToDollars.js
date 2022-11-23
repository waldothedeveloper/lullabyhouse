export const formatCentsToDollars = (value) => {
  value = (String(value)).replace(/[^\d.-]/g, '')
  value = parseFloat(value)
  return value ? value / 100 : 0
}
