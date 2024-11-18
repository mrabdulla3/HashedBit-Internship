//Write a function that takes two objects as arguments and merges them into one object
// using Object.assign(). Return the new object.

const obj1 = {
  name: "Abdulla Gaur",
  Age: 21,
};

const obj2 = {
  Occupation: "Software Engineer",
  Address: "Roorkee",
};

function combineObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

console.log(combineObjects(obj1, obj2));
