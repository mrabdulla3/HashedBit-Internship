//Write a function that filters out all even numbers from an array of numbers using the
// filter() method. Return the new array of odd numbers

function filterEvenNumbers(arr){
    return arr.filter((elem)=>elem%2!=0);
}
const arr=[1,2,3,4,5,6,7];
console.log(filterEvenNumbers(arr));