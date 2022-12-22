const data = [
  {
    name: 'Avtandil',
    age: 25
  },
  {
    name: 'Chunara',
    age: 24
  },
  {
    name: 'Yrysbek',
    age: 17,
    colors: ['red', 'yellow']
  },
  {
    name: 'Ramill',
    age: 23
  },
  {
    name: 'Damira',
    age: 38,
    colors: ['pink', 'red', 'black', 'blue']
  },
]

const str = (arr) => {
  const newArr = []
  const a = (object) => {
    for (let key in object) {
      if(typeof object[key] === 'object') {
        a(object[key])
      } else {
        newArr.push(object[key])
      }
    }
  }
  a(arr)
  return newArr
}
console.log(str(data))