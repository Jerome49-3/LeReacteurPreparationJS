// EXERCICES WHILE FOR v2

const string = "Le Reacteur";

const lastCharacter = string.length - 1;
// console.log('lastCharacter: ', lastCharacter);

let positionFirstChartere = 0;
// console.log('positionFirstChartere: ', positionFirstChartere);

while (positionFirstChartere <= lastCharacter){
    console.log(string[positionFirstChartere].toUpperCase())
    positionFirstChartere++;
}

// string = "Le Reacteur";

for (let i = 0; i <= string.length - 1; i++){
    console.log(string[i].toUpperCase());
}