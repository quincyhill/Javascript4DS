const creature = {
  order: 'Primates',
  family: 'Callitrichidae',
  genus: 'Callithrix',
  species: 'Jacchus',
}

console.log(`creature is ${creature}`)
console.log(`creature.genus is ${creature.genus}`)

for (let key in creature) {
  console.log(`creature[${key}] is ${creature[key]}`)
}

console.log(JSON.stringify(creature))

THIS_THING = 23
THIS_THING = 24
console.log(typeof THIS_THING)
