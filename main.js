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
charector: "Super Woman",
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
console.log(superWoman, );

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

if(x > 50){
    console.log("Yes it is greater than 50");
}

let w = 49;
if(w < 50){
    console.log("Yes it is lower than 50");
}

const hour = 17;
if(hour < 18) {
    console.log("good day");
}

let isRaining = "false";
// variable using a boolean expression //
// boolean is a true or false value //
if(isRaining === "true") {
    console.log("Pack your umbrella");
}
// if statement with a boolean expression value //

if(isRaining === "false") {
    console.log("Wear your shorts");
}

if(isRaining === "true") {
    console.log("Take your umbrella");
} else {
    console.log("Wear your favourite T");
}

if(hour > 17) {
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
    return("Hello " + str + " World!");
  }
  console.log(myFunction("🌻"));

  function square(number) {
    return number * number;
  }
  console.log(square(20));
// A function definition (also function declaration or function statement) consists of the function keyword followed by the name of the function. A list of parameters to the function, enclosed in the parentheses and separated by commas. //

const myCat ={
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

console.log(simpsonsFamily[5] = "Santa's little helper");
// This has added [5] outside of the original variable array //
console.log(simpsonsFamily[1] = "Marjorie");
// This has changed Marge to Majorie outside of original array //

let myVariableBank = 100;
const accStatement = ("My bank account has £${myVariableBank}");
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
let button = document.querySelector ('button');
let p = document.querySelector('p');
function incrementCount() {
count++;
p.textContent = count;
}
setInterval(incrementCount, 1000);

// eventListener using HTML button //
document.getElementById("myBtn").addEventListener("click", function() {
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

const moreNumbers = [1,2,3]
const someMoreNumber = moreNumbers.map((number, i)=>{
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
        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12];
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
          