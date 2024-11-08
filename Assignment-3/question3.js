// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';
let arr=string.split('');
arr.splice(3, 4, 'O', 'N', 'E', 'S', 'I', 'A'); 

let output = arr.join(''); 
console.log(output); 
