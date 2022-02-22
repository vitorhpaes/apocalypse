import { useCallback } from 'react'
import { format as formatter } from 'date-fns'
import { useSite } from 'src/driver/MultisiteContext'

const useFormat = () => {
  const { format } = useSite()

  const formatDate = useCallback(
    (date: Date): string => formatter(date, format.date),
    [format.date]
  )

  return {
    formatDate,
  }
}

export default useFormat
