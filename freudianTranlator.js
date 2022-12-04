/** (1 задача) Заменяет каждое слова данное в consol.log за слово Выходной.*/
// const toFreud = s => !s ? '' : s.split(' ').map(el => 'Выходной').join(' ');
// console.log(toFreud('Учеба я хочу отдохнуть от тебя :)'))

/** (2 задача) https://www.codewars.com/kata/575fa9afee048b293e000287/javascript   */

// function howMuchWater(water, load, clothes){
//   if(clothes > load * 2) return 'Слишком много одежды';
//   else if (load > clothes) return 'Не достаточно одежды';
//   else return +(water * 1.1 ** clothes - load).toFixed(2)
// }
// console.log(howMuchWater(5, 5, 4));

/** (3 задача) Простая функция которая определяет множественное число или нет
 * https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/javascript */

// function plural(n){
//   if(n < 1) return true
//   else if (n === 1) return  false
//   else return true
// }
// console.log(plural(1));

//Короткая версия функции
// function plural2(n){
//   if(n === 1) return false
//   else return true
// }
// console.log(plural2(2))

/**(4 Задача) Написать функцию котоарая будет проверять если два символа
 * которые к нам пришли находятся в том же самом регистре. Это код у меня не сработал
 * https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript */

// const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase()
// const defineCase = s => s === s.toUpperCase() ? 'U' : 'L'
//
// function sameCase(a, b){
//   if(isNotLetter(a) || isNotLetter(b)) return -1
//   return defineCase(a) === defineCase(b) ? 1 : 0
// }
//
// console.log(sameCase(1, 2));

/** (5 задача Создайте несколько функций,
 * которые будут возвращать сумму, разность, модуль,
 * произведение, частное и показатель степени соответственно.)  */

// function add(a,b){
//   return a + b
// }
//
// function divide(a,b){
//   return a / b
// }
//
// function multiply(a,b){
//   return a * b
// }
//
// function mod(a,b){
//   return a % b
// }
//
// function exponent(a,b){
//   return a ** b
// }
//
// function subt(a,b){
//   return a - b
// }
// console.log(add(1, 2))
// console.log(multiply(1, 2))
// console.log(divide(2, 1))
// console.log(mod(1, 2))
// console.log(exponent(1, 2))
console.log(subt(1, 2))
