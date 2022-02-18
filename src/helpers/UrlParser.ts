const getCurrentLocale = () => {
  const separatedBaseUrl = window.location.href.split('.')
  const locale = separatedBaseUrl[separatedBaseUrl.length - 1].split(':')[0]
  return locale
}

export default getCurrentLocale
