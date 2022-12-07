// const name = 'Chynara'
// const city = 'Bishkek'
// const greeting = `My name is ${name} and i live in the city ${city}`
//
// console.log(greeting)

//=======================
// function multByFactor(value, multiplier = 1) {
//   return value * multiplier
// }
//
// console.log(multByFactor(10, 2));
// console.log(multByFactor(10));

// const multByFactor = (value, multiplier = 1) => value * multiplier
// console.log(multByFactor(12,3))


// if (n === 1)
//   console.log("Вы получили 1 новое сообщение.”);
// else
//   console.log(`Вы получили ${n} новых сообщений.`);

// let len = book.subtitle.length; // ITypeError: undefined не имеет

// let s = { x: 1, у: 1 }.toString(); // s == "[object Object]"
// console.log(s)


// let o = {х : 1, у: 2, z : 3, toString: () => `Hello`};// Три перечислимых собственных свойства
// o.propertyIsEnumerable("toString")
// // console.log(Object.keys(o))
// // console.log(o)
//   o.propertyIsEnumerable("toString")// => false: не перечислимое
// for (let p in o) { // Проход в цикле по свойствам
// // console.log(p);
// }
// console.log(o.toString());

const avtan = {
  _age: 25,
  get age() {return this._age},
  set age(value) {this._age = value}
}
avtan.age = 65
console.log(avtan.age)



