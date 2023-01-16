//task 1
//Литералы типа массивов
// let empty = []; //Массив без элементов
// let primes = [2, 3, 5, 7, 11]; //Массив с пятью числовыми элементами
// let misk = [1.1, true, 'a',]; //Три элмента различных типов плюс хвостовая запятая

// Могут быть произвольными выражениями
// let base = 1024;
// let table = [base, base+1, base+2, base+3];
// console.log(table)

//Массив может содержать объектные литералы или другие литералы типа массивов
// let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]]
// console.log(b)

//Разреженный массив с помощью запятых
// let count = [1, ,3]; //Элементы находятся по индексам 0 и 2 по индексу 1 элемента нет
//
// let  undefs = [,,]; //Массив не содержит элементов но имеет длинну в 2
// console.log(undefs)

//task 2
//Операция распространения (...) три точки

// const a = [1, 2, 3];
// const b = [0, ...a, 4]; //b == [0, 1, 2, 3, 4]
// console.log(b)

//Создания не глубокой копии массива.

// const original = [1, 2, 3];
// const copy = [...original]
// copy[0] = 0 //Модификация копии не приводоит к измененею оригинала.
// console.log(original[0]);

//Строки превращаются в массив односимольных строк

// let digits = [...'0123456789ABCDEF']; //строки итерируемые поэтому вы можете применять операцию ... для преврашения
// //любой строки в массив односимвольных строк.
// console.log(digits);

//Объекты множества Set итерируемые
// let letters = [...'hello world'];
// console.log([...new Set(letters)]);

//task 3
//Конструктор Array() можно вызывать тремя путями.

// 1 путь Вызов без агрумента типа такая []
// let a = new Array();//Вызов без агрумента типа такая []
// console.log(a)

//2 путь Вызов с одиночным числовым аргументом который указывает длинну.
// let b = new Array(10)
// console.log(b)

//3 путь Явное указание двух и более элементов массива или одиночного нечислового элмента.
// let a = new Array(5, 4, 3, 2, 1, 'testing');
// console.log(a)

//Создание массива
// const fruits = ['Яблоко', 'Банан'];
//
// // console.log(fruits.length)
//
// //Доступ к элементу массива по индексу
// const first = fruits[0]
// // console.log(first)
//
// const last = fruits[fruits.length - 1]
// // console.log(last)

//Итерирование по массиву
// fruits.forEach(function (item,index,array){
//   console.log(item,index, array)
// })

//Добавление элемента в конец массива
// const newLength = fruits.push('Апельсин')
// // console.log(newLength);
//
// //Удаление последного элемента массива
// const last2 = fruits.pop(); // Удалим апельсин (из конца)
// // console.log(fruits)
//
// //Удаление первого элмента массива
// const first2 = fruits.shift(); //Удалим яблоко (из начала)
// // console.log(fruits)
//
// //Добавление элемента в начло массива
// const newLength2 = fruits.unshift('Клубника') // Добавляет в начало.
// console.log(fruits)
//
// //Поиск номера элемента в массиве
// fruits.push('Манго') //[ 'Клубника', 'Банан', 'Манго' ]
//
// const pos = fruits.indexOf('Банан')
// console.log(fruits)

//task 4
//Array.of() метод создает новый экземпляр массива Array() из произвольного числа аргументов,
//вне зависимости от числа или типа аргумента.

// console.log(Array.of(7).length); // создал только одну ячейку 7
// console.log(Array.of(1, 2, 3).length); // создал три слота 3
//
// Array(7) //массиов с 7 пустыми слотами
// console.log(Array(1, 2, 3));

// Array.of() // При вызове без аргументов возвращает пустой массив.
// Array.of(10) //При вызове единственный числовым аргументом способна создавать массивы

//task 5
// Array.from() метод создает новый экземпляр Array из массивоподобного или итерируемого объекта.
// console.log(Array.from('foo')); // ожидаемый результат массива [ 'f', 'o', 'o' ]
//
// console.log(Array.from([1, 2, 3], x => x + x))

// const array = Array.from('123', x => parseInt(x))//конвертор строкого типа в числовой
// console.dir(array)

// const names = ['Avtan', 'Chynara', 'Beka']
// const copy = Array.from(names) //копирую оригинал с методом array
// console.log(copy)
// console.log(names)

//task 6
// Чтение и запись элементов массива

// let a = ['World']; //Начать с одноэлементного массива
// let value = a[0];//Прочитать элемент 0
// a[1] = 3.14; //Записать элемент 1
// let i = 2;
// a[i] = 3; //Записать элемент 2
// a[i + 1] = 'hello' // Записать элемент 3
// a[a[i]] = a[0] //Прочитать элементы 0 и 2, записать элемент 3
// console.log(a.length);
//
// console.log(a)

//____________________________________________________
// let o = {}; // создать простой объект
// o[1] = 'one'; //индексировать его с помощью целого числа
// console.log(o['1']); //числовые и строковые имена сврйств считаются одинаковыми.

// let a = [true, false]; //Этот массив содержит элементы по индексам 0 и 1.
// console.log(a)
// console.log(a[2]); // undefined элемент по этому индексу отсутствует
// console.log(a[-1]); // undefined свойство таким именем не существует

//task 7
// Разреженные массивы.

