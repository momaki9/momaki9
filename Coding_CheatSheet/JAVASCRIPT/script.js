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
// placing an ! before an expression returns the negative of that expression
console.log(!expression3 && expression2)
console.log(!expression1)

// <!--------------------   FOLDERS 9/10   --------------------!>
// <!----------------   CONDITIONAL STATEMENTS   ------------------!>
// if else logic syntax: if (logic) {then (do something)} else {then (do something else)}

var hungerLevel = 20;
var isLunchTime = true;
var lunchBill = 11;

if (hungerLevel <=50) {
    console.log(`It is time to eat!`)
}
    else{
        console.log(`Lunch time is coming soon!`)
    }

// if else can be nested with another if as shown below
var x = 50;
var expression1 = (x < 25);
var expression2 = (x <= 50);
if (expression1 && expression2) {
    console.log(`True ✅ True ✅`)
}
    else if (!expression1 && !expression2) {
        console.log(`False ❌ False ❌`)
    }
    else if (expression1) {
        console.log(`True ✅ False ❌`)
    }
    else {
        console.log(`False ❌ True ✅`)
    }

// <!--------------------   FOLDERS 11/12   --------------------!>
// <!-----------------------   Arrays   ------------------------!>

// To store groups of data in a single variable, we use arrays
// An array stores multiple data types; brackets are used to include multiple
// each value gets assigned an index value, starting with 0 (0-based index language)

var familyMembers = ["Vanessa", "Mostafa", "Tariq", "Layla"]
// The entire array can be accessed by using the array's name 
//this lists all values in the array on one line
console.log(familyMembers);
//this logs a single element
console.log(familyMembers[2]);
//we can use the index to replace data in the array as such:
familyMembers[1] = "Dad"
console.log(familyMembers)
// use var.length to log the number of entries in the array
console.log(familyMembers.length)
//syntax from the net to console log each value in the array
familyMembers.forEach(familyMembers => console.log(`${familyMembers} is a member of the Maki Family!`))
//if else statements can be used
if (familyMembers[1] === "Dad") {
    console.log(`${familyMembers[1]} is the head of the household!`)
}
else {
    console.log(`What is a Maki anyway?`)
}

// <!--------------------   FOLDERS 13/14   --------------------!>
// <!---------------------   Iterations   ----------------------!>

// We use a for-loop to execute code more than once
//Helps to excute a block of code more than once >>> sample for-loop
//iterator + conditional statement if evalautes to true then execute the code otherwise exit the loop, i++ means to increment untill we reach the end

for (var i = 0; i < 5; i++) {
    console.log(`This is the current value of i: ${i}.`)
}
//this also applies to data inside an array; it is best to use .length
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];
for (var i = 0; i < zooAnimals.length; i++) {
    console.log(`I am going to see ${zooAnimals[i]}`);
}
// since the array length's = 4, it is the same as saying i < 4

// <!--------------------   FOLDERS 15/16   --------------------!>
// <!----------------------   Functions   ----------------------!>

// Functions are reusable blocks of code that perform a specific task
// This is a function declaration: function declareHello( parameters ) {logic i.e. code we want to execute} return stops the execution

function declareHello() {
    console.log(`Hello, I am a function declaration!`)
    console.log(`---------`)
}

// This is a function expression
var expressHello = function() {
    console.log("Hello, I am a function expression");
    console.log('-----------')
    return;
}

//difference between function expression and declaration --> deals with how js loads into the browser
// -----------IMPORTANT
// Functions must be called to execute
declareHello();
expressHello();

//Functions can be called again to make the block of code execute again
//if you wanted to execute something many times, write a function once and call on it whenever needed
declareHello();
expressHello();
declareHello();
expressHello();

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) {
    x = 22
    console.log(`Hello, my parameter values are ${x}, ${y}, ${z}`)
}


// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true)
//since in the function above x is defined as 22, 22 is returned not 7

//function declaration is run at compile time
//we can call it any place, unlike function expressions

// <!--------------------   FOLDERS 17/18   --------------------!>
// <!----------------------   Scope   ----------------------!>

// A variable declared in global scope (OUTSIDE of function) is available to all functions
var hello = "Hello";

//A variable declared in local scope (INSIDE of function) is only available to that function
function sayHello() {
    console.log(hello);
    return;
}

var sayHelloAgain = function(){
    console.log(hello);
    return;
}

sayHello();
//This will throw an error
//inline variables are only available inside or in the context of the function
function sayGoodbye() {
    var goodbye = "Bye!"
    console.log(goodbye);
    return;
}

// console.log(goodbye);


// Shadowing happens when the same variable is used in the local and global scope
// bad practice; won't throw an error
//it is NOT shadowing when two variables are declared at the local level

var shadow = "Hello";

function sayWhat(){
    console.log(shadow);
    return;
}

var sayWhatAgain = function() {
    var shadow = "Goodbye!!!"
    console.log(shadow);
}

sayWhat();
sayWhatAgain();











