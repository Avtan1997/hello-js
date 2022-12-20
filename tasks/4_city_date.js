/// Дан словарь из городов и дат выступлений Кайрата Кыргыза
/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Токтогул", "Каракол", "Ош"]

const concerts = {
  'Талас': new Date('2020-04-01'),
  'Токтогул': new Date('2023-07-02'),
  'Жалал-абад': new Date('2022-04-21'),
  'Ош': new Date('2023-07-15'),
  'Бишкек': new Date('2022-04-18'),
  'Каракол': new Date('2023-07-10'),
}

function concertsToArray(concerts) {
  return Object.keys(concerts)
    .filter(city => concerts[city] > new Date())
    .sort((a, b) =>  concerts[a] - concerts[b])

}

console.log(concertsToArray(concerts));