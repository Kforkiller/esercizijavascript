const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
let keys = console.log(Object.keys(person))
let value = console.log(Object.values(person))
let entries = console.log(Object.entries(person))


for (key of Object.keys(person)){
  console.log(key + " " + person[key])
}