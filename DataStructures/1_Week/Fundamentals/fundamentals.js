// Variable declaration: 

// let is more versatile like we can edit it later

//let age = 25;
//age = 26;

// this is okay to do


//const name = "Akash";
//name = "Skie"; // this is not okay to do! we can't reassign!


// Data Types:

// Number: Any numeric Value 

// const price = 99.99
// console.log(typeof(price)); prints Number

// Strings: Text in quotes.

// const name = "Akash" // It can be both double and single quotes as well -- No issue with that!


// const template = `my name is ${name}` // template literals
// console.log(template)
// console.log(typeof(template)); // Print the same String


// Boolean: True or False

// const isLoggedIn = true;
// const hasAccess = false;

// console.log(typeof(isLoggedIn) + " " + typeof(hasAccess))

/**
 * Data Types: (Primitive and Non Premitive)
 * =====Primitive===== 
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * Symbol
 * =====Non-Premitive=====
 * Object (1 Only)
*/


// Array:Ordered Collection of Values

// Creating Arrays: 

// Method 1
// const numbers = [1,2,3,4];

// Method 2: Array constructor
// const colors = new Array("red", "blue", "green");

// Method 3: Empty Array
// const empty = []; 

// Mixed Array (it can hold anything)
// const mixed = [42, "Name", true, null, {name: "Akash"}];

// Access Elements:

// const animals = ["dog", "cat", "bird", "fish"];
// console.log(animals[0]) // we'll be starting the index from 0, 1, 2 and so on
// console.log(animals[5]) // we'll get undefined as we don't have that much element in this array


// Get last item

// console.log(animals[animals.length - 1]);


// Modifying Array

// const cars = ["Toyota", "Honda", "Ford"];
// console.log("First result", cars);

// cars[1] = "BMW";
// console.log("Second result", cars);


// cars[3] = "Tesla"
// console.log("Second result(Adding in the end): ",cars);


//Essential Array Properties: 

// const items = ["a", "b", "c"];
// console.log(items.length)

// items.push("d") //adds at the end
// console.log(items.length)

// Core Array methods: (Adding and Removing)
// Push: Adds to the end

// const number = [1, 2, 3, 4, 5];

// number.push(6)
// console.log(number);

// Pop: Remove from the end

// number.pop()
// console.log(number)

// unshift: add to the beginning

// number.unshift(0)
// console.log(number)

// shift: Removes from the beginning

// number.shift()

// const storeShift = number.shift()
// console.log(storeShift) // Print 1
// console.log(number) // Print the [ 2, 3, 4, 5 ]


// Finding Elements: 

// indexof: checks the Positions of the elements: 

// const colors = ['red', 'blue', 'green', 'cyan']

// console.log(colors.indexOf("red")); // 0
// console.log(colors.indexOf("Red")); // -1 (not exists)


// includes: Checks if the item exists or not! and return true or false

// console.log(colors.includes("red")) // true
// console.log(colors.includes("Red")) // false


// Transforming Arrays: 

/** 
==== Transforming Arrays====
.slice(): Extract Portion -- does nnot modify orginal 
.splice() - Add/remove items (modifies original)

 */

// const letters = ["a", "b", "c", "d", "e"];

// slice()

// console.log(letters)
// console.log(letters.slice(1, 4)); // [ 'b', 'c', 'd' ]
// console.log(letters.slice(2)) // [ 'c', 'd', 'e' ]

// splice()

// console.log(letters.splice(1, 1));



// Looping through Arrays:

// for loop
// const scores = [75, 86, 74, 89]

// for( let i = 0; i < scores.length; i++){
//     console.log(`Scores ${i}: ${scores[i]}`);
// }


// for of loop:
// scores.sort() //Sort the whole array and then we are using the for of loop to print the elements; see it's easy!

// for (const score of scores){
//     console.log(score);
// }


/*
===== ADVANCE ARRAY METHODS =====
*/
//  For Each method: 

// scores.forEach((score, idx) => {
//     console.log(`Score: ${idx}: ${score}`);
// })


// Map method: Transform each item in the Array

// const numbers = [1, 3, 5, 7];
// const doubled = numbers.map(num => num * 2) //num is the callback parameter

// console.log(numbers)
// console.log(doubled)


// Filter Method: 

// const ages = [12, 13, 24, 25, 19, 20];

// ages.sort()

// const adults = ages.filter(age => age >= 18)
// console.log("Without reversed: ", adults)
// adults.reverse() // for reversing the elements in the array

// console.log(ages)
// console.log("With reversed: ",adults)


// Find: Get's the first item that matches;

// const users = [
//     { id: 1, name: "Akash" },
//     { id: 2, name: "Skie" },
//     { id: 2, name: "Mitrr" },
//     { id: 3, name: "Robo" }
// ]


// const userFind = users.find(u => u.id === 2)
// console.log(userFind);



/*

.reduce(): Combine all items into single value
.some(): check if ANY values matches?
.every(): Checks if ALL values matches?

*/



// const numbers = [1, 2, 3, 4, 5, 6]

// const reduceSum = numbers.reduce((total, sum) => total + sum, 0) // Number
// const reduceSum1 = numbers.reduce((total, sum) => total + sum, "") //String
// const reduceSum2 = numbers.reduce((total, sum) => total + sum, []) // Array

// const reduceSum3 = numbers.reduce((total, sum) => { 
//     total[sum] = sum * 2;  
//     return total 
// }, {}) // Object

// console.log(reduceSum);
// console.log(reduceSum1);
// console.log(reduceSum2);
// console.log(reduceSum3);




/*
Removing the Duplicate values:
*/ 


// const numbers = [1, 1, 3, 5, 4, 3, 2, 6 ,5, 4, 3]
// const unique = []

// Manual Method to find then check and remove
// for(let i = 0; i < numbers.length; i++){
//     if(!unique.includes(numbers[i])){
//         unique.push(numbers[i])
//     }
// }
// unique.sort()
// console.log(unique);


// cleaner and easy to Read Set Method!
// const uniqueSet = [...new Set(numbers)]
// console.log(uniqueSet);
