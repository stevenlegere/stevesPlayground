// Practice for node.js code

// This only works in node.js
require('./journal.js')
require('./scripts.js')

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

//Loop to iterate through each entry in the JOURNAL array, displaying the number of events recorded in each entry
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

// Function journalEvents that extracts unique events from an array of journal entries' events, and then applies it to the JOURNAL array
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

// Iterates through each event in the JOURNAL and calculates and logs the value of the phi coefficient for that event's presence in the journal data using the tableFor and phi functions
for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

// Iterates through events in the JOURNAL, calculates the phi coefficient for each event's presence, and then logs events with a correlation greater than or less than 0.1 along with their correlation values.
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < 0.1) {
        console.log(event + ":", correlation);
    }
}

// Searches through entries in the JOURNAL for occurrences where "peanuts" were consumed but "brushed teeth" was not, adds "peanut teeth" as an event to those entries, and then calculates and logs the phi coefficient for the "peanut teeth" event, which is equal to 1.
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth")
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// 1

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 * n10));
}
const input = [10, 5, 3, 12];
const result = phi(input);
console.log(`phi coefficient for input [n00=${input[0]}, n01=${input[2]}, n11=${input[3]}]: ${result}`);

let { name } = { name: "Faraji", age: 23 };
console.log(name);

let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

// A List
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
console.log(list);

