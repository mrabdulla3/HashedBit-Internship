// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

let inputArr = [1,2,3,9,10,7,5,4,3];
let result=inputArr.filter(valueGreaterThanFive);
function valueGreaterThanFive(val){
   return val>5;
}
console.log(result);

