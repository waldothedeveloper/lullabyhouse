const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

//
export const validateSignIn = (values) => {
  // console.log('values: ', values)
  const errors = {}
  if (!values.email) {
    errors.email = 'A valid email address is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid or imcomplete email address'
  }
  return errors
}
