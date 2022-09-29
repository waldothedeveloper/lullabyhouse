export const checkRedirectURL = (user) => {
  return user && user.sid ? `/user/${user.sid}` : `/api/auth/login`
}
