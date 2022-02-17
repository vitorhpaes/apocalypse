const storage = {
  set: (key: string, value: string) => {
    return localStorage.setItem(key, value)
  },
  setJSON: (key: string, object: Object) => {
    return localStorage.setItem(key, JSON.stringify(object))
  },
  get: (key: string) => {
    const stored = localStorage.getItem(key)
    if (stored === null) return null
    let value
    try {
      value = JSON.parse(stored)
      return value
    } catch {
      value = stored
      return value
    }
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
}

export default storage
