//Write a function that takes an object with properties width and height and returns
//the area of a rectangle (width * height).

const rectangle = {
  height: 25,
  width: 25,
};

function areaOfRectangle(obj) {
  return obj.height * obj.width;
}

console.log(areaOfRectangle(rectangle));
