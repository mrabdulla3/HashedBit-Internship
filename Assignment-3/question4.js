// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the
//  string.

let str='abdulla gaur anas mirza';
const checkVowel = /^[aeiouAEIOU]$/i;
let vowel=0;
let consonent=0;
for(let i=0; i<str.length; i++){
    if(checkVowel.test(str.charAt(i))){
        vowel++;
    }else{
        consonent++;
    }
}
console.log(vowel + " "+ consonent);