export const isValueAnObject = (value) =>
  typeof value === 'object' && !Array.isArray(value) && value !== null
