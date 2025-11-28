//Run this file just move the respective directory and then <node> then the file name.

/*
    - JavaScript is a Dynamically typed Language.
*/

// let integer = 10;
// console.log(integer);

// let float = 1.2;
// console.log(float);


// let greet = "Hello"
// let greet1 = 12
// console.log(typeof greet, typeof greet1);


/*
    - Const are block scoped,
    - need to be initialized along with declaration
    - re-assign is not allowed.
*/


// const score = 45; //Number type
// const score = false; //Boolean type
// const score = 'false'; // String type
// console.log(typeof score);


// const fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Cherry"); //This is allowed.
// console.log(fruits);


// Template Literals:

// const name = 'Akash';
// console.log(`Hello, ${name}`);


// const message = 'Lamaooooooo';
// console.log(message);

// +++++++++++++++++++++++++++++++++++++++++++++++++


/**
 * Memory types: 
 * Stack and Heap
 * Stack is a premitive type and Heap is Non-Premitive!!
*/


// Understanding how the Stack memory 

// let perName = "Akash Choudhury"

// let newName = perName

// newName = "AnotherName Suggest"
// console.log(newName);
// console.log(perName);


// Understanding How the Heap Memory works

let userOne = {
    email: "hi@gmail.com",
    upi: "sbi@yml.co"
}

let userTwo = userOne;

userTwo.email = "hello@gmail.com"
userTwo.upi = "icici@yml.co"


console.log(userTwo.email, userTwo.upi); //We are getting the reference of the real object or Data
console.log(userOne.email, userOne.upi);
