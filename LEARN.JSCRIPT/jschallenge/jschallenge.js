  //write code that will return a random leter from your name

const anyName = 'wisdom';

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));


//conditonals: Teenary Operator
//conditionals ? ifTrue : ifFalse;

let soup = "";
let response = soup? "yes, we have soup." : "Sorry, no soup today";
console.log(response);

let testScore = 59;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
:"F";

console.log(`My test grade is a ${myGrade}.`);

