// const http = require('http');
//
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end('Hello Avtan!');
//
// });
//
// server.listen(3000, () => console.log('Server работает'))

// const name = 'Avtandil'
//
// function myName() {
//   function innerName() {
//     console.log(name)
//   }
//   innerName()
// }
//
// myName()

// const myFunction = (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }
//
// console.log(myFunction(1995, 1)

// setTimeout(() => {
//   console.log('Отложенное сообщение')
// }, 2000)

// function multByFactor(value, multiplier = 1) {
//   return value * multiplier
// }
//
// console.log(multByFactor(10, 2));
// console.log(multByFactor(5));
//--------------------------------------------------------
// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt
// })
//
// const firstPost = {
//   id: 1,
//   author: 'Avtandil'
// }
//
// console.table(newPost(firstPost));

//Явное переобразование стрелочных функций
// const newPost = (post, addedAt = Date()) => {
//   const myPost = {
//     ...post,
//     addedAt
//   }
//   return myPost
// }
//
// const firstPost = {
//   id: 1,
//   author: 'Avtan'
// }
//
// console.table(newPost(firstPost))

//
// const fnWithError = () => {
//   throw new Error('Some error')
// }
//
// try {
//   fnWithError()
// } catch (error){
//   console.error(error)
//   console.log(error.message)
// }
//
// console.log('Continue...')

// const myArray = [1, true, 'Avtan']
// console.log(myArray)

// const myArray = [1, 2, 3, 10]
// console.log(myArray)
//
// const res = myArray.forEach(el => console.log(el * 2))
// console.log(res)
// console.log(myArray)

// const myArray = [1, 2, 3]
// console.log(myArray)
//
// const newArray = myArray.map(function (el) {
//   return  el * 3
// })
//
// console.log(newArray)
// console.log(myArray)

// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits
//
// console.log(fruitOne)
// console.log(fruitTwo)

// const userProfile = {
//   name: 'Avtandil',
//   commentsQty: 23,
//   hasSignedAgreement: false,
// }
//
// const {name, commentsQty} = userProfile
// const {hasSignedAgreement} = userProfile
//
// console.log(name)
// console.log(commentsQty)
// console.log(hasSignedAgreement)

// const userProfile = {
//   name: 'Avtandil',
//   commentsQty: 23,
//   hasSignedAgreement: false,
// }
//
// const userInfo = ({name, commentsQty}) => {
//   if (!commentsQty){
//     return `User ${name} has not no comments`
//   }
//   return `User ${name} has ${commentsQty} comments`
// }
//
// userInfo(userProfile)
// console.log(userInfo)

// let val = 10
//
// if(val > 11) {
//   val += 20
// }
// console.log(val)

// const person = {
//   age: 20
// }
//
// if(!person.name) {
//   console.log('Имя не указано')
// } else {
//   console.log('hjhj')
// }

// let val = 10
//
// if (val < 5) {
//   val += 20
// }else {
//   val -= 20
// }
//
// console.log(val)

// const age = 19
//
// if(age > 18) {
//   console.log('Is adult')
// } else if (age >= 12) {
//   console.log('Is teenager')
// } else {
//   console.log('Is child')
// }

// const sumPositiveNumbers = (a, b) => {
//   if(typeof a !== 'number' || typeof b !== 'number') {
//     return 'One of the arguments is not a number'
//   }
//   if(a <= 0 || b <= 0) {
//     return 'Numbers are not positive'
//   }
//
//   return a * b
// }
// console.log(sumPositiveNumbers(5, 5))

// const month = 2
//
// switch (month) {
//   case 12:
//     console.log('Декабрь')
//     break
//   case 1:
//     console.log('Январь')
//     break
//   case 2:
//     console.log('Февраль')
//     break
//   default:
//     console.log('Это не зимний месяц')
// }

// const myArray = ['first', 'second', 'third']
//
// myArray.forEach((element, index) => {
//   console.log(element, index)
// })
//
// let i = 0
//
// while (i > 5) {
//   console.log(i)
//   i++
// }

// let i = 10
//
// do {
//   console.log(i)
//   i++
// } while (i < 5)

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }
//
// for (const key in myObject) {
//   console.log(key, myObject[key])
// }

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }
//
// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key])
// })

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }
//
// Object.values(myObject).forEach(value => {
//   console.log(value)
// })

// const myArray = [true, 10, 'abc', null]
//
// for (const key in myArray) {
//   console.log(myArray[key])
// }

// const myString = 'Hey'
//
// for (const letter of myString) {
//   console.log(letter)
// }

// let name = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < name.length; i++) {
//  sum =  sum + name[i]
// }
// console.log(name)



