// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

let string ='Minhaz Gaur';
let wrong ='Gaur';
let correct='Khan';
let result=corrrectfn(string,wrong,correct);
function corrrectfn(string,wrong,correct){
    return string.replace(wrong,correct);
}
console.log(result);