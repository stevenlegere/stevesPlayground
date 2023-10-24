
console.log("This is my JS testing file");

// Statements are composed of values, operators, expressions, keywords, comments //
// The variable (var, let, const) is the statement //

// Statement example //
let f, h, k; // statement 1 //
f = 1; // statement 2 //
h = 2; // statement 3 //
k = 3; // statement 4 //



// Practicing with Variables. A Variable is a container for storing data //
// The variable STORES the data //
// Var //
var x = 51;
var y = 20;
var z = x + y;
var q = 1000000;

// let //
let a = 10;

// Also works without declaring variable //
c = 3;

// Always declare variables using const. Unless you think the variable might change use let //
const price1 = 10;
const price2 = 20;
let total = price1 + price2;

let g = y;

// Identifiers //
// All JS variables are identified with unique names //
// These unique names are called identifiers //
// e.g x, y, age, sum, total, myCarColour //

// Text values are called strings 'pink' //
// Data types inc. numbers 10 and strings 'pink' //
const myCarColour = 'pink'

// Decralring //
// Creating a variable is called declaring a variable //
// "" '' `` //
var carName = 'Volvo'
let carName2 = "Skoda"
const carName3 = `Saab`

// Good programming practice to declare all variables at the beginning of a script //

// Declaring muliple variables in a single statement //
function superHuman() {
    let superWomanIs = {
        character: "Super Woman",
        SuperPower: "fly",
        WhereToo: "around the world",
        HowOld: 26
    };
    return superWomanIs;
};
const superWomanIsSuper = superHuman();
console.log(superWomanIsSuper.charector, superWomanIsSuper.SuperPower);

// Adding strings //
let superWoman = "Super" + " " + "Woman";
console.log(superWoman,);

let b = "6" + 2 + 2; //622//
// If you put a number in quotes the rest will be treated as string //
let d = 2 + 3 + "4"; //54//

let myAge = 41 + 1 + " years old";
console.log(myAge);
// Here I added one year to my age //

// Conditional statements //
// If is a conditional statement //
// if(codition) {
// code block //} 

if (x > 50) {
    console.log("Yes it is greater than 50");
}

let w = 49;
if (w < 50) {
    console.log("Yes it is lower than 50");
}

const hour = 17;
if (hour < 18) {
    console.log("good day");
}

let isRaining = "false";
// variable using a boolean expression //
// boolean is a true or false value //
if (isRaining === "true") {
    console.log("Pack your umbrella");
}
// if statement with a boolean expression value //

if (isRaining === "false") {
    console.log("Wear your shorts");
}

if (isRaining === "true") {
    console.log("Take your umbrella");
} else {
    console.log("Wear your favourite T");
}

if (hour > 17) {
    console.log("good day");
} else {
    console.log("good evening");
}
// if statement from const variable above //
// else condition for good evening expression (because hour is more than 17) //

function greetThis() {
    return "Hello Steve";
}
console.log(greetThis());
// function is code designed to perform specific task //
// Above I have asked to return Hello Steve when I say greet //
// Think of it as calling for an answer //


function greet(firstName) {
    return "Hello" + firstName;
}
console.log(greet(" Steve"));


function myFunction(str) {
    return ("Hello " + str + " World!");
}
console.log(myFunction("🌻"));

function square(number) {
    return number * number;
}
console.log(square(20));
// A function definition (also function declaration or function statement) consists of the function keyword followed by the name of the function. A list of parameters to the function, enclosed in the parentheses and separated by commas. //

const myCat = {
    color: "black",
    name: "Tony",
    LovesCuddles: true,
};
console.log(myCat.color);

// Objects go between {} //
let simpsons = {
    0: "Homer",
    1: "Marge",
    2: "Bart",
    3: "Lisa",
    4: "Maggie"
};
console.log(simpsons[2])

//

let simpsonsFamily = ["Homer", "Marge", "Bart", "Lisa", "Maggie"]
console.log(simpsonsFamily[3]);
// This is an array // arrays are lists of items starting from 0 //
const isArray = Array.isArray(simpsonsFamily);
console.log(isArray);