// Write a functiom arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument
function arrayToListArray(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
console.log(arrayToListArray([1, 2, 3]));

// Write a function listToArray that produces an array from a list
function listToArrayList(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
console.log(listToArrayList(arrayToListArray([1, 2, 3])));

// Deep Comparison
// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}
console.log(
    deepEqual(
        { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } },
        { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
    )
);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
repeatLog(10);

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, i => {
    labels.push(`unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// Higher-Order Functions
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

// Higher-Order Functions
["A", "B"].forEach(l => console.log(l));
// → A
// → B

// // Filtering Arrays
// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }
// console.log(filter(SCRIPTS, script => script.living));
// // → [{name: "Adlam", …}, …]

let a = 10;
console.log(a);

let amount = 6;
while (amount > 0) {
    console.log(amount);
    amount--;
}

let thisText = 'this text is a string';
thisText.length;
console.log(thisText.length);
console.log(thisText[0]);
console.log(thisText);

const outOfTown = true;
console.log(outOfTown);

console.log(Math.random());
console.log(Math.random() * 10);

const weeksInYear = Math.floor(365 / 7);
const daysLeftOver = 365 % 7;
console.log('a year has ' + `${weeksInYear}` + ' weeks');
console.log('a year has ' + `${weeksInYear}` + ' weeks and ' + `${daysLeftOver}` + ' days');

let age = 42;
// string interpolation
console.log(`I am ${age} years old`);
// string concatenation
console.log('I am ' + age + ' years old');

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleep" }, "gift"));


let students = ["Kate", "Julie", "Mariana"];

let Kate = {
    firstName: "Kate",
    lastName: "Johsnson",
    age: 23,
    canCode: true,
};
console.log(Kate.canCode);


let myList = [];
let fruits = ["apples", "oranges", "bananas"];
myList = ["bananas", 3, "go", ['John', 'Doe'], { 'firstName': 'John', 'lastName': 'Smith' }];
console.log(myList);

let nextTown = [
    {
        "town": "Margate",
        "population": 65000,
    },
    {
        "town": "Ramsgate",
        "population": 42000,
    },
    {
        "town": "Broadstairs",
        "population": 25000,
    }
];
console.log(nextTown[0].population, nextTown[0].town);
console.log(nextTown[1].population);


const howManyMiles = (miles, km) => {
    let milesAndKm =
        [
            {
                "miles": 99,
                "km": 160,
            },
            {
                "miles": 125,
                "km": 201,
            },
            {
                "miles": 150,
                "km": 241,
            },
        ]
    return milesAndKm;
};
const resultOfMiles = howManyMiles();
console.log(resultOfMiles[0].km);


const whichMotorway = (motorway) => {
    let motorways = [
        {
            "motorway": "M1",
        },
        {
            "motorway": "M25",
        },
        {
            "motorway": "M4",
        },
    ]
    return motorways;
};
const resultOfMotorway = whichMotorway();
console.log(resultOfMotorway[0].motorway);
module.exports = whichMotorway;


const materialsForWardrobe = (material) => {
    let materials = [
        {
            "material": "plywood",
            "price": 10,
            "quantity": 5,
        },
        {
            "material": "screws",
            "price": 15,
            "quantity": 200,
        },
        {
            "material": "oil",
            "price": 25,
            "quantity": 1,
        },
    ]
    return materials;
}
const resultOfMaterials = materialsForWardrobe();
console.log(resultOfMaterials[0].material, resultOfMaterials[0].price, resultOfMaterials[0].quantity);


// Function that accepts parameters
// This function allows you to pass in parameters when you call it
const woodForWardrobes = (material, price, quantity) => {
    return {
        "material": material,
        "price": price,
        "quantity": quantity,
    };
}
const material1 = woodForWardrobes("birch plywood", 15, 50);
const material2 = woodForWardrobes("hex screws", 25, 200);
console.log(material1, material2);


let times = 0;
while (times <= 10) {
    console.log(times);
    times = times + 1;
};

let countToTen = (start) => {
    while (start < 10) {
        console.log(start);
        start = start + 1;
    }
    return start;
};
console.log(countToTen(0));

// forEach loop
let fruitsForEach = ['apples', 'oranges', 'bananas'];
fruitsForEach.forEach(function (fruit) {
    console.log("I have " + fruit + " in my basket");
});

// forEach loop with arrow function
let fruitsForEachArrow = ['apples', 'oranges', 'bananas'];
fruitsForEachArrow.forEach((fruit) => {
    console.log("I have " + fruit + " In my shopping bag");
});

// do while loop
let numbers = 1;
let timesx = 1;
do {
    console.log(numbers);
    numbers = numbers + 1;
    timesx = timesx + 1;
} while (timesx <= 9);
console.log(timesx);

let resulto = '';
let i = 0;
do {
    i = i + 1;
    resulto = resulto + i;
} while (i < 5);
console.log(resulto);

// for loop
for (let i = 0; i < 10; i++) {
    console.log("i is " + i);
}

const myNewList = () => {
    const myList = ["apples", "oranges", "bananas"];
    for (let i = 0; i < myList.length; i++) {
        console.log("I have " + myList[i] + " in my shopping bag");
    }
    return myList;
}
console.log(myNewList());

// Get current time
let now = new Date();
console.log(now);

// Numbers
// Round
Math.round();
console.log(Math.round(5.7));
// Floor
Math.floor(4.7);
// Ceil
Math.ceil(4.7);


// Objects
// Creating a new object
const myObject = {} // object literal
let fruit = new Object(); // object constructor
let student = {
    firstName: "Sandra",
    lastName: "Smith",
};
console.log(student.firstName);

// Adding properties to an object
student.age = 23;

// Deleting properties from an object
delete student.age;

// Object arrays
let users = [
    {
        firstName: "Bradley",
        lastName: "Cooper",
    },
    {
        firstName: "Lady",
        lastName: "Gaga",
    },
];

users.forEach(function (user, index) {
    for (let prop in user) {
        console.log(prop + " is " + user[prop]);
    }
});

// Nested function. A function inside a function

function hello() {
    function go(name) {
        return (name);
    }

    let name = "SheCodes";
    console.log("Hello " + go(name));
}
hello(); // invoke the function


// Codewars kata
// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list shoulf be a copy of the original list, sorted first by the animal's number of legs, and then by it's name.

// This code passed the test
// class Animal {
//     constructor(name, numberOfLegs) {
//       this.name = name;
//       this.numberOfLegs = numberOfLegs;
//       }
//     }
    
//     // Custom sorting function
//     function sortAnimal(animals) {
//       // Check id the list is empty
//       if(animals.length === 0) {
//         return [];
//       }
      
//       // Custom sorting function
//       function customSortAnimal(a, b) {
//        // Compare the number of legs
//         const legsComparison = a.numberOfLegs - b.numberOfLegs;
//         if (legsComparison !== 0) {
//           return legsComparison;
//         }
//         // If the number of legs is the same, compare the name
//         return a.name.localeCompare(b.name);
//       }
      
//       // Sort the list using the custom sorting function
//       const sortedAnimal = animals.slice(); // Shallow copt if the original list
//       sortedAnimal.sort(customSortAnimal);
      
//       return sortedAnimal
      
//       }


// This code was other solution that was more concise
class Animal {
    constructor(name, numberOfLegs) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
    }
}

const compareAnimals = (a, b) => 
    a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name);

    const sortAnimal = animals =>
    animals ? animals.slice().sort(compareAnimals) : null;

      const animals = [
        new Animal("Cat", 4),
        new Animal("Snake", 0),
        new Animal("Dog", 4),
        new Animal("Pig", 4),
        new Animal("Human", 2),
        new Animal("Bird", 2)
    ];
    
    const sortedAnimals = sortAnimal(animals);
    console.log(sortedAnimals);



const languages = ["javaScript", "SQL", "cat purrs", "c#", "Go"];

const accurateLanguages = [
	...languages.slice(0, 2),
    "Python",
	...languages.slice(3)
];
console.log(accurateLanguages);


// Write a function that takes in an array and returns a new array with all elements turned to uppercase
const cats = ["tony", "daisy", "twitchy", "charles", "sneaks"];
const uppercaseCats = cats.map(cats => cats.toUpperCase());
console.log(uppercaseCats);


// Create an array that contains foods, some of which begin with the letter 'b'
const foods = ["banana", "apple", "orange", "broccoli", "bread", "beetroot"];
// Create a function that iterates throught the array and returns a new array with only the foods thay begin with the letter b
const foodsThatStartWithB = foods.filter(foods => foods.startsWith("b"));
console.log(foodsThatStartWithB);


// Using .every() method check if every number in the array is a multiple of 7
const sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let isMultipleOfSeven = sevenTimesTable.every(sevenTimesTable => sevenTimesTable % 7 === 0);
console.log(isMultipleOfSeven);
// true

 // Using the .every() method check if every number in the seventySevenTimesTable is a multiple of 77
 const seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 539, 616, 693, 770];
 let isMultipleOfSeventySeven = seventySevenTimesTable.every(seventySevenTimesTable => seventySevenTimesTable % 7 === 0);
 console.log(isMultipleOfSeventySeven);
 // false 
// Find the false value in the seventySevenTimesTable array
// Use the .findIndex() mehod to identify the fasle value
const falseValue = seventySevenTimesTable.findIndex(seventySevenTimesTable => seventySevenTimesTable % 7 !== 0);
console.log(falseValue);
// 5


// Given an array of numbers, return the difference between the largest and smallest values
const smallestAndBiggest = [1, 2, 3, 4, 5];
// Search for the smallest number in the array
const smallest = Math.min(...smallestAndBiggest);
console.log(smallest);
// 1
// Search for the biggest number in the array
const biggest = Math.max(...smallestAndBiggest);
console.log(biggest);
// 5

let isRaining = "true";
if (isRaining === "true") {
	console.log("Pack your umbrella");
} else {
	console.log("Wear your favourite T");
};

const numberValue = 42;
const stringValue = "42";
if (numberValue == stringValue) {
    console.log("Loosley equal");
};

const greetThis = () => {
	return "Hello Steve";
}
console.log(greetThis());
 

const cars = ["BMW", "Volvo", "Saab", "Ford", "Skoda"];
let text = "";
for (let i = 0; i < cars.length; i++) {
	text += cars[i] + " ";
};
console.log(cars[1]);



function iterateIAndJ() {
    let i = 0;
    let j = 10;

    while (i < 4) {
        i += 1;
        checkj: while (j > 1) {
            j -= 1;
            if (j % 2 === 0) {
                continue checkj;
            }
            console.log(j, "is odd.");
        }
    }
};
iterateIAndJ();
//  checkj: is a label used to specify which loop should continue when the continue statement is encountered



function iteratesThrough() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let theValue = 5;

    for (let i = 0; i < a.length; i++) {
        console.log(`Iteration ${[i]}: comparing ${a[i]} with ${theValue}`);
        if (a[i] === theValue) {
            break;
        }
    }
}
iteratesThrough();

// Reverse Array
const data = [1, 2, 3, 4, 5];
const resultArray = data.reverse();

console.log(resultArray);
// [5, 4, 3, 2, 1]

function reverseArray(array) {
    const data = [1, 2, 3, 4, 5];
    const resultArray = data.reverse();
    return resultArray;
}
console.log(reverseArray());
// [5, 4, 3, 2, 1]

// Reverse Array with arrow function
const reverseArrayArrow = () => {
    const data = [1, 2, 3, 4, 5];
    const resultArray = data.reverse();
    return resultArray;
}
console.log(reverseArrayArrow());


// Using the .push method add the number 6 to the end of an array
const amountOfPeople = [1, 2, 3, 4, 5];
function addNumber() {
    amountOfPeople.push(6);
    return amountOfPeople;
}
console.log(addNumber());

// Using the .pop() method remove the last number from an array
function removeNumber() {
    amountOfPeople.pop();
    return amountOfPeople;
}
console.log(removeNumber());


// Remove array number using the .splice() method
const removeANumber = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = removeANumber.indexOf(elementToRemove);

if (index !== -1) {
    removeANumber.splice(index, 1);
}
console.log(removeANumber);

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // free code camp challenge to update the record collection
  function updateRecords(records, id, prop, value) {
    // function must always return the entire records object
    // if value is an empty string, delete the given prop property from the album
    // If the prop isn't tracks and value isn't an empty string, assign the value to that album's prop
    // if prop is tracks and value isn't an empty string, you need to update the album's tracks array. First the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } 
    else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
        records[id][prop] = [value];
    } 
    else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } 
    else if (value === "") {
        delete records[id][prop];
    }
    return records;
  }

  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// Multiplication with nested arrays
  // Use a for loop to multiply each number in the sub-arrays
function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1], [2], [3]])); // Output: 6
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // Output: 5040
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])); // // Output: 54


// do...while loop, the code will push the number 10 into myArray and increment i to 11 when the loop is finished.
const myDoWhileArray = [];
let iDoWhile = 10;

do {
    myDoWhileArray.push(iDoWhile);
    iDoWhile++;
} while (iDoWhile < 11); // Use a do...while loop to execute the code at least once and push 10 into myArray
console.log(myDoWhileArray);
console.log(iDoWhile);

// Recursive function
    // a function that calls itself during its execution
function sum(arr, n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return arr[0];
    }
    return sum(arr, n - 1) + arr[n - 1];
}
console.log(sum([1], 0)); // Output: 0
console.log(sum([2, 3, 4], 1)); // Output: 2
console.log(sum([2, 3, 4, 5], 3)); // Output: 9

// Contacts look up using for loop and if statement
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Loop through the contacts array
    for (let i = 0; i < contacts.length; i++) {
        // Check if the contacts first name matches the given name
    if (contacts[i].firstName === name) {
        // Check is the property prop exists in the contact
        if (contacts[i].hasOwnProperty(prop)) {
            // Return the value property
            return contacts[i][prop];
        } else {
            // If the property does not exist, return 'No such property'
            return "No such property";
        }
    }
    }
    // If no matching contact is founf, return "No such contact"
    return "No such contact";
}
lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));

// Return random fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

// Generate Random Whole Numbers
// Use Math.random() to generate a random decimal
// Multiply that random decimal by 20
// Use another function, Math.floor() to round the number down to its nearest whole number
// Multiply the result by 1 to make the result a whole number
// The result is a random whole number between 0 and 19
function randomWholeNum() {
    return Math.floor(Math.random() * 20);
}
console.log(randomWholeNum());

// Generate Random Whole Numbers within a Range
// generate a random whole number that falls within a range of two specific numbers
// To do this, we'll define a minimum number min and a maximum number 
// Math.floor(Math.random() * (max - min + 1)) + min
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(1, 100));

// Use the parseInt function
// The parseInt() function parses a string and returns an integer
// Here's an example
function convertToIntegerParseInt(str) {
    return parseInt(str);
}
convertToIntegerParseInt("6");
console.log(convertToIntegerParseInt('6'));

// Use the parseInt function with a Radix
// The parseInt() function parses a string and returns an integer
// It takes a second argument for the radix, which specifies the base of the number in the string
// The radix can be an integer between 2 and 36
// Radix 2 is used for binary number system
// The function call looks like:
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");
console.log(convertToInteger("10011")); // 19

// Ternary Operator
// Example A will be written as a regular if...else statement
    // Example B will be written as a ternary operator
// Example A
function findGreater (a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}
console.log(findGreater(5, 10));

// Example B ternary operator
    // Ternary operator if a conditional operator that assigns a value to a variable based on some condition
function findGreaterTernary(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}
console.log(findGreaterTernary(5, 10));

// Ternary Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2)); // Not Equal

// Multiple Ternary Operators
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
};
console.log(findGreaterOrEqual(5, 10)); // b is greater

// Ternary Operator
function checkSign(num) {
    return num > 0 ? " positive"
    : num < 0 ? "negative"
    : "zero";
}
console.log(checkSign(-10)); // negative

// Use recursion to create a countdown
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]

// Use recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5]

// Finding the remainder in JavaScript
// The remainder operator % gives the remainder of the division of two numbers
const remainder = 11 % 3;
console.log(remainder); // 2

// Compare scopes of the var and let keywords
// let i = "function scope";
function checkScope() {
    let i = 'block scope';
    return i;
}
console.log(checkScope()); // block scope

// const declaration
    // Objects are still mutable
        // const variable only prevents reassignment of the varibale identofier
const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45;
console.log(s); // [5, 6, 45] 

// Reasign an array declared with const
const reasignS = [5, 7, 2];
function editInPlace() {
    reasignS[0] = 2;
    reasignS[1] = 5;
    reasignS[2] = 7;
}
editInPlace();
console.log(reasignS); // [2, 5, 7]

// Arrow function with parameters
const doubler = (item) => item * 2; // If passing a single parameter, the parentheses are optional
doubler(4); // 8
console.log(doubler(4));

// Arrow function with multiple parameters
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // 8
console.log(multiplier(4, 2));

// function that appends two parameters
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

// Default parameters for functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6
console.log(increment()); // NaN

// Use the Rest Parameter with Function Parameters
// With the rest parameter, you can create functions that take a variable number of arguments
// These arguments are stored in an array that can be accessed later from inside the function
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.

//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sumArgs = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumArgs(1, 2, 3)); // 6

// Use the Spread Operator to Evaluate Arrays In-Place
  // apply method - This examnple uses the Math.max() function to find the maximum number in an array
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89 | Not using the spread operator
console.log(maximus);

// Using the spread operator
const arrSpread = [6, 89, 3, 45];
const maximusSpread = Math.max(...arrSpread); // returns 89
console.log(maximusSpread);

const arr1Spread = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2Spread;
arr2Spread = [...arr1Spread];
console.log(arr2Spread);

// Use Destructuring Assignment to Assign Variables from Objects
function userDestructuring() {
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
return name + ' ' + age;
}
console.log(userDestructuring());


// Use Destructuring Assignment to Assign Variables from Nested Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today); // 77
console.log(tomorrow); // 80

// const HIGH_TEMPERATURES1 = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80,
// };
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;
// console.log(highToday); // 77
// console.log(highTomorrow); // 80

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
console.log(lowToday); // 64
console.log(highToday); // 77

// Use Destructuring Assignment to Assign Variables from Arrays
function assignVariablesFromArrays() {
const [z, x] = [1, 2, 3, 4, 5, 6];
return [z, x];
}
console.log(assignVariablesFromArrays()); // 1, 2

// can also access the value at any index in an array with destructuring by using commas to reach the desired index:
assignVariablesFromArraysComma = () => {
    const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    return [a, b, c];
}
console.log(assignVariablesFromArraysComma()); // 1, 2, 5

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a
let aDestructuring = 8, bDestructuring = 6;
(() => {
    [aDestructuring, bDestructuring] = [bDestructuring, aDestructuring];
})();
console.log(aDestructuring); // 6
console.log(bDestructuring); // 8

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeFirstTwo = (list) => {
    const [, , ...arr] = list;
    return arr;
}
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo); // [3, 4, 5, 6, 7, 8, 9, 10]

// destructuring assignment within the argument to the function half to send only max and min inside the function
const stats = {
    max: 56.78,
    standar_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => {
    return (max + min) / 2.0;
}

console.log(half(stats)); // 28.015

// Create Strings using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting2 = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting2);

// template literal syntax with backticks to create an array of list element (li) strings
const result2 = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`); // Remove the extra square brackets
    }
    return failureItems;
}
const failureList = makeList(result2.failure);
console.log(failureList);

// Write Concise Object Literal Declarations Using Object Property Shorthand
    // Consider the following code:
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
console.log(getMousePosition(1, 2)); // {x: 1, y: 2}

// rewritten with ES6 syntax
const getMousePosition2 = (x, y) => ({ x, y });
console.log(getMousePosition2(1, 2)); // {x: 1, y: 2}


const createPerson = (name2, age2, gender2) => {
    return {
        name: name2,
        age: age2,
        gender: gender2
    };
};
// Pass argument values to the function as variables
const name2 = "Peter Pan";
const age2 = 98;
const gender2 = "Non-binary";
// Call the function with the arguments
const person2 = createPerson(name2, age2, gender2);
console.log(person2);

// rewrite the function using the shorthand ES6 syntax
const createPerson2 = (name2, age2, gender2) => ({ name2, age2, gender2 });
// Pass argument values to the function as variables
const name3 = "Peter Pan";
const age3 = 98;
const gender3 = "Non-binary";
// Call the function with the arguments
const person3 = createPerson2(name3, age3, gender3);
console.log(person3);


// In ES6 a class declaration has a constructor() method
    // Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}
const zeus = new SpaceShuttle("Jupiter");
zeus.takeOff(); // To Jupiter !

// Implicit constructor
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}
const atlas = new Rocket();
atlas.launch(); // To the moon!

// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); // 'carrot'


// Use getters and setters to Control Access to an Object
    // You can obtain values from an object and set the value of a property within an object
    // These are classically called getters and setters
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer); // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer); // newAuthor



// Use class keyword to create a Thermostat class
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature () {
        return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature (celcius) {
        this._fahrenheit = (celcius * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

// Create a javascript promise
const myPromise = new Promise((resolve, reject) => {
    // This promise will be forever stuck in the pending state
});

// Complete a Promise with resolve and reject
const condition = true; // define condition
const myPromise2 = new Promise((resolve, reject) => {
    if(condition) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});
console.log(myPromise2);


// Create a javascript promise
const makeServerRequest = new Promise((resolve, reject) => {
    // This promise will be forever stuck in the pending state
})
console.log(makeServerRequest);

// Complete a Promise with resolve and reject
const makeServerRequest2 = new Promise((resolve, reject) => {
    let responseFromServer = true; // define condition

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
console.log(makeServerRequest2);

// Handle a Fulfilled Promise with then
myPromise2.then(result => {
})
console.log(myPromise2);

// Handle a Fulfilled Promise with then
const makeServerRequest3 = new Promise((resolve, reject) => {
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
console.log(makeServerRequest3);

makeServerRequest3
    .then(result => {
        console.log(result); 
    });

// Handle a Rejected Promise with catch
const makeServerRequest4 = new Promise((resolve, reject) => {
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
// Handle the resolved state of a promise with then
makeServerRequest4
    .then((result) => {
        console.log(result); // We got the data
    })
    // Handle the rejected state of a promise with catch
    .catch((error) => {
        console.log(error); // Data not received
    });

// Regular Expressions (RegEx)
    // Regular expressions are used in programming languages to match parts of strings
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); // true
console.log(testRegex.test(testStr));

let myString = "Hello, World!";
let myRegex = /Helloo/;
let resultRegex = myRegex.test(myString); // false
console.log(resultRegex);

// Match Literal Strings (seems same as regular expressions)
let testLitStr = "Hello, my name is Kevin.";
let testLitRegex = /Kevin/;
console.log(testLitRegex.test(testLitStr)); //true

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let resultWaldo = waldoRegex.test(waldoIsHiding);
console.log(resultWaldo); // true

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resultPetRegex = petRegex.test(petString);
console.log(resultPetRegex); //true

// Ignore Case While Matching regEx
let myStringCase = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let resultCase = fccRegex.test(myStringCase);
console.log(resultCase); // true

// Exact Mathces using .match()
    // Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
        // .match will return the acual value
        // .test will return a boolean
    let ourStrMatch = "Hello, World!";
let ourRegexMatch = /Hello/;
let resultMatch = ourStrMatch.match(ourRegexMatch);
console.log(resultMatch); // ["Hello"]

// Exact Mathces using .match()
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // ["expressions"]
console.log(ourStr.match(ourRegex)); // ["expressions"]

// Find more than the first match with multiple flags /**/g
let testRepeatStr = "Repeat, Repeat, Repeat";
let ourRepeatRegex = /Repeat/g;
testStr.match(ourRegex); // ["Repeat"]
let resultRepeat = testRepeatStr.match(ourRepeatRegex);
console.log(resultRepeat); // ["Repeat"]

// More than one match using the g flag and ignore case using the i flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let resultTwinkle = twinkleStar.match(starRegex);
console.log(resultTwinkle); // ["Twinkle", "twinkle"]

// Match anything with wildcard period or dot (.)
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let resultHu = huRegex.test(humStr);
let resultHu2 = huRegex.test(hugStr);
console.log(resultHu); // true
console.log(resultHu2); // true

// Wildcard match(.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let resultUn = unRegex.test(exampleStr);
console.log(resultUn); // true

// Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // ["big"]
bagStr.match(bgRegex); // ["bag"]
bugStr.match(bgRegex); // ["bug"]
bogStr.match(bgRegex); // null
let resultBg = bigStr.match(bgRegex);
console.log(resultBg); // ["big"]
console.log(bagStr.match(bgRegex)); // ["bag"]

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Using global and ignore case flags
let resultVowel = quoteSample.match(vowelRegex);
console.log(resultVowel); // ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "i"]

// Match Letters of the Alphabet
  // [-] hyphen inside a charecter set
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexAlph = /[a-e]at/;
catStr.match(bgRegexAlph);
batStr.match(bgRegexAlph);
matStr.match(bgRegexAlph);
console.log(catStr.match(bgRegexAlph)); // ["cat"]
console.log(batStr.match(bgRegexAlph)); // ["bat"]
console.log(matStr.match(bgRegexAlph)); // null

// Match all the letters in the string quoteSampleAlph
let quoteSampleAlph = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let resultAlph = quoteSampleAlph.match(alphabetRegex);
console.log(resultAlph); // ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]

// Match Numbers and Letters of the Alphabet
   // /[0-9a-z]/gi
let jennyStr = "Jenny8675309";
let myRegexJenny = /[a-z0-9]/ig;
jennyStr.match(myRegexJenny);
let resultJenny = jennyStr.match(myRegexJenny);
console.log(resultJenny); // ["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"]

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6
let quoteSampleRegex = "Bluewberyy 3.141592653s are delicious.";
let myRegexLettersNumbers = /[h-s2-6]/ig;
let resultLettersNumbers = quoteSampleRegex.match(myRegexLettersNumbers);
console.log(resultLettersNumbers); // ["l", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "i", "i", "s"]


// Match Single Characters Not Specified
  // Negated character sets /[^]
let quoteSampleNeg = "3 blind mice.";
let myRegexNeg = /[^aeiou0-9]/gi;
let resultNeg = quoteSampleNeg.match(myRegexNeg);
console.log(resultNeg); // [" ", "b", "l", "n", "d", " ", "m", "c", "."]

// Match Characters that Occur One or More Times
    // + plus sign
let difficultSpelling = "Mississippi";
let myRegexDiff = /s+/g;
let resultDiff = difficultSpelling.match(myRegexDiff);
console.log(resultDiff); // ["ss", "ss"]

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); // ["g"]
oPhrase.match(goRegex); // null
console.log(soccerWord.match(goRegex)); // ["goooooooo"]

// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let resultChewie = chewieQuote.match(chewieRegex);
console.log(resultChewie); // ["Aaaaaaaaaaaaaaaa"]

// Find Characters with Lazy Matching
  // greedy match finds the longest possible part of a string
  // lazy match finds the smallest possible part of the string that satisfies the regex pattern
    // greedy match /t[a-z]*i/ will match the entire string "titanic"
    // lazy match /t[a-z]*?i/ will match only the letter "t"
let greedyStr = "titanic";
let greedyRegex = /t[a-z]*i/;
let resultGreedy = greedyStr.match(greedyRegex);
console.log(resultGreedy); // ["titani"]

let lazyStr = "titanic";
let lazyRegex = /t[a-z]*?i/;
let resultLazy = lazyStr.match(lazyRegex);
console.log(resultLazy); // ["ti"]

// return <h1> and not the text <h1>Winter is coming</h1>
let textH1 = "<h1>Winter is coming</h1>";
let myRegexH1 = /<.*?>/;
let resultH1 = textH1.match(myRegexH1);
console.log(resultH1); // ["<h1>"]

// Find one or more criminals in a hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); // ["CCC"]

// Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now";
firstRegex.test(notFirst); // false
console.log(firstRegex.test(firstString)); // true
console.log(firstRegex.test(notFirst)); // false

// Match Beginning String Patterns /^/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let resultCal = calRegex.test(rickyAndCal);
console.log(resultCal); // true

// Match Ending String Patterns /$/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false
console.log(storyRegex.test(theEnding)); // true
console.log(storyRegex.test(noEnding)); // false

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultLast = lastRegex.test(caboose);
console.log(resultLast); // true

// Match All Letters and Numbers
  // \w is equal to [A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbersAll = "42";
let varName = "important_var";
longHand.test(numbersAll); // true
shortHand.test(numbersAll); // true
longHand.test(varName); // true
shortHand.test(varName); // true
let resultLongHand = longHand.test(numbersAll);
let resultShortHand = shortHand.test(numbersAll);
let resultLongHand2 = longHand.test(varName);
let resultShortHand2 = shortHand.test(varName);
console.log(resultLongHand); // true
console.log(resultShortHand); // true
console.log(resultLongHand2); // true
console.log(resultShortHand2); // true

// Match All Letters and Numbers
  // \w is equal to [A-Za-z0-9_]
    //  shorthand character classes
let quoteSampleAll = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let resultAll = quoteSampleAll.match(alphabetRegexV2).length;
console.log(resultAll); // 31

// Match Everything But Letters and Numbers
    // \W is equal to [^A-Za-z0-9_]
let shortHandNon = /\W/;
let numbersNon = "42%";
let sentenceNon = "Coding!";
numbersNon.match(shortHandNon); // ["%"]
sentenceNon.match(shortHandNon); // ["!"]
let resultNon = numbersNon.match(shortHandNon);
let resultNon2 = sentenceNon.match(shortHandNon);
console.log(resultNon); // ["%"]
console.log(resultNon2); // ["!"]

// Match Everything But Letters and Numbers
    // \W is equal to [^A-Za-z0-9_]
let quoteSampeNon = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let resultNonAlphabet = quoteSampleAll.match(nonAlphabetRegex);
console.log(resultNonAlphabet); // [" ", " ", " ", " ", " ", " ", "."]

// Match all numbers
    // \d is equal to [0-9]
let movieNameNum = "2001: A Space Odyssey";
let numRegex = /\d/g;
let resultNum = movieNameNum.match(numRegex).length;
console.log(resultNum); // 4

// Match all non-numbers
    // \D is equal to [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let resultNoNum = movieName.match(noNumRegex).length;
console.log(resultNoNum); // 17

// Restrict Possible Usernames
    // Usernames can only use alpha-numeric characters
    // The only numbers in the username have to be at the end
    // There can be zero or more of them at the end
    // Username letters can be lowercase and uppercase
    // Usernames have to be at least two characters long
    // A two-character username can only use alphabet letters as characters
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let resultUser = userCheck.test(username);
console.log(resultUser); // true

// Match Whitespace
    // \s is equal to [\r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // [" ", " "]
let resultWhiteSpace = whiteSpace.match(spaceRegex);
console.log(resultWhiteSpace); // [" ", " "]

// Match Non-Whitespace Characters
    // \S is equal to [^\r\t\f\n\v]
let notWhiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // 32
console.log(whiteSpace.match(nonSpaceRegex).length); // 32

// Match Non-Whitespace Characters
let sampleNon = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let resultNonWhiteSpace = sampleNon.match(countNonWhiteSpace);
console.log(resultNonWhiteSpace); // ["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", "a", "r", "a", "t", "i", "n", "g", "w", "o", "r", "d", "s"]

// Specify Upper and Lower Number of Matches
    // {lower, upper}
    // {2, 6} will match between 2 and 6
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // true
multipleA.test(A2); // false
let resultMultipleA = multipleA.test(A4);
let resultMultipleA2 = multipleA.test(A2);
console.log(resultMultipleA); // true
console.log(resultMultipleA2); // false

// Specify Only the Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let resultOh = ohRegex.test(ohStr);
console.log(resultOh); // true

// Specify Exact Number of Matches
  // For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/
let A4Exact = "haaaah";
let A2Exact = "haah";
let A100Exact = "h" + "a".repeat(100) + "h";
let multipleAExact = /ha{3,}h/;
multipleAExact.test(A4Exact);
multipleAExact.test(A2Exact);
multipleAExact.test(A100Exact);
console.log(multipleAExact.test(A4Exact)); // true
console.log(multipleAExact.test(A2Exact)); // false
console.log(multipleAExact.test(A100Exact)); // true

// Specify Exact Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let resultHa = haRegex.test(haStr);
console.log(resultHa); // true

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timeRegex = /Tim{4}ber/;
let resultTime = timeRegex.test(timStr);
console.log(resultTime); // true


// Check for all or none
    // ? question mark
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // true
rainbowRegex.test(british); // true
let resultRainbow = rainbowRegex.test(american);
let resultRainbow2 = rainbowRegex.test(british);
console.log(resultRainbow); // true
console.log(resultRainbow2); // true

// Specify Exact Number of Matches
let favWord = "favourite";
let favRegex = /favou?rite/;
let resultWord = favRegex.test(favWord);
console.log(resultWord); // true


// Positive and Negative Lookahead
    // (?=...)
    // (?!...)
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // matches q only if it is followed by a u
let qRegex = /q(?!u)/; // matches q only if it is not followed by a u
quit.match(quRegex); // ["q"]
noquit.match(qRegex); // ["q"]
let resultQu = quit.match(quRegex);
let resultNoQu = noquit.match(qRegex);
console.log(resultQu); // ["q"]
console.log(resultNoQu); // ["q"]

// Positive and Negative Lookahead
  // Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // matches passwords that are greater than 3 characters long, do not begin with numbers, and have two consecutive digits
checkPass.test(password); // true
let resultPassword = checkPass.test(password);
console.log(resultPassword); // true

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits
let sampleWord = "astronaut";
// Your regex should not match the string 12345
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let resultSampleWord = pwRegex.test(sampleWord);
console.log(resultSampleWord); // false

// Check For Mixed Grouping of Characters
    // () parenthesis
    // To find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
let testStrGroup = "Pumpkin";
let testRegexMixed = /P(engu|umpk)in/;
testRegexMixed.test(testStrGroup); // true
let resultMixed = testRegexMixed.test(testStrGroup);
console.log(resultMixed); // true

// Check For Mixed Grouping of Characters
let myStringMixed = "Eleanor Roosevelt";
// Your regex myRegex should return false for the string FranklinRoosevelt
// Failed:Your regex myRegex should return false for the string EleanorRoosevelt
let myRegexMixed = /(Franklin\s|Eleanor\s).*Roosevelt/;
let resultMixed2 = myRegexMixed.test(myStringMixed);
console.log(resultMixed2); // true

