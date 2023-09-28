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

export const validateDates = (
  startDate: string,
  endDate: string,
  setError: (arg0: string) => void,
) => {
  const today = new Date()
  const selectedStartDate = new Date(startDate)
  const selectedEndDate = new Date(endDate)

  today.setHours(0, 0, 0, 0)
  selectedStartDate.setHours(0, 0, 0, 0)
  selectedEndDate.setHours(0, 0, 0, 0)

  console.log('today', today)
  console.log('selectedStartDate', selectedStartDate)
  console.log('selectedEndDate', selectedEndDate)

  if (selectedStartDate < today) {
    setError('Start date cannot be older than today.')
    return false
  } else if (selectedEndDate < today) {
    setError('End date cannot be less than the start date.')
    return false
  } else {
    setError('')
    return true
  }
}
