// const people = [
//   {name: 'Avtandil', age: 12, gender: 'man'},
//   {name: 'Chynara', age: 24, gender: 'woman'},
//   {name: 'Yrysbek', age: 17, gender: 'man'},
//   {name: 'Anara', age: 42, gender: 'woman'}
// ]

// const out = people.map(person => person.age).filter(i => i > 18).reduce((a, b) => a + b )
// console.log(out)


// for (let i = 0; i < people.length; i++){
//   out.push(people[i].gender)
// }
// console.log(out)

// for (let person of people){
//   console.log(person)
// }

//ForEach
// people.forEach(function (person, index, people){
//   console.log(person, index)
// })

//Стрелочная функция
// people.forEach(person => console.log(person))

//map это метод массива которая возврашает массив такой же длинны обработанной функцией
// const newPeople = people.map(person => `${person.name}: ${person.gender}`)
// console.log(newPeople)
// const newPeople = people.map(person => person.age + 3)
// console.log(newPeople)

//Filter
//Старый формат
// const people2 = []
// for(let i = 0; i < people.length; i++){
//   if (people[i].age >= 18){
//     people2.push(people[i])
//   }
// }
// console.log(people2)

//формат filter
//Filter это метод массива которая филтрует элементы которая не соответствует условию
// const people2 = people.filter(person => person.age >= 100)
// console.log(people2[0]?.name)

//Метод Reduce
// const male = people.reduce((a, b) => a * b.age, 1)
// console.log(male)

//Задачи по js номер 1
// function eachCons(array, n) {
//   const r = []
//   for(i = 0; i <= array.length - n; i++){
//     const chunk = []
//     for (let j = i; j < i + n; j++){
//       chunk.push(array[j])
//     }
//     r.push(chunk)
//   }
//   return r
// }
// console.log(eachCons(1, 3))

// let myString = 'Привет, мир. Как дела?';
// let splits = myString.split(' ', 4);
//
// console.log(splits);

// let str = 'lidnavtvA';
// let strReverse = str.split('').reverse().join(''); // 'длорпавыф'
// // split() возвращает массив, к которому применяются методы reverse() и join()
// console.log(strReverse)

// const str = '.ытосарк йотсич йинег каК ,еьнедив еонтеломим каК' +
//   ' ,ыт ьсаливя йонм одереП ,еьневонгм еондуч юнмоп Я'
// const strReverse = str.split('').reverse().join('')
// console.log(strReverse)

// let str = ''
// let a = str.split('', 4)
// console.log(a)
////////////////////////////////////////////////////////////////
// let b = ['h', 'e', 'l', 'l', 'o']
// let c = b.join(' ')
// console.log(c)
// console.log(b)


// function one(){
//   if(one.isRun)
//   console.log('one')
//   this.isRun = true
// }
// one()
// one()
// one()
// document.querySelector('button').addEventListener('click', one)

// let string = '1' + '0'.repeat(100)
console.log(string)