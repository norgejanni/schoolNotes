/* Last ned extension i VSCode som heter "Code Runner"
Trykk ctrl + alt + n for å kjøre koden */

// -------- Variabler ---------

/* Variabler skrives som "var", "let" og "const".
"Var" brukes i all hovedsak dersom koden skal fungere i eldre nettlesere */

const variabel1 = "Dette er en variabel";

let variabel2 = "Dette er også en variabel";

/* Som en hovedregel: bruk "const"
Bruk kun "let" dersom variabelen blir å endre seg i fremtiden */

/* I eksemplet under bruker vi "let" variabel for "total", 
da gjør vi det mulig å endre tallet på et senere tidspunkt */

const tall1 = 5;
const tall2 = 7;

let total = tall1 + tall2;

/* For at vi skal kunne se hva koden gjør, er vi nødt til å bruke console.log. 
Skriv console.log, deretter sett inn det du vil skal vises i output i parentesen slik som eksemplet under
Trykk deretter ctrl + alt + n */

console.log(total);


// -------- Funksjoner ---------

/* En funksjon kan gjenbrukes flere ganer i koden. 

I eksemplet under lager vi en funksjon som skal konvertere fahrenheit til celsius*/ 

/* Først skriver vi "function", deretter må vi gi et navn til funksjonen */
/* "Return" gir oss verdiene i funksjonen når vi kjører koden.*/


// Metode 1
// I denne metoden lagrer vi verdiene i en variabel før de returneres 
function toCelsius(fahrenheit) {
    const temp = (5/9) * (fahrenheit-32);
    return temp;
}
console.log(toCelsius(26));

// Metode 2
// I denne metoden dropper vi variabelen. I stedet skriver vi inn verdiene etter "return"
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  console.log(toCelsius(43));

/* I de to metodene ovenfor vil funksjonen gjøre akkurat det samme, så her kan man velge hvordan man vil skrive funksjonen. 
   Metode 2 er derimot raskere å skrive og mer kompakt enn metode 1. */


// Funksjon for utregning 

// Med lokale variabler
function totalSum() {
  const tall1 = 35;
  const tall2 = 885;

  return tall1 + tall2;
}

console.log(totalSum())


// Uten lokale variabler

function totalSum1(tall1, tall2) {

    return tall1 + tall2;
}

console.log(totalSum1(34, 23))


// -------- Arrays ---------

/* Arrays er lurt å bruke dersom man har en liste over mange ting. */ 

// Her har vi en tom array. Vi kjenner igjen en array ved bruken av [].
const array = [];

// Her har vi en array med informasjon
const arrayCars = ["Saab", "Volvo", "BMW"];

console.log(arrayCars);


// Endre et element i en array
arrayCars[2] = "Volkswagen";

console.log(arrayCars);


// Sjekke lengden på array 
const arrayCars = ["Saab", "Volvo", "BMW"];
let carsLength = arrayCars.length;

// Her må vi skrive carsLength i console.log 
console.log(carsLength);


// Legge til et element i en array
const frukt = ["Eple", "Banan", "Pære"];
frukt.push("Tomat");

console.log(frukt);

// Dersom vi skal slette noe fra en array, så kan vi bruke "delete"
// Delete levner "undefined" hull i en array. Det er best å bruke pop, shift og splice.

// "Pop" fjerner det siste elementet i en array. 
const frukt = ["Eple", "Banan", "Pære"];
frukt.pop();

console.log(frukt);

// "Shift" fjerner det første elementet og "shifter" all andre elementer én index ned
const frukt = ["Eple", "Banan", "Pære"];
frukt.shift();

console.log(frukt);

// "Splice" 
const frukt = ["Eple", "Banan", "pære", "Melon"];
frukt.splice(2, 1);

console.log(frukt);


// ------- JSON (Javascript Object Notation) ------------

/* JSON er et format for å lagre og sende data. Det brukes oftest når man skal sende
   data fra en server til en nettside */

// JSON eksempel

{
  "lærere":[
    {"fornavn":"Cecilie", "etternavn":"Hansen"}
    {"fornavn":"Tormod", "etternavn":"Brovoll"}
  ]
};

/* JSON data er skrevet som par av navn og verdi (key/value). 
    "navn":"verdi" 
  JSON navn (key) må alltid skrives med dobbel anførselstegn "". 
  Det samme gjelder string verdier. Til sammenligning, i Javascript kan man skrive string verdier både med enkel og dobbel anførselstegn. */


let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text)

console.log(obj.employees[1].firstName);
console.log(obj.employees[0].firstName);
console.log(obj.employees[2].firstName);








