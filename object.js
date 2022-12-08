//task 1 Объекты
// let empty = {}; //Объект без свойтва
// let point = {x: 0, y: 0}; //С двумя свойства
// let p2 = {x: point.x, y: point.y+1};
// let book = {
//   'main title': 'JavaScript',
//
//   'sub-title':'The Definitive Guide', //Использую строковые литералы.
//
//   for: 'all audiences', //for зарезервированнное слово без кавычек!
//
//   author: { //Значением свойства this является сам объект.
//     firstName: 'David',
//     surName: 'Flanagan'
//   }
// }
// console.log(empty,point, p2, book)

// task 2
// Операция new
// let i = new Object() // Создаю пустой объект: то же что {};
// let l = new Array() //Создает пустой массив: то же что [];
// let d = new Date() //Создает объект Date текушее время!
// let r = new Map() //Создает объект map для отоброжения ключ/значение.
// console.log(i, l, d, r )

//task3
//prototype
// new Object() // Наследует Object.prototype как объект созданный с помощю {}
// new Array() // Наследует прототип Array.prototype
// new Date() // Наследует прототип Date.prototype
// console.log()

//task 4
//Object.create() создает новый объект используя в качестве его прототипа первый аргумент.
// const o1 = Object.create({x: 1, y: 2}); // o1 наследует свойства x и y
// const o2 = o1.x + o1.y
//
// console.log(o2)

//task 5
//Передача null в объект, null ничего не унаследует
// const o4 = Object.create(null); // o2 не наследует ни свойства ни метода.
// console.log(o2)
//
// //Пустой объект
// const o3 = Object.create(Object.prototype); //o3 подобен {} или Object()
// console.log(o3)

//task 6
// Защита с помощю Object.create() от случайной модификации
// const o = {x: 'не изменяйте это значение'};
// library.function(Object.create(o)) // у меня не работает защита. library is not defined
//
// console.log(o)

//task 7
//Запрашивание и устоновка свойств через( . ) точку или [] скобки.
// let author = book.author;//Получаю свойства 'author' объекта book.
// let name = author.surName;//Получить свойство 'surName' объекта author.
// let title = book['main title']; // Получаю свойства 'main title' объекта book
// console.log(author,name,title)

//task 8
//Создание нового свойства в объекте book с помощью ( . ) точки.
// book.edition = 7; // Создать свойство 'edition' объекта book.
// book['main title'] = 'ECMAScript' // Изменил свойство main с помощью []
// book.author.surName2 = 'Avtandil' // Добавил новое имя автора в объект book
// console.log(book)

//task 9
//Объекты как ассоциативный массивы  [] это и есть имя свойства выражает ввиде строки.
// let addr = '';
// for (let i = 0; i < 4; i++){
//   addr += customer[`address${i}`] + '\n'
// }
// console.log(addr)

//task 10
//Наследование
// let o = {}; // o наследует методы объекта от Object.prototype
// o.x = 1; // и теперь имеет сообственное свойство x.
// console.log(o)
//
// let p = Object.create(o); // p наследует свойство от o
// p.y = 2; // Object.prototype имеет собственное свойство y.
// console.log(p)
//
// let q = Object.create(p) //q наследует все свойство выше o и p
// q.z = 3 //Добавил новое свойсвто z
// console.log(q)
//
// let f = q.toString(); //toString наследуется от Object.prototype
// q.x + q.y // 3; x и y наследуется от o и p
// console.log(f)

// Объект от которого будет делатся наследование.
// let unitCircle = {r: 1};
//
// let c = Object.create(unitCircle); // c наследует свойство r
// c.x = 1; c.y = 1; // c определяет два собственных свойства
// c.r = 2; //c переопределяет свое унаследованное свойство
// unitCircle['r'] // 1: прототип не затронут
// console.log(c, unitCircle)

//task 11
//Ошибка доступа к свойствам
// let len = book.subtitle.length //Ошибка undefined не имеет свойства length

// let surName = undefined
// if (book) {
//   if(book.author){
//     surName = book.author.surName
//   }
// }
// console.log(surName)
// surName = book && book.author && book.author.surName
// console.log(surName)
//__________________________________________________
// let surName = book?.author?.surName //Условный доступ к свойствам с помощью (?.)
// console.log(surName)

//task 12
//Удаление свойств
// delete book.author; //Объект book теперь не имеет свойства author
// console.log(book);

// delete book['main title']; //а теперь book не имеет main title
// console.log(book)

//___________________________________________________
// let o = {x: 1}; // o имеет собственное свойство x  и наследует свойство toString()
// console.log(o)
//
// delete o.x // удалил свойство  x (true)
// console.log(o)
//
// delete o.toString() // ничего не делает (true) (toString() не собственное свойство )
// console.log(o)
//
// delete 1 // бессмысленно но в любом случае (true)
// console.log(o)

//task 13
//Проверка свойств метод hasOwnProperty() объекта проверяет имеет ли данный
// объект собственное свойство заданным именнем.

// let o = {x: 1};
// o.hasOwnProperty('x') //o имеет собственное свойство x (true)
// console.log(o.hasOwnProperty('x'))
//
// o.hasOwnProperty('y') // о не имеет свойства y (false)
// console.log(o.hasOwnProperty('y'))
//
// o.hasOwnProperty('toString') // toString - унаследованное свойство
// console.log(o.hasOwnProperty('toString'))

//Метод propertyIsEnumerable() улучшает проверку hasOwnProperty()
//Возрашает true если именнованое свойство является собственным и атрибут enumerable имеет true.

// let o = {x: 1 };
// o.propertyIsEnumerable('x') // o имеет свойстов x (true)
// console.log(o.propertyIsEnumerable('x'))
//
// o.propertyIsEnumerable('toString') // не собственное свойство (false)
// console.log(o.propertyIsEnumerable('toString'))
//
// Object.prototype.propertyIsEnumerable('toString') //Не перечислимое свойство
// console.log(Object.prototype.propertyIsEnumerable('toString'))

//Метод !== для его проверки на предмент undefined

// let o = {x: 1};
// o.x !== undefined // o имеет свойство x (true)
// console.log(o.x !== undefined)
//
// o.y !== undefined // o не имеет свойство y
// console.log(o.y !== undefined)
//
// o.toString() !== undefined // o наследует свойство toString (true)
// console.log(o.toString !== undefined)

//Операция in проводит различие между свойствами которые не существует и существует но
//были установлены в undefined

// let o = {x: undefined}; //Свойство устоновил в undefined
// o.x !== undefined // свойство существует но равно undefined (false)
//
// o.y !== undefined //свойство не существует (false)
// 'x' in o // свойство существует (true)
// 'y' in o // свойство не существует (false)
// delete o.x //свойство x было удалено
// 'x' in o //свойство  x больше не существует(false)
// console.log('x' in o)

//task 14
//Перечисление свойств цикл for/in

// let o = {x: 1, y: 2, z: 3}; // Три перечислимых собственных
// o.propertyIsEnumerable('toString') // не перечислимое (false)
// for (let p in o){ // Проход в цикле по свойствам
//   if(!o.hasOwnProperty(p)) continue; //пропускать унаследованные свойства
//   console.log(p) //Вводится x, y, z, но не toString
// }
// for (let p in o) {
//   if (typeof o [p] === 'function') continue; // пропускать все методы
// }
// console.log(o)
//
























