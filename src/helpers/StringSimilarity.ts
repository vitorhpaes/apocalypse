function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()

  const costs = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j
      else {
        if (j > 0) {
          let newValue = costs[j - 1]
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
          costs[j - 1] = lastValue
          lastValue = newValue
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}

const compare = (first: string, second: string) => {
  let longer = first
  let shorter = second
  if (first.length < second.length) {
    longer = second
    shorter = first
  }
  const longerLength = longer.length
  if (longerLength === 0) {
    return 1.0
  }
  return ((longerLength - editDistance(longer, shorter)) / longerLength) * 100
}

export default compare