console.log(simpsonsFamily[5] = "Santa's little helper");
// This has added [5] outside of the original variable array //
console.log(simpsonsFamily[1] = "Marjorie");
// This has changed Marge to Majorie outside of original array //

let myVariableBank = 100;
const accStatement = (`My bank account has £${myVariableBank}`);
console.log(accStatement);
// Variables with variable data type. In this case bank balance //


// Asynchronous code //
console.log("Hello,");
console.time(); // starts timer
setTimeout(function () {
    console.log("Is it me");
}, 0)
console.timeEnd(); //ends timer and logs textEmphasisStyle
console.log("You're looking for?")

// Asynchronous code //
console.log("Hello,");

setTimeout(function () {
    console.log("Is it me");
}, 3000);

console.log("You're looking for?");

/*
// Have count variable increment by 1 every second (1000 ms)
// SetInterval
    - Call setInterval 
    - gove setInterval tje incrementCount function as a callback - it can call the function whenever it needs to
 - give setInterval the amount of time to wait in between calling the function
//
// This is now a counter 0 - infinate */
let count = 0;
let button = document.querySelector('button');
let p = document.querySelector('p');
function incrementCount() {
    count++;
    p.textContent = count;
}
setInterval(incrementCount, 1000);

// eventListener using HTML button //
document.getElementById("myBtn").addEventListener("click", function () {
    alert("Hello World!");
});

// Try eventListener using DOM //

// Reading values and Bracket notation //
let person = {
    name: "Peter",
    likesPizza: true,
    age: 72,
};
console.log(person.name);
console.log(person['name']);
console.log(person.age);

// React
const oldCount = [1, 2, 3, 4, 5];
const uhOhCount = [oldCount, 6, 7, 8, 9];
const newCount = [...oldCount, 6, 7, 8, 9];
console.log(newCount);

const moreNumbers = [1, 2, 3]
const someMoreNumber = moreNumbers.map((number, i) => {
    console.log(i)
    return number / 2;
});

// Basic function for repetition purpose
function thisRectangle(width, height) {
    let area = width * height;
    return area;
};
let totalRectangle = thisRectangle(10, 20);
console.log("The size of this rectangle is " + totalRectangle);

function thisSum(num1, num2) {
    let sum = num1 + num2
    return sum;
}
let showSum = thisSum(5, 10);
console.log("This sum of 5 + 10 = " + showSum);

function doingAnIf(a) {
    let result;
    if (a > 0) {
        result = "Yes it's bigger";
    } else {
        result = "No it's smaller";
    }
    return result;
}
let showIf = doingAnIf(5);
console.log(showIf);
console.log(doingAnIf(-5));

function myFunc(a, b) {
    if (a === 1) {
        if (b === 2) {
            return "a is 1 and b is 2";
        } else {
            return "a is 1 and b is not 2";
        }
    }
}
console.log(myFunc(1, 2));


function weather() {
    let weather = "rainy";
    if (weather === "sunny") {
        return "It's a sunny day";
    } else {
        return "It's a rainy day";
    }
}
console.log(weather());

function weather(sunny, raining) {
    let result;
    if (sunny) {
        result = "It's a sunny day";
    } else if (raining) {
        result = "It's a rainy day";
    } else {
        result = "It's a cloudy day";
    }
    return result;
}
console.log(weather(true, false));
console.log(weather(false, true));
console.log(weather(false, false));

function schToday(school, noSchool) {
    let result;
    if (school) {
        result = "School today";
    } else if (noSchool) {
        result = "No school today";
    } else {
        result = "It's the weekend";
    }
    return result;
}
console.log(schToday(true, false));
console.log(schToday(false, true));
console.log(schToday(false, false));


