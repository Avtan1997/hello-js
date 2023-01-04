//task 1
//azzizza - true
// avtandil - false
//aZaaA = true

// function palindrom(word) {
//   word = word.toLowerCase(); // привожу строку к нижнему регистру
//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] !== word[word.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrom('aZaazA'))

function palidrom2(str) {
  if (!str){
    throw new Error('Err')
  }
  const old = str.toLowerCase()
  // return str.toLowerCase().split('').reverse().join('') === old
  return [...str.toLowerCase()].reverse().join('') === str.toLowerCase()

}
console.log(palidrom2('azzizzad'))
console.log([...'hello'])
{
  const name = 'Avtan'
}
console.log(palidrom2())


