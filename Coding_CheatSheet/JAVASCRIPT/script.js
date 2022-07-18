//Linking JS in HTML >>>>>>>
// just above the closing body tag add "<script src="script.js"> </script>"

//This console log command prints "Hello!" 
console.log("Hello!")

//this is how variables are declared
var personName = "Smelly Mostafa";
var age = 32;

//variables can be reassigned
age = 21;
//test
console.log(age);
//as shown above, console log can spits out the contents of the variable; text could also be added>>>>>
//syntax 1
console.log("My name is " + personName)
//syntax 2 (better)
console.log(`My name is ${personName} and I am ${age} years old!`)

//this command shows the type of variable that is stored
console.log(typeof age);
console.log(typeof personName);
//there are other data types: boolean (true or false), undefined (nothing assigned)

//console log can be used for arithmetic operations
var a = 50;
var b = 20;
var c = "20";
var d = "Hi!";
//addition, subtraction, multiplication, and division
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// % symbol is called Modulus and returns the remainder (after *LONG* division) between 2 numbers; if using a calculator, multiply remainder after decimal by the divisor
console.log(a % b)

//comparisons
// == equal   != not equal (VALUE ONLY)
// === equal  !== not equal (VALUE AND DATA TYPE)
// > greater than   < less than
// >= greater or equal to    <= less or equal to
// examples
console.log(b == c);
console.log(b === c);
console.log(b <= a)

//AND (&&) OR (||) Comparisons
// AND (&&) returns TRUE if BOTH arguments are TRUE
// OR (||) returns TRUE if EITHER argument is TRUE
var expression1 = (a >= b);
var expression2 = (a !== c);
var expression3 = (a === c);
console.log(expression1 && expression2)
console.log(expression3 && expression2)
console.log(expression3 || expression2)







