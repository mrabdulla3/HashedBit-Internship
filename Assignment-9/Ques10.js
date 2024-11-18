//Create an array of numbers and write a function that uses the
//reduce() method to calculate the sum of all the numbers in the array.

function sumOfArrayElem(arr) {
  return arr.reduce((prev, curr) => prev + curr);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(sumOfArrayElem(arr));
