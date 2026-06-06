// let arr = ["apple", "banana", "Litchi", "Mango"]

// let removed = arr.splice(0, 2, "Y", "X")

// console.log("Removed List items: ", removed);
// console.log("Initial Array value after removed: ", arr);


// let arr2 = ["apple", "banana", "Litchi", "Mango"]

// let removed2 = arr2.splice(0, 2, "Y", "X")

// console.log("Removed List items Two: ", removed2);
// console.log("Second Initial Array value after removed: ", arr2);


// includes() - Returns true or false


// let allowedRoles = ["admin", "manager"]

// if(allowedRoles.includes("user")){
//     console.log("Access Granted")
// }else{
//     console.log("Access Denied");
    
// }


// let arr = ["apple", "banana", "Litchi", "Mango"]


// console.log(arr.indexOf("Litchiiii"));

//Old school method of checking if anything exists or not but we have includes() to check (And this is the new method to check and more easier and cleaner method)
// if(arr.indexOf("Litchi") !== -1){
//     console.log("Found")
// }else{
//     console.log("Not Found")
// }



//cleaner and easier method


// if(arr.includes("Litchi")){
//     console.log("Found")
// }else{
//     console.log("Not found");
// }


// find() - Returns the first element that matches the condition


// let users = [
//     {id: 1, name: "Rahul"},
//     {id: 2, name: "Akash"},
//     {id: 3, name: "Vikash"}
// ]

// let findUser = users.find(u => u.id === 1)

// console.log(findUser);   



//findIndex() - same as the find() but returns the idx/position of the element

// let userFindIndex = users.findIndex(u => u.id === 1)

// console.log("Index of the Element: ", userFindIndex);   // this will return 0 because the element with id 1 is at index 0 in the array!
// console.log("Name: ", users[userFindIndex].name);


// How we'll use this in a Production? and to remove the User with specific ID!

// let users = [
//     {id: 1, name: "Rahul"},
//     {id: 2, name: "Akash"},
//     {id: 3, name: "Vikash"}
// ]



// let targetID = 1
// let userIndex = users.findIndex(u => u.id === targetID)

// if(userIndex !== -1){
//     const removed = users.splice(userIndex, 1)
//     console.log("Removed:", removed)
//     console.log("Updated Users List:", users)
//     console.log("Remaining users:", users.map(u => u.name))
// }else{
//     console.log(`No index with ${targetID}`)
// }


// map() - transforms into new array which is of same length!


let product = [
    {item: "mouse", price: 250},
    {item: "Laptop", price: 990}
]


let prodTax = product.map(p => ({
    ...p,
    pricewithTax: p.price * 1.18,
}))

console.log(prodTax.map(p => p.pricewithTax));
