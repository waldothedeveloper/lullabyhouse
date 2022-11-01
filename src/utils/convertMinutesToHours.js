export const convertMinutesToHours = (number) => {
  const hours = number / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return {
    hours: rhours,
    minutes: rminutes,
  }
}
