//***************************************************//
//***************** LOOP LESSON v2 ******************//
//***************************************************//

const string = "Le Reacteur";

const lastCharacter = string.length - 1; // 10

//stocke la valeur du dernier charactère ici 10

let position = 0;

// on crée une variable avec le premier charactère

while (position <= lastCharacter) {
    //tant que position n'a pas dépassé le dernier charactère
  console.log(string[position]);
  //on affiche à chaque tour une lettre de la variable string
  position++;
  // on incremente la variable position afin d'afficher les lettres une à une
}

string = "Le Reacteur";

for (let i = 0; i <= string.length - 1; i++) {
    //******** on déclare un compteur la variable i=0 ********/
    //**** lorsque i atteint string.length -1 c'est le dernier tout de la boucle */
    //***incrementation de i à chaque tour i++ */
  console.log(string[i]);
  //***on affiche un charactère à chaque tour, le compteur change à chaque tour ***//
  //***donc on affiche toutes les lettres une à une */
}