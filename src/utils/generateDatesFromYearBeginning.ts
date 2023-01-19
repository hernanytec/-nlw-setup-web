import dayjs from 'dayjs'

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf('year')
  const endDate = new Date()

  const dates = []
  let compareDate = firstDayOfTheYear

  while (compareDate.isBefore(endDate)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
