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
