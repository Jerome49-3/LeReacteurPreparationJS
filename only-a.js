// EXERCICES WHILE FOR v2

// const language = "javascript";

// const lastCharacter = language.length - 1;
// let number = 0;

// const foundCharacter = language.indexOf('a')
// console.log('foundCharacter: ', foundCharacter);

// while (number <= lastCharacter) {
//    if(foundCharacter === 'a')
//     console.log(language[[foundCharacter]])
//     number++;
// }

//***************************************/
//************ CORRECTIONS **************/
//***************************************/

const language = "javascript";

let number = 0;

while (number <= language.length - 1) {
  if (language[number] === "a") {
    console.log(language[number]);
  }
  number++;
}


for (let i = 0; i <= language.length - 1; i++) {
  if (language[i] === "a") {
    console.log(language[i]);
  }
}