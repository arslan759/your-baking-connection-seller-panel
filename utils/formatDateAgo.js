export default function formatDateAgo(date) {
  const now = new Date()
  const timeDifference = now - date
  const oneMinute = 60 * 1000
  const oneHour = oneMinute * 60
  const oneDay = oneHour * 24
  const oneWeek = oneDay * 7
  const oneMonth = oneDay * 30
  const oneYear = oneMonth * 12

  if (timeDifference < oneMinute) {
    const seconds = Math.floor(timeDifference / 1000)
    return seconds === 1 ? '1 second' : `${seconds} seconds`
  } else if (timeDifference < oneHour) {
    const minutes = Math.floor(timeDifference / oneMinute)
    return minutes === 1 ? '1 minute' : `${minutes} minutes`
  } else if (timeDifference < oneDay) {
    const hours = Math.floor(timeDifference / oneHour)
    return hours === 1 ? '1 hour' : `${hours} hours`
  } else if (timeDifference < oneWeek) {
    const days = Math.floor(timeDifference / oneDay)
    return days === 1 ? '1 day' : `${days} days`
  } else if (timeDifference < oneMonth) {
    const weeks = Math.floor(timeDifference / oneWeek)
    return weeks === 1 ? '1 week' : `${weeks} weeks`
  } else if (timeDifference < oneYear) {
    const months = Math.floor(timeDifference / oneMonth)
    return months === 1 ? '1 month' : `${months} months`
  } else {
    const years = Math.floor(timeDifference / oneYear)
    return years === 1 ? '1 year' : `${years} years`
  }
}
