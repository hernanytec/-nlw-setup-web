import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { fetchSummary } from '../usecases/fetchSummary'
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'
import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()
const minimunSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  const { data: summary, isLoading } = useQuery(['summary'], fetchSummary)

  if (isLoading || !summary) return null

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}-${index}`}
            className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          const dayInSummary = summary.find((day) =>
            dayjs(date).isSame(day.date, 'day'),
          )

          return (
            <HabitDay
              key={date.toISOString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          )
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <HabitDay disabled key={index} />
          ))}
      </div>
    </div>
  )
}
