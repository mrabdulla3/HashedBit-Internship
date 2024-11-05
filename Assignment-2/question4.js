// 4. Write a function to perform this.
// You are given two numbers n1 and n2. 
//You need to find the sum of the products of their corresponding digits. 
//So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProduct(n1,n2){
    let sum=0;
    let num1=n1.toString();
    let num2=n2.toString();
    while(num1.length<num2.length){
        num1='0'+num1;
    }
    while(num2.length<num1.length){
        num2='0'+num2;
    }
   for(let i=0; i<num1.length; i++){
    sum+=num1[i]*num2[i];
   }

return sum;
}
console.log(sumOfProduct(61,346));

