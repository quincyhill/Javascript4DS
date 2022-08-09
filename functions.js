function limits(values) {
  // Returns a (2,) array of low and high value
  if (!values.length) {
    return [undefined, undefined]
  }

  let low = values[0]
  let high = values[0]

  for (let v of values) {
    if (v < low) low = v
    if (v > high) high = v
  }

  return [low, high]
}

const arrowLimits = (values) => {
  // Returns a (2,) array of low and high value
  if (!values.length) {
    return [undefined, undefined]
  }

  let low = values[0]
  let high = values[0]

  for (let v of values) {
    if (v < low) low = v
    if (v > high) high = v
  }

  return [low, high]
}

console.log(limits([2]))

const allTests = [
  [],
  [9],
  [3, 30, 300],
  ['apple', 'Grapefruit', 'banana'],
  [3, 'apple', ['sub-array']],
]

for (let test of allTests) {
  console.log(`limits of ${test} are ${arrowLimits(test)}`)
}
