//Given an object with various properties, write a function that returns
//an array of the object’s keys using Object.keys().

const obj = {
  First_name: "Abdulla",
  Last_name: "Gaur",
  Age: 21,
  Occupation: "Software Engineer",
};

function arrayOfObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(arrayOfObjectKeys(obj));
