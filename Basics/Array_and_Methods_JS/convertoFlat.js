// So we have an array with nested array and we want to convert it to a single array, like we have to flatten it. Without using any built-in functions.




// Manual function to flatten an array!

function flattenArray(arr, res = []) {
    //first to deal with we'll create a storage to store the flattened elements
    // let flatArray = [];  //commented cause we are passing with argument


    // ternary option
    for (const item of arr) {
        Array.isArray(item) 
            ? flattenArray(item, res)
            : res.push(item)
    }
    // for (let i = 0; i < arr.length; i++) {
    // for(const item of arr){
    //     if (Array.isArray(item)) {
    //         // let subFlat = flattenArray(arr[i]);
    //         flatArray.push(...flattenArray(item))
    //     } else {
    //         flatArray.push(item);
    //     }
    // }
    // return flatArray;

    return res;
}






let nestedArray = [1, 2, [45, 67, 776, [24, 35, 90], 65], 78];


// console.log(nestedArray.flat(Infinity)); // we can use this to flat: (and also we can add the depth level...) as depth numbers and also with Infinity to flat all the levels of nested array.

console.log(flattenArray(nestedArray));

