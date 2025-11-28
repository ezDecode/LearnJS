// It's quite simple which runs and Test on each element of the Array; Keeps them who passes it.
// It may return the same amount of data or may be fewer! Depends upon the condition. 

const number = [1, 87, 54, 32, 56, 86]

const findBigger = number.filter(num => num > 40);
// console.log(findBigger);



const role = [
    {name: "Akash", role: "admin"},
    {name: "Arun", role: "member"},
    {name: "Skie", role: "member"},
]


const findAdmin = role.filter(adm => adm.role === "admin")

console.log(findAdmin);
