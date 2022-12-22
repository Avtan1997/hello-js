const array = [1, 3, 5, 2, 6, 7, 22, 4, 11]

function lineSea(array, item){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item ) {
      return i;
    }
  }
  return null
}

console.log(lineSea(array, 5))
