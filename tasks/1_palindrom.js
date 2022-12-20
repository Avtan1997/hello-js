//task 1
//azzizza - true
// avtandil - false
//aZaaA = true

function palindrom(word) {
  word = word.toLowerCase(); // привожу строку к нижнему регистру
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrom('aZaaz!A'))
