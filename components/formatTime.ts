export function formatDistanceToNow(datetime) {
  const current = new Date()
  const previous = new Date(datetime)
  const seconds = Math.floor((current.getTime() - previous.getTime()) / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (seconds < 60) {
    return "just now"
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`
  } else if (days < 30) {
    return days === 1 ? "1 day ago" : `${days} days ago`
  } else if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`
  } else {
    return years === 1 ? "1 year ago" : `${years} years ago`
  }
}
