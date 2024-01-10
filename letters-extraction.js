// EXERCIES LETTERS EXTRACTION

const word = 'JavaScript';

let firstLetters = word.slice(0, 1);
let secondLetters = word.slice(4, 5);

const letters = `${firstLetters}${secondLetters}`

console.log( 'letters :', letters)