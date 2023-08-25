export function validateEmail(email: string): boolean {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Match the email pattern against the input email
  const match = email.match(pattern)

  // Return true if the email is valid, false otherwise
  return !!match
}

export function checkPassword(password: string, confirmPassword: string): boolean {
  return password === confirmPassword
}
