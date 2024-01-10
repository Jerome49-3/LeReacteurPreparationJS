// EXERCICES ARRAY HANDLING v1

const colors = [
    "grey", 
    "purple", 
    "yellow", 
    "orange", 
    "red", 
    "blue"
];

const suppFirstElmt = colors.shift();

console.log('choiceElmt1: ', suppFirstElmt);

const addFirstElmt = colors.unshift("pink");

console.log('addElmt1: ', addFirstElmt);

const suppLastElmt = colors.pop();

console.log('suppLastElmt: ', suppLastElmt);

const addLastElmt = colors.push("black");

console.log('colors: ', colors);