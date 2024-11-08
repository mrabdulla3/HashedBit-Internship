// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function sumOfDigit(num){
    if(num<10){
        return num;
    }
    let str=num.toString();
    let sum=0;
    for(let i=0; i<str.length; i++){
       sum+=parseInt(str[i]);
    }
   return sumOfDigit(sum);
}

console.log(sumOfDigit(456));