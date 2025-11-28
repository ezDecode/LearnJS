"use strict" // To use modern JavaScript

// Comparison 

//console.log("2" > 1); // Print true 
// console.log("2" < 1); // Print False


// console.log("2"==2);
//=== checks strictly(With datatype)


// console.log(null>0); //False
// console.log(null==0); //False
// console.log(null>=0); //True

/** Notes ** 
 * The reason is that an equality check(==) and comparisons(<, >, <=, >=) works differnently in JS.
 * Comparisons convert null into a number and Treating is as 0(value).
 * Thats the reason that (null == 0) false and the (null > 0) is False
*/

// Same with the Undefined, let's check it out
// console.log(undefined == 0); //output is False


// === <Strict check> (It checks the value as well as the data type.)

console.log("2"==2); //Output is True for this(here the "2" convert into int and then checks so it give the Output as true.)
console.log("2"===2); //Output is False for this. It is check strictly (here the conversion doesn't takes place.)