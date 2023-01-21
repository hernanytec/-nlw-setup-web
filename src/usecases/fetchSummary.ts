import { api } from '../lib/axios'

interface SummaryResponse {
  id: string
  date: string
  completed: number
  amount: number
}

export async function fetchSummary(): Promise<SummaryResponse[]> {
  const { data } = await api.get('/summary')
  return data
}
