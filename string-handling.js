// EXERCIES STRING HANDLING

const name = "reacteur";

// let firstLetter = name.slice(0).toUpperCase();

let firstLetterSlice = name.slice(0, 1);

// console.log('firstLetterSlice :', firstLetterSlice);

let firstLetter = firstLetterSlice.toUpperCase();

// console.log('firstLetter :', firstLetter);

let remain = name.slice(1);

// console.log('remain :', remain);

const newName = `${firstLetter}${remain}`;

console.log('newName :', newName);