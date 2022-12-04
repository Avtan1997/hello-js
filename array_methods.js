/** forEach */

//  const items = ['item1,', 'item2', 'item3']
//  const copy = []
//
//  // for (let i = 0; i < items.length; i++){
//  //   copy.push('New' + items[i])
//  // }
// items.forEach(function (element,index, array){
//   copy.push(index + 'New' + element)
// })
//
//  console.log(copy)

/** filter */

// let array = [12, 2, 56, 21, 67]
//
// let newArray = array.filter(function (element){
//   return element > 12
// })
// console.log(newArray)

/** map */

// let nums = [1, 5, 3, 12, 50]
//
// let result = nums.map(function (elements){
//   return elements * 2
// })
// console.log(result)

/** reduce */

// const array = [1, 2, 3, 4, 5];
//
// let total = array.reduce(function (acc, element){
//   return acc + element;
// }, 0);
// console.log(total)

// const array = ['apple', 'banana', 'peach', 'orange'];
//
// let fruits = array.reduce((acc, element) => {
//   acc[element] = 1;
//   return acc
// }, {})
// console.log(fruits)

let а = { b: null }; a.b?.c.d // => undefined