function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} music types`);
});

function plusFive() {
    let i = 0;
    while (i += 5) {
        if (i === 20) {
            break;
        }
        console.log(i);
    }
};
plusFive();

function plusToFive() {
    let i = 0;
    do {
        i += 1;
        console.log(i);
    } while (i < 5);
};
plusToFive();

function iteratesThrough() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let theValue = 5;

    for (let i = 0; i < a.length; i++) {
        console.log(`Iteration ${i}: comparing ${a[i]} with ${theValue}`);
        if (a[i] === theValue) {
            break;
        }
    }
}
iteratesThrough();


function iterateIAndJ() {
    let i = 0;
    let j = 10;

    while (i < 4) {
        // console.log(i);
        i += 1;
        checkj: while (j > 1) {
            // console.log(j);
            j -= 1;
            if (j % 2 === 0) {
                continue checkj;
            }
            console.log(j, "is odd.");
        }
    }
};
iterateIAndJ();


const cars = ["BMW", "Volvo", "Saab", "Ford", "Skoda"];
let text = "";
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
};
console.log(cars);
document.getElementById("carsDemo").innerHTML = text;


function reverse(array) {
    if (!Array.isArray(array)) {
        return array;
    }

    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        reversedArray.push(Array.isArray(element) ? reverse(element.reverse()) : element);
    }

    return reversedArray;
}

const data = [1, 2, 3, 4, 5];
const result = reverse(data);
console.log(result);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log("Lugis Debt is " + luigisDebt);
// 105

console.log(Math.max(2, 4) + " Math.max");

let theNumber = Number(prompt("pick a number"));
console.log("Your number is the square root of " +
    theNumber * theNumber);
// 2 * 2 = 4

// write a function charMap that, given a string, returns an object representing the occurrences map of the english alphabet letters contained in the string, in lowercase (e.g "M" gets counted as "m"
function charMap(input) {
    // Initialise an empty object to store the occurrences of each letter
    const occurrences = {};
    // convert the input string to lowercase
    const inputLower = input.toLowerCase();
    // Regular expression to match English alphabet letters
    const alphabetRegex = /[a-z]/;

    // Loop through the input string
    for (let i = 0; i < inputLower.length; i++) {
        const char = inputLower[i];
        // Check if the current character is a letter
        if (alphabetRegex.test(char)) {
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
    }

    return occurrences;
}

const inputString = "Hello World!";
const charMapResult = charMap(inputString);
console.log(charMapResult);


function loopingATriangle() {
    let hash = "#";
    for (let i = 0; i < 7; i++) {
        console.log(hash);
        hash += "#";
    }
};
loopingATriangle();

// FizzBuzz
// What is FizzBuzz?
// Write a program that prints the numbers from 1 to 10
// For multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz" instead of the number
// For numbers which are multiples of both three and five print "FizzBuzz"
function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};
fizzBuzz();


/* Chessboard - Write a program that creates a string that represents an 8x8 grid,
using newline characters to separate lines. At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard. */

function chessboard() {
    let size = 8;
    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }

        }
        board += "\n";
    }
    console.log(board);
};
chessboard();

// Nested Scope
// Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.
// Recipe function
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahnini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}
hummus(3);


// Declaration Notation - function written as a statement
function square(x) {
    return x * x;
}
console.log(square(12));


// function called below the code still works
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

// Arrow Functions
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 10));


// When there is only one parameter, you can omit the parentheses around the parameter list
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square1(5));
console.log(square2(5));

// When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses
const horn = () => {
    console.log("Toot");
};
horn();

function power2(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power2(4)); // 16
console.log(power2(2, 6)); // 64


// Closure
// Being able to reference a specific instance of local bindings in an enclosing scope is called closure. A function that references bindings from local scopes around it is called a closure.
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // 10


// Recursion
// A function that calls itself is called recursive
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
console.log(findSolution(24));
// (((1 * 3) + 5) * 3)

// Growing Functions
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = '0' + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = '0' + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// Define j to hold a function value
const j = function (a) {
    console.log(a + 2);
    if (a > 0) {
        j(a - 1);
    }
};
j(5);

// Declare l to hold a function
function l(a, b) {
    return a + b * 3.5;
}
console.log(l(2, 3));
// In the expression 2 + 3 * 3.5, the multiplication operation takes precedence over addition. So, you perform the multiplication first, then add the result to 2.
// Here's the step-by-step calculation:
// Multiply 3 by 3.5: 3 * 3.5 = 10.5
// Add the result to 2: 2 + 10.5 = 12.5

// Write a function min that takes in two argument and returns their minimum
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(min(2, 10));

// Using math.min write a function min that takes in two arguments and returns their minimum
function min(a, b) {
    return Math.min(a, b);
}
console.log(min(5, 10));


let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

// Pop and Push
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

// Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
console.log(descriptions.work);
// → Went to work
console.log(descriptions["touched tree"]);
// → Touched a tree

// array of objects
let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brused teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
]
console.log(journal);

// Mutability. Objects can be modified, arrays cannot as they are immutable
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15

// The Lycanthrope's Log
// Function that computes the phi coefficient, a measure of correlation between two binary values
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
                (table[1] + table[3]) *
                    (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434


// to-do list mechanism with an array called todoList and three functions: remember(task) to add tasks to the end of the list, getTask() to retrieve and remove the first task from the list, and rememberUrgently(task) to add tasks to the beginning of the list, simulating an urgent priority
let todoList = []; 
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

// Add tasks
remember("Buy groceries");
remember("Finish report");

// View the current to-do list
console.log(todoList);

// Complete a task
const nextTask = getTask();
console.log(`Completed task: ${nextTask}`);

// Add an urgent task
rememberUrgently("Call the plumber");

// View the updated to-do list
console.log(todoList);

// indexOf() and lastIndexOf() methods on an array to find the index of the first occurrence and the index of the last occurrence
console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3


// slice() method on an array to create a new array containing elements from the original array, specified by the provided indices
console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]


// concat() method to glue arrays together to create a new array
function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]


console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

let sentence = "Secretarybirds specialise in stopming";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialise", "in", "stopming"]
console.log(words.join(". "));
// → Secretarybirds. specialise. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b


// Rest Parameters or spread operator
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words2 = ['never', 'fully'];
console.log(['will', ...words2, 'understand']);
// → ["will", "never", "fully", "understand"]

// The Math object

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138

// Return a random whole number
console.log(Math.floor(Math.random() * 10));
// random integer between 0 (inclusive) and 9 (inclusive)

// The sum of a Range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

alert("Ola");

let alertName = "Angela";
alert(`Ola ${alertName}`);

let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
let fullName = firstName + " " + lastName;
alert(fullName);

let country = prompt("What country are you from?");

if (country === "Portugal") {
    alert("You are cool");
}
if (country !== "Portugal") {
    alert("Too bad");
};

let age18 = 18;

if (age18 >= 18) {
    console.log("You are old enough to drive");
} else {
    console.log("You are not old enough to drive");
};

1 + 2 === 4;
console.log(1 + 2 === 4);
// → false

// Logical Or
let ageLogicalOr = 19
let genderLogicalOr = "male"
if (ageLogicalOr < 19 || genderLogicalOr === "male") {
    console.log("You can't join SheCodes 👩‍💻");
  };

// ageElseIf else if
// Nested if statements
let ageElseIf = 17;
if (ageElseIf < 18) {
    console.log("Too young");
} else if (ageElseIf > 80) {
    console.log("Too old");
} else {
    console.log("You can join");
}

// ageFuncElseIf else if
function ageFuncElseIf(age) {
    let resultAgeFuncElseIf;
    if (age < 18) {
        resultAgeFuncElseIf = "Too young";
    } else if (age > 80) {
        resultAgeFuncElseIf = "Too old";
    } else {
        resultAgeFuncElseIf = "You can join";
    }
    return resultAgeFuncElseIf;
};
console.log(ageFuncElseIf(18));

let monday = "school";
let tuesday = "school";
// Logical And
if (monday === "school" && tuesday === "school") {
    console.log("Go to school");
}

// Current date and time
let now = new Date();
console.log(now);

// Return first instance of list item
let li = document.querySelector("li");
console.log(li);

// Update list item
li.textContent = "Hello World!";
console.log(li);

// Return first instance of paragraph
let paragraph = document.querySelector("ul#list p");
console.log(paragraph);

// QuerySelectorAll
let lis = document.querySelectorAll("li");
console.log(lis);

let specialList = document.querySelector("#special");
let paragraphs = specialList.querySelectorAll("li p");
console.log(paragraphs);


// Return first instance of .day
let day = document.querySelector(".day");
// UPdate .day in the DOM
day.textContent = "Today is a sunny day ☀️";
console.log(day);

// Create and eventListener
function sayHi() {
    alert("Hi");
}
let element = document.querySelector("#city");
element.addEventListener("click", sayHi);








