//Q1) Create an array of states in india.
//Remove all the names starting with vowels from the list. Use array.filter.

let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
let result =states.filter(statesNotStartWithVowel);

function statesNotStartWithVowel(state){
    if( state.charAt(0).toLowerCase() != 'a' && state.charAt(0).toLowerCase() != 'e' &&
    state.charAt(0).toLowerCase() != 'i' && state.charAt(0).toLowerCase() != 'o' &&
    state.charAt(0).toLowerCase() != 'u'){
        return state;
    }
}

console.log(result);