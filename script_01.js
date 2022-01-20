
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c  
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart                    
3. Fkt. Grundrechenarten                check
4. Ausgabe in Konsole                   ckeck
*/

// modul: calculus | test:
// agreement : "+","-","*","/"
output(calculator(2,2,"+"));
output(calculator(2,2,"-"));
output(calculator(2,2,"*"));
output(calculator(2,2,":"));
output(calculator(2,0,":"));
output(calculator(2,0,"#!"));

function calculator(a,b,op) {
    switch (op) {
        case "+":                       // addition
            return add(a,b);
        case "-":                       // subtraction
            return subtraction(a,b);
        case "*":                       // multiplication
            return multiply(a,b);
        case ":":                       // division
            return divide(a,b);
        default:
            return "Something went wrong!"
    }
}

// modul division a / b | test:
// output(divide(10,2));
// output(divide(5,5));
// output(divide(0,2));
// output(divide(2,0));              
function divide(a,b){
    
    if (b==0) {
        return("Division durch 0 ist nicht möglich!");
    } else {
        return a/b;
    }
}
// modul multiplikation a * b | test:
// output(multiply(6,3));
// output(multiply(3,3));
// output(multiply(-3,3));
//output(multiply(3,0));
function multiply(a,b) {
    return a * b;
    
}
// modul subtraction a - b | test:
// output(subtraction(5,3));
// output(subtraction(3,5));
function subtraction(a,b) {
    return a - b;
    
}
// modul: addition a + b | test:
// output(add(2,3));
// output(add(2,-2));
// output(add(2.4,2.1));          
function add(a,b) {
        return a + b;
}
// modul: console output | test:
function output(outputData) { 
    if (typeof outputData == "number") {
        console.log("Das Ergebnis ist: "+ outputData);        
    } else {
        console.log("ERROR: " + outputData);
    }              
   
}



















/*** Späßle *****/

/*
 Heute bleibt die Küche kalt ...
 wir gehen in den Wienerwald. 
*/


//  servieren(anrichten(gemuesekoch(),saucenkoch()));

// function servieren(teller) {
//     console.log("Einmal einen " + teller +  ", Bitte sehr!")
// }

// function anrichten(kartoffeln,soße) {
//     return "Teller mit: "+ kartoffeln + " " + soße;
// }

// function gemuesekoch(){
//     return "gekochte Kartoffeln";
//  }
 
//  function saucenkoch() {
//      return "lecker Sauce";
//  }
 