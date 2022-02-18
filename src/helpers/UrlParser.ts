const getCurrentLocale = (url: string) => {
  const separatedBaseUrl = url.split('.')
  const locale = separatedBaseUrl[separatedBaseUrl.length - 1].split(':')[0]
  return locale
}

export default getCurrentLocale
