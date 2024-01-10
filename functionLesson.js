//************ FUNCTION LESSON **************//

//************ SIMPLE FUNCTION **************//

const displayMessage = () => {
    console.log("Hello World");
  };

  displayMessage();


//************ FUNCTION WIDTH ARGUMENTS **************//

// déclaration de la fonction
const multiply = (number) => {
    //*** function multiply avec un argument number qu'on va utiliser */
    const result = number * 10;
    //*** variable result avec comme valeur l'argument number * 10 ***//
    console.log(result);
  };
  
  // appel de la fonction
  multiply(2);
  //***** on appelle la fonction avec une valeur pour l'argument number *****/

  const multiplys = (number) => {
    const result = number * 10;
    console.log(result);
  };
  
  multiplys(3); // affichera 30
  multiplys(10); // affichera 100

  //************ FUNCTION WIDTH MANY ARGUMENTS **************//

  const add = (number1, number2) => {
    const result = number1 + number2;
    console.log(result);
  };
  
  add(1, 5); 