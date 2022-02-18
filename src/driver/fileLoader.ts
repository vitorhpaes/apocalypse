import { lazy } from 'react'
import getCurrentLocale from 'src/helpers/UrlParser'

export const loadByLocale = (path: string) => {
  const locale = getCurrentLocale()
  return lazy(
    async () =>
      await import(`src/driver/${locale}/${path}`).catch(async (e) => {
        console.error(`Cannot read file "driver/${locale}/${path}"`)
      })
  )
}
