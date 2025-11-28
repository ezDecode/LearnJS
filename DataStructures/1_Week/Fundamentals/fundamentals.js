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