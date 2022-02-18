import { DEFAULT_LOCALE, POSSIBLE_LOCALES } from '../@config/Site/Constants'
const getCurrentLocale = () => {
  const separatedBaseUrl = window.location.href.split('.')
  const locale = separatedBaseUrl[separatedBaseUrl.length - 1].split(':')[0]
  if (!POSSIBLE_LOCALES.includes(locale)) return DEFAULT_LOCALE
  return locale
}

export default getCurrentLocale
