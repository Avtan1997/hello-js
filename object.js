//task 1 Объекты 08.12.2022

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

//task 15
//Функция Object.keys() возвращает массив собственных
// перечислемых имен свойств данного объекта со строковыми ключами.

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// }
// console.log(Object.keys(object1))

//Функция Object.getOwnPropertyNames() возвращает массив со всеми свойствами
//(независимо от того перечисляемые или нет) найденными непосредственно в переданном объекте.
// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(Object.getOwnPropertyNames(object1))

//Метод Object.getOwnPropertySymbols() возвращает массив
// всех символьных свойств, найденных непосредственно на переданном объекте.
// const object1 = {};
// const a = Symbol('a');
// const b = Symbol.for('b');
//
// object1[a] = 'LocalSymbol';
// object1[b] = 'globalSymbol';
//
// const objectSymbols = Object.getOwnPropertySymbols(object1)
//
// console.log(objectSymbols.length)

//task 16
//Метод Object.assign() используется для копирования значений всех собственных
// перечисляемых свойств из одного или более исходных объектов в целевой объект.
// После копирования он возвращает целевой объект.

//Пример копирование
// const obj1 = { //Это конструкция ссылка внутри значение которые могу поменять
//   category: 'shoes',
//   size: 45,
//   color: 'black'
// }
// const obj2 = Object.assign({}, obj1) //Первый элемент пустой объект{} внутри assign и копирую obj1
// obj2.category = 'dress'
// obj2.size = 52
// obj2.color = 'red'
//
// console.log(obj1)
// console.log(obj2)

//Пример слияние объектов

// const o1 = {avtan: '01.11.1997'}
// const o2 = {chynara: '11.09.1997'}
// const o3 = {yrysbek: '15.07.2005'}
//
// const obj = Object.assign(o1, o2, o3)
// console.log(obj)
// console.log(o1) // Изменился и сам целовой объект

//Пример копирование символьных свойств

// const o1 = {a: 1};
// const o2 = {[Symbol('foo')]: 2};
//
// const obj = Object.assign({}, o1, o2);
// console.log(obj)

//Пример: наследуемые и неперечисляемые свойства не копируются

// const obj = Object.create({foo: 1}, {
//   bar: {
//     value: 2 // bar является неперечисляемым свойством
//   },
//   baz: {
//     value: 3,
//     enumerable: true //baz является собственным перечисляемым свойством.
//   }
// });
//
// const copy = Object.assign({}, obj);
// console.log(copy)

//task 17
//Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.

//Shape - суперкласс
// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }
//
// //Метод суперкласса
// Shape.prototype.move = function (x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Фигура переместилась.');
// };
//
// //Rectangle - подкласс
// function Rectangle() {
//   Shape.call(this); //Вызываю конструктор супер класса
// }
//
//
// // подкласс расширяет суперкласс
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;
//
// const rect = new Rectangle();
//
// console.log('Является ли rect экземпляром Rectangle? ' + (rect instanceof Rectangle)); // true
// console.log('Является ли rect экземпляром Shape? ' + (rect instanceof Shape)); // true
// rect.move(1, 1); // выведет 'Фигура переместилась.'

//task 18
// Перечисление свойств

// let o = {x: 1, y: 2, z: 3}; //Три перечислимых свойства
// o.propertyIsEnumerable('toString') // Не перечислимое (false)
// for (let p in o) { //Проход в цикле по свойствам
//   console.log(p) // Выводится x, y, и z но не toString
// }

//task 19
// Сериализция объекта stringify, parse

// let o = {x: 1, y:{z: [false, null, '']}}; //Определение текстового объекта
//
// let s = JSON.stringify(o); //s == {'x': 1, 'y': {'z':[false, null, '']}}'
// let p = JSON.parse(s); //p == {x: 1, y: {z: 1, y:{z: [false, null, '']}}

//task 20
//Метод toString()

// let s = {x: 1, y: 1}.toString(); // s == [object Object];

// let point = {
//   x: 1,
//   y: 2,
//   toString: function () {return `(${this.x}, ${this.y})`;}
// };
// String(point) //=> '(1, 2)': toString() применяется для преобразованный в строки.

//task 21

//Метод toLocaleString()
//В дополнение к базовому методу toString() все объекты имеют метод toLocaleString()

// let point = {
//   x: 1000,
//   y: 2000,
//   toString: function () {return `(${this.x}, ${this.y})`; },
//   toLocaleString: function (){
//     return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
//   }
// }
// point.toString() //=> '(1000, 2000)'
// point.toLocaleString() //'(1,000, 2,000)': обратите внимние на наличие разделителей тысяч.

//task 22
// Метод valueOf() во многом похож на метод toString().

// let point = {
//   x: 3,
//   y: 4,
//   valueOf: function () {return Math.hypot(this.x, this.y); }
// };
// Number(point) //=> 5:  valueOf() применяется для преобразование
// point > 4 //=> true
// point > 5 //=> false
// point < 6 //=> true

//task 23
//Метод toJSON()

// let point = {
//   x: 1,
//   y: 2,
//   toString: function () {return `(${this.x}, ${this.y})`; },
//   toJSON: function () {return this.toString(); }
// };
// JSON.stringify([point]) // '["(1, 2)"]'

// task 24
//Сокращенная запись свойств

// let x = 1, y = 2
// let o = {
//   x: x,
//   y: y
// };
//
// //Отбрасывю двоеточие и одну копию идентификатора
//
// let x = 1, y = 2;
// let o = {x, y};
// o.x + o.y //=> 3

//Вычисляемые имена свойств

const PROPERTY_NAME = 'p1';
function computePropertyName() {return}


































