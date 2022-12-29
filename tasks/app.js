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
console.table(newPost(firstPost))


const fnWithError = () => {
  throw new Error('Some error')
}

try {
  fnWithError()
} catch (error){
  console.error(error)
  console.log(error.message)
}

console.log('Continue...')
