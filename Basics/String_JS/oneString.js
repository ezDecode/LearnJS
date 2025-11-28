// const name = "Akash"
// const repoCount = 50

// // console.log(name + repoCount);

// //String Interpolation!(Template Literals)
// console.log(`Hello my name is ${name}, and my repo count is ${repoCount}.`);

const gameName = new String('Aakash-AC-sky')

// console.log(gameName.toUpperCase());
// console.log(gameName[3].toUpperCase()); //We can access the letter with the index value
// console.log(gameName); //the orginal value remains same!
// console.log(gameName.charAt(3));


// const newString = gameName.substring(0, 4) //4th will not be included.
// console.log(newString);


// const anotherString = gameName.slice(-9, 3) //here we can add the negative values as well
// console.log(anotherString);

// const trimString = "    Akash     "

// console.log(trimString.trimEnd())


// const url = "https://creative%20sky.me/components"

// console.log(url.replace('%20', '-'))
// console.log(url.replace('creative%20sky', 'creativesky'))

// console.log(url.includes('sky')) //returns true!


// console.log(gameName.split('-'));


//we have separator and limit.
const words = gameName.split('-')

console.log(words[2]); //Will print the index value of the after splitting