// let a = new Array(5) //Элементы отсутствуют но a.length равно 5.
// console.log(a.length)
//
// a = [] // Создает пустой массив без элементов и length = 0
// console.log(a.length)
//
// a[1000] = 0 //Присваивание добовляет один элемент, но устоновливает length в 1001
// console.log(a.length)

//___________________________________________________
// let a1 = [,]; //Этот массив не содержит элементов и значение length равно 1
// console.log(a1.length)
//
// let a2 = [undefined]; //Этот массив имеет один элемент undefined
//
// console.log(0 in a1); //false: a1 не содержит элемента по индексу 0
//
// console.log(0 in a2); //true: a2 имеет значение undefined по индексу 0.

//task 8
//Длина массива

// console.log([].length); //0: массив не содержит элементов.
// console.log(['a', 'b', 'c'].length); //3: самый высокий индекс равен 2, значение length равен 3.
//__________________________________________________________

// a = [1, 2, 3, 4, 5]; // Начать с пятиэлементного массива.
// console.log(a.length = 3); // а теперь [1, 2, 3]
// console.log(a.length = 0); // удалить все элементы. a становится []
// console.log(a.length = 5); // длина равна 5, но элементы отсутствуют подобно new Array(5)

//task 9
//Добавление и удаление элементов массива
// const a = []; //Начать с пустого массива
// a[0] = 'zero';
// console.log(a)
// a[1] = 'one'
// console.log(a)

//Метод push() для добавление одного и более значений в конце массива
// let a = []; //Начать с упстого массива
// a.push('zero'); //Добавить значение в конец. a = ['zero']
// a.push('one', 'two'); //Добавить еще два значения.
// // a.pop() //удаляет последний элменет  в массиве противоположность методу push()
// a.unshift(); // для вставки значение в начало массива.
// console.log(a)

//Delete для удаление элементов массива как и в объектах в точности.
// let a = [1, 2, 3];
// delete a[2] // теперь a не имеет элента по индексу 2.
// console.log(2 in a); //false индекс 2 в массиве неопределен
// console.log(a.length); //Длина массива 3 Delete не влияет на длинну массива если даже удалил
// console.log(a)

//task 10
//Итерация по массивам.
//for/of цикл примение.
// let letters = [...'Hello World']; // Массив букв
// let string = '';
// for (let letter of letters){
//   string += letter;
// }
// console.log(string); //Повторно собрал первоначальный текст.

//Метод entries()
// let everyother = '';
// for(let [index, letter] of letters.entries()) {
//   if (index % 2 === 0) everyother += letter; //буквы по четным индексам.
// }
// console.log(everyother); //HloWrd

//Метод forEach()
// let upperCase = '';
// letters.forEach(letter => { //Обратите внимание на синтаксис стрелочной функции.
//   upperCase += letter.toUpperCase()
// });
// console.log(upperCase); //HELLO WORLD

//____________________________________
// let vowels = '';
// for (let i = 0; i < letters.length; i++) { //Для каждого индекса в массиве
//   let letter = letters[i]; //Получить элемент по этому индексу
//   if (/[aeiou]/.test(letter)) { //использвать проверку с регуляерным выражением.
//     vowels += letter; //Если гласная буква то запомнить ее.
//   }
// }
// console.log(vowels); //eoo

//________________________________
//Сохранить длину массива в локальной переменной.
// for (let i = 0; len = letters.length; i < len; i++) {
//   //Тело цикла остается прежним
// }
// //Итерация в обратном порядке направление с конца до начала массива
// for(let i = letters.length -1; i >= 0; i--) {
//   //тело цикла остается прежним
// }

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === undefined) continue; //Пропускать не определенные и несуществующие элементы.
//   //тело цикла
// }

//task 11
//Многомерные массивы.
//Создаю многомерный массив.
// let table = new Array(10) //10 строк таблицы
// for (let i = 0; i < table.length; i++) {
//   table[i] = new Array(10); //каждая строка имеет по 10 столбцов.
// }
// //Иницилизировать массив.
// for (let row = 0; row < table.length; row++) {
//   for (let col = 0; col < table[row].length; col++) {
//     table[row] [col] = row * col
//   }
// }
// //Использовать многомерный массив для вычисления 5 * 7
// console.log(table[5] [7]); //35
//__________________________________________________
//Одномерные массивы
// const arr = [5, true, 'stroka', 5.6, 0, -100]; //пустой массив без элементов
// arr[3] = 'word'
// console.log(arr.length);
//
// //многомерные массивы
// const matrix = [
//   [4, 5, 6],
//   ['stroka', 5.6],
//   [0, -100]
// ];
// matrix[1] [0] = 90;
// matrix[2] [1] = 'Avtan'
// console.log(matrix)

//task 12
//forEach() метод
// let data = [1, 2, 3, 4, 5], sum = 0;
//Вычислить сумму элементов массива.
// data.forEach(function (v, i, a ){
//   a[i] = v + 1
// })
// console.log(a[i] = v + 1)

//map() метод
// let a = [1, 2, 3];
// console.log(a.map(x => x * x)); //[ 1, 4, 9 ]: принимает на входе x и возвращает x*x

//Метод filter()

// function multiply(num1,num2) {
//   const result = num1 + num2;
//   return result
// }
//
// console.log(multiply(1995, 2));








