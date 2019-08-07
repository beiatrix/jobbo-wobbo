// input: all jobbo data from db
// output: jobbo data sorted by method of application
export const methodData = dbData => {
  const counter = dbData.reduce((acc, el) => {
    let key = el.method
    if (key in acc) acc[key]++
    else acc[key] = 1
    return acc
  }, {})

  const methods = []
  for (let key in counter) {
    methods.push({
      id: key,
      label: key,
      value: counter[key],
      color: 'hsl(303, 70%, 50%)'
    })
  }
  return methods
}

// input: array, key
// output: frequency of key in array, for which value is not null
export const getMetric = (data, key) => {
  return data.reduce((acc, el) => {
    if (el[key]) acc++
    return acc
  }, 0)
}

// input: all jobbo data from db
// output: tuple with 1) a hash that maps application method to quantity of apps that led to any kind of next step at all, and 2) total number of companies that had any next steps
const getMethodEffectiveness = jobbos => {
  // object with key: method, value: quantity of companies that led to any kind of next step
  const hashTable = jobbos.reduce((acc, jobbo) => {
    const { method, behavioralScreen, technicalScreen, codingChallenge, onsite } = jobbo
    if (method in acc) acc[method]++
    else if (behavioralScreen || technicalScreen || codingChallenge || onsite) {
      acc[method] = 1
    }
    return acc
  }, {})
  // total number of jobs that led to any next steps
  let total = 0
  for (let key in hashTable) {
    total += hashTable[key]
  }
  return [hashTable, total]
}

// input: all jobbo data from db
// output: tuple with 1) a hash that maps application method to quantity of companies i had on-sites with, and 2) total number of companies that had any next steps
const getBestMethods = jobbos => {
  // object with key: method, value: quantity of companies that led to any kind of next step
  const hashTable = jobbos.reduce((acc, jobbo) => {
    const { method, behavioralScreen, technicalScreen, codingChallenge, onsite } = jobbo
    if (method in acc && onsite) acc[method]++
    else if (onsite) {
      acc[method] = 1
    }
    return acc
  }, {})
  // total number of jobs that led to any next steps
  let total = 0
  for (let key in hashTable) {
    total += hashTable[key]
  }
  return [hashTable, total]
}