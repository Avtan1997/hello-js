// //task 1 создание конструкций
// function User(){
//   //конструктор
// }
// User.prototype.method = function (){
//   //метод
// };
// Код сверху тот же самый написанный с помощю классов.
// class User {
//   constructor() {
//     method(){}
//   }
// };

//стрелочные функции или callback функции
// console.log([1, 2, 3].map(v => v * 2));

//Node обычно используется два аргумента потому что первым аргументом функции обратного вызова
//часто является объект ошибка в этом случае аргументы должны заключатся в круглые скобки.
// const fs = require('fs');
// fs.readFile('package.json',
//   (err, text) => console.log('Length:', text.length))

//Скрытая ошибка.
// function User(id){
//   //Конструктор
//   this.id = id
// }
//
// User.prototype.load = function (){
//   const self = this;
//   const query = 'SELECT * FROM users WHERY id = ?';
//   sql.query(query, this.id, function (err, users){
//     self.name = users[0].name //не возможно использовать this.name(this внутри функции будет глобальным)
//   })
// };

//task 2 Использование базовых модулей и потоков.

// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip()
// const outStream = fs.createWriteStream('output.js.gz');
//
// fs.createReadStream('./node-stream.js')
//   .pipe(gzip)
//   .pipe(outStream);

//task 3 Сетевые операции
//Программа <Hello World> с использованием модуля http для Node. Построил сервер.
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.end('Hello, world.');
});

server.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port)
});

//task 4 Отладчик
//Чтобы запустить программу в отладчике укажите аргумент debug в командной строке.

