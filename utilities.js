// Why isnt there some const or something for DEFAULT_BOUND
DEFAULT_BOUND = 3

const clip = (values, bound = DEFAULT_BOUND) => {
  let result = []
  for (let v of values) {
    if (v <= bound) result.push(v)
  }
  return result
}

// Here is the exporting
module.exports = {
  clip: clip,
}
