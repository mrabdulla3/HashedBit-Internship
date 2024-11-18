//Create an array of numbers and write a function that uses the map() method to return
// a new array containing each number squared.

function squareOfArray(arr){
    return arr.map((elem)=>Math.pow(elem,2));
}

const arr=[1,2,3,4,5];
console.log(squareOfArray(arr));