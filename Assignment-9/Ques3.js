//Write a function that takes an array as an argument, adds a new element to the end 
//of the array using push(), and then removes the last element using pop().
// Return the modified array.

function pushPopInArray(arr){
    arr.push(3);
    console.log("After the pushed element array:",arr);

   console.log("Poped element:", arr.pop());
    return "Modified array: "+ arr;
}

const arr=[1,2,5,7];
console.log(pushPopInArray(arr));