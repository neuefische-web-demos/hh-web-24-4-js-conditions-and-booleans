let apples = 2;
console.log(apples);
const youHelpMeCleaningTheKitchen = false;
const cleanedRoom = true;
const behavingBadly = false;
// true for yes, false for no
// && -> AND condition
// AND is true, only and only if all values compared are true
if (youHelpMeCleaningTheKitchen && cleanedRoom && !behavingBadly) {
// ! -> NOT operator, not changes false into true, and true into false
  apples = apples + 3;
  console.log("Everything cleaned and child is nice");
} else if (youHelpMeCleaningTheKitchen || cleanedRoom) {
  // || -> OR, true if at least one of the conditions is true
  apples = apples + 2;
  console.log("Something cleaned");
if(!behavingBadly) {apples = apples + 1; console.log("Child is well behaved");} else { apples = apples - 1;console.log("Being lazy"); }

apples = youHelpMeCleaningTheKitchen && cleanedRoom && !behavingBadly ? apples + 3 : apples - 1;

// if () {
//   apples = apples + 1;
//   console.log("Room cleaned");

console.log(apples);

console.log("Value !!true is: ", !!true);


let apples = 2;
console.log(apples);
const youHelpMeCleaningTheKitchen = true;
const platesCleaned = -1;

// if(youHelpMeCleaningTheKitchen == true) {
//   apples = apples + 2;
// } else {
//   apples = apples - 1;
// }
// ternary operator
// condition ? value if true : value if false
// apples = youHelpMeCleaningTheKitchen ? apples + 2 : apples - 1;

if(platesCleaned) {
  console.log("plates cleaned, extra apple");
  apples = apples + 1;
}

// apples = platesCleaned > 3 ? apples + 1 : apples;

// == vs ===
// == -> values are equal, comparision by equal value
// === -> values are equal and same type, identical comparison

let integerVal = 4; // full number
let floatVal = 3.14; // decimal number
let yes = true; // boolean value

console.log("final apples", apples);

let text = "hello world";
let position = text.indexOf("cat");
console.log(position);

// == -> equal
// != -> not equal
// === -> identical, both equal and same type
// !== -> not identical
if(position != -1) {
  console.log("word found");
} else {
  console.log("word not found");
}

// !!value -> converts the value into a boolean(true/false)
console.log(!!0, !!4, !!-1, !!"0", !!"a", !!undefined, !!null, !!"");

console.log("================================")
// equal?
console.log(1 == true);
console.log('not not 1', !!1);
console.log(!!1 === true)

// identical?
console.log(1 === true);

// if(false) <-- forever false
// if(!false) <--- forever true

console.log("truthy numbers", !!1, !!-1, !!0, !!-0);
console.log("truthy strings", !!"hello", !!"");
console.log(true);

console.log(1+"1");
console.log(1-"1");
console.log("a"+"b");

let number = 5;

if(number <= 3 || number >= 7){
  console.log(number, "smaller or equal to 3 or greater or equal to 7");
} else {
  console.log("doesnt match the criteria");
}