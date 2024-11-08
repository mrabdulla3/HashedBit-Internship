//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(n1, op, n2) {
  let ans;
  switch (op) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    default:
      console.log("Invalid case!");
  }
  return ans;
}
console.log(calculate(2, "+", 6));
console.log(calculate(2, "%", 6)); // Invalid Case
