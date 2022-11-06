export const whenToBill = (when) => {
  let strMessage = ``

  switch (when) {
    case 'onceAMonth':
      strMessage = `billed monthly`
      break
    case 'justOnce':
      strMessage = `one time payment`
      break
    case 'everyWeek':
      strMessage = `billed weekly`
      break
    case 'every2Weeks':
      strMessage = `billed every 2 weeks`
      break
    default:
      break
  }

  return strMessage
}
