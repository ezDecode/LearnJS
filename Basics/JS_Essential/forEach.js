//forEach Concept:

// const numbers = [1,2,3,4,5]


// This is the simple way to iterate through an array

// numbers.forEach(element => {
//     console.log(element);
// });


// we use it in the real world:
// Recently I've used this to send mail to new usersQ One good real life example!
// const mail = ["a@mail.com", "b@mail.com", "c@mail.com"];
// mail.forEach(mail => sendWelcomeMail(email));



// Important things to remember

// it does not return a new array; map is there for this
// it can not be stopped early; unlike the for loop
// this is synchronous; do not await for async calls


//Simple mail sending to all the users we have: for better hands on experience


// const userNew = [
//     {name: "Akash", mail: "akash@mail.com"},
//     {name: "Alex", mail: "alex@mail.com"},
//     {name: "Nora", mail: "nora@mail.com"}
// ]


// userNew.forEach(user => {
//     console.log(`A welcome mail sent to ${user.name} having ${user.mail}`);
// })


// We'll send something to active users only!


const userActive = [
    {name: "Skie", active: true},
    {name: "Alex", active: false},
    {name: "Nirmal", active: false},
    {name: "Bayan", active: true},
    {name: "Ryan", active: true},
    {name: "Norea", active: false}
]


userActive.forEach(user => {
    if(!user.active) return;
    console.log(`This mail is sent to all the active users; Active ${user.name}`);
})