// EXERCICES CHECK  ELEMENTS ARRAY

// const array = [10, 20, 30, 40, 50, 60];

// let foundFirstElmt = array.indexOf(20);
// console.log('foundFirstElmt:', foundFirstElmt);
// let foundSecondElmt = array.indexOf(70);
// console.log('foundSecondElmt:', foundSecondElmt);

// if (foundFirstElmt===true){
//     console.log('The element to check is in the array')
// } else {
//     console.log('The element to check is NOT in the array')
// }

// if (foundSecondElmt===true){
//     console.log('The element to check is in the array')
// } else {
//     console.log('The element to check is NOT in the array')
// }

//****************** CORRECTIONS *************************//

const array = [10, 20, 30, 40, 50, 60];

console.log(array.indexOf(10)); //0
console.log(array.indexOf(20)); //1
console.log(array.indexOf(70)); //-1

if (array.indexOf(20) !== -1){
    console.log('The element to check is in the array')
}else {
    console.log('The element to check is NOT in the array')
}