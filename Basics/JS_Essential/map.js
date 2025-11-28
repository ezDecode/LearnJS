/*
map() loops through each item, runs a function, and then returns a new array with all the results!
NOTE: It does not change the original; it just transforms, returns a fresh array! 

Syntax:


const newArray = array.map((item, index, array) => {
    // Write code to perform the actions on the Array
    })
*/


// const mapArray = [1, 3, 5, 7, 9]

// const newArray = mapArray.map(number => number + 1);

// console.log("this is the Original: " + mapArray);
// console.log("this is the modified: " + newArray);



// Chain() map style as it is being used in the real world use cases


// const chainMap = ["Akash", "Skie", "God"]
//     .map(user => {
//         const upper = user.toUpperCase();
//         return `changed to uppercase ${user} -> ${upper}`
//     })
// 0



// console.log(chainMap);

// Some real world use cases for the concept:
// Transforming the API Data


// const users = [
//     {name: "Akash", id: 1, age: 22},
//     {name: "Skie", id: 2, age: 21},
//     {name: "Nora", id: 3, age: 25}
// ]

// const userSummaries = users.map(u => {
//     return {id: u.id, name: u.name}
// })
// console.log(userSummaries);



// Crafting a new Data Structure according to the Needs of the Application


const products = [
    {id: 1, name: "Milk", price: 25},
    {id: 2, name: "Biscuit", price: 20}
]


// So for all the Products we'll apply a Discount before sending them

const Discount = products.map(p => ({
    ...p, //-> This is Spread Operator(Job is to copy all the original Properties!)
    price: p.price * 0.9 //So we are overriding the price of the Product//
}));

// console.log(Discount)


//Creating the JSON Data to readable Format

// const row = [
//     {name: "Akash", country: "India"},
//     {name: "Skie", country: "Germany"}
// ]


// const readData = row.map(r => `${r.name} is from ${r.country}`)


// console.log(readData);


// Let's work with Nested Info.

const nested = [
    {id: 1, item: [{name: "Laptop"}, {name: "Phone"}]},
    {id: 2, item: [{name: "Computer"}, {name: "Tablet"}]}
]

// Now we'll access the items and info..


const accessNested = nested.map(ne => ne.item.map(i => i.name)).flat();

console.log(accessNested);
