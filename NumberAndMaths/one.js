// const score = 400
// console.log(score);


// const blc = new Number(400)
// console.log(blc);

// const numtoStr = score.toString()
// console.log(numtoStr);
// console.log(typeof(numtoStr));


//toLocalString

// const otherNum = 1000000

// console.log(otherNum.toLocaleString('en-IN'));

// ============== Maths ==============

// console.log(Math.PI);

// const number = Math.PI
// console.log(number.toFixed(3));
// console.log(Math.round(number));

// but there is other methods by which we can control the round -> floor, ceil
// console.log(Math.ceil(3.1))

// console.log(Math.floor(3.9))

// console.log(Math.min(3,6,1,2))
// console.log(Math.max(3,6,1,2))


// console.log(Math.floor(Math.random() * 10) + 1) ;

//Function to print random integers between 1-6
function randomInt(min, max){
    return Math.floor(Math.random() * (max-min+1))+min;
}

console.log(randomInt(1, 6))