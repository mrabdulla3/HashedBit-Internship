//Create an object called person with properties for name, age, and occupation.
// Write a function that logs a greeting message using these properties.

const person = {
  name: "Abdulla Gaur",
  Age: 21,
  Occupation: "Software Engineer",
};

function greetMessage(person) {
  console.log(`Hello , ${person.name} and ${person.Age} ,${person.Occupation}`);
}

greetMessage(person);
