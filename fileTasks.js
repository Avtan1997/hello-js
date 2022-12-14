//task 1
/**
 * @param {number} num
 * @return {string}
 */
// const intToRoman = function(num) {
//   const map = {
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
// console.log(intToRoman(1999));

//task 2 Найти среднее арифметическое в массиве.
// function getAverage(marks){
//   return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length) //использую встренную функцию reduce
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
//  console.log(reverseSeq(5))

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
// console.log(finalGrade(100, 12), 100);
// console.log(finalGrade(85, 9), 90);





