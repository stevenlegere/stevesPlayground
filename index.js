// Practice for node.js code

// This only works in node.js
require('./journal.js')

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
    let correlation = phi (tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < 0.1) {
        console.log(event + ":", correlation);
    }
}

// Searches through entries in the JOURNAL for occurrences where "peanuts" were consumed but "brushed teeth" was not, adds "peanut teeth" as an event to those entries, and then calculates and logs the phi coefficient for the "peanut teeth" event, which is equal to 1.
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth"))
    {
        entry.events.push("peanut teeth")
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// 1

function phi([ n00, n01, n10, n11 ]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 * n10));
}
const input = [10, 5, 3, 12];
const result = phi(input);
console.log(`phi coefficient for input [n00=${input[0]}, n01=${input[2]}, n11=${input[3]}]: ${result}`);

let {name} = {name: "Faraji", age: 23};
console.log(name);

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
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
function arrayToListArray (array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}
console.log(arrayToListArray([1, 2, 3]));

// Write a function listToArray that produces an array from a list
function listToArrayList (list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
console.log(listToArrayList(arrayToListArray([1, 2, 3])));
