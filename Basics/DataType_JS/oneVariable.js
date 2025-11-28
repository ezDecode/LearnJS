const accountId = 12343;
let accountEmail = "akash@123gmail.com";
var accPass = "Akash56"; //Mostly we don't use it becuase it has no Block scope
accountCity = "Rayagada";

// accountId = 2 //Not Allowed(const can't be changed)

accountEmail = "asc@google.com"
accPass = "asdfs"
accountCity = "Bhubaneswar"
/**
 * Notes:
 * Prefer not to use the Fucking var! Because of the issue of the Block scope and the functional Scope.
*/ 


// console.log(accountId, accPass, acoountEmail, accountCity);

console.table([accountId, accPass, accountEmail, accountCity]);
