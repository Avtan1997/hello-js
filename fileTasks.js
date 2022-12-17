//task 1
// /**
//  * @param {number} num
//  * @return {string}
//  */
// const intToRoman = function(num) {
//   const map = {  //map словарь
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   let result = '';
//   for (key in map) {
//    console.log(key)
//     const repeatCounter = Math.floor(num / map[key]);
//
//     if(repeatCounter !== 0) {
//       result += key.repeat(repeatCounter);
//     }
//     num %= map[key];
//     if(num === 0) return result;
//   }
//   return result;
// };
// console.log(intToRoman(25));

//task 2 Найти среднее арифметическое в массиве.
// function getAverage(marks){
//  // const sum = marks.reduce((a, b) => a + b, 0)
//   let sum = 0;
//   for (const mark of marks){
//     sum += mark
//   }
//   return Math.floor(sum / marks.length) //использую встренную функцию reduce
// }
// console.log(getAverage([2, 2, 2, 2,]), 2)
// console.log(getAverage([1, 2, 3, 4, 5]), 3)
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)

// Без испоьзование встроенной функции.
// function getAverage(marks){
//   let acc = 0 //аккумолятор начальное значение 0.
//   marks.forEach(el => acc + el) //Внутри цикла acc скадываю с текущим элементом el.
//   return Math.floor(acc / marks.length) //сумму разделяю на количество элементов
// }
// console.log(getAverage([2, 2, 2, 2,]), 2)
// console.log(getAverage([1, 2, 3, 4, 5]), 3)
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)

//task 3 развернуть последовательность
// const reverseSeq = n => {
//   const arr = []; //пустой массив должен заполнить с помоьщю циклов.
//   for(let i = n; i > 0; i--){ //начальная значения i будет n. Этот цикл будет работать от n до 1
//     arr.push(i) //в качетве аргумента передаю иттератор.
//   }
//
//   return arr; //Возвращаю наполненый массив.
// }
//  console.log(reverseSeq(10))

//task 4 Возвращаю баллы студентов в зависимости от некоторых условий.
// function finalGrade(exam, projects) {
//   if(exam > 90 || projects > 10){ //Сразу дал условие.
//     return 100;
//   } else if (exam > 75 && projects >= 5){
//     return 90; //90 получу если экзамен больше 75 баллов
//   } else if (exam > 50 && projects >= 2){
//     return 75;
//   }else {
//     return 0;
//   }
// }
// console.log(finalGrade(89, 0), 100);
// console.log(finalGrade(85, 9), 90);

//task 5
//Ассинхронность
// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// },2000)

// const p = new Promise(function (resolve, reject){
//   setTimeout(() => {
//       console.log('Preparing data...')
//     const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   resolve(backendData)
//   }, 2000)
//
// })
//
// p.then(data => {
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     data.modified = true
//     resolve(data)
//   },2000)
//
// })
//
// }).then(data => {
//   console.log('Modified', data)
// })
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finally'))

// const slip = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
//   })
// }
//
// // slip(2000).then(() => console.log('After 2 seconds'))
// // slip(5000).then(() => console.log('After 3 seconds'))
//
// Promise.all([slip(2000), slip(3000)]).then(() => {
//   console.log('All promises')
// })
//
// Promise.all([slip(2000), slip(3000)]).then(() => {
//   console.log('Race promises')
// })

//task 6
//Объекты
const person = Object.create({}, {
  name: {
    value: 'Avtandil',
    enumerable: true,
    writable: true
  },
  birthYear: {
    value: 1997,
    enumerable: true
  }

})

person.name = 'Maxim'

for (let key in person) {
  console.log('Key', key, person[key])
}