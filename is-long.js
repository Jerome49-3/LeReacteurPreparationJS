//************ FIRST EXERCICE FUNCTION **************//

const isLong = (string) => {
    let result = string.length>=6
    if(result){
        console.log("it's a long string")
    }else{
        console.log("it's not a long string")
    }
};

// isLong("JavaScript");
isLong("code");