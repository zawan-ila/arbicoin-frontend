export function getTimeElapsed (timestamp) {
  const timePassed = Math.floor((new Date() - new Date(timestamp)) / 1000)
  const daysPassed = Math.floor(timePassed / (24 * 60 * 60))
  const hoursPassed = Math.floor(timePassed / 3600)
  const minutesPassed = Math.floor(timePassed / 60)

  return (daysPassed ? `${daysPassed} days ` : '') + (hoursPassed ? `${hoursPassed % 24} hours ` : '') + (`${minutesPassed % 60} minutes ago`)
}
