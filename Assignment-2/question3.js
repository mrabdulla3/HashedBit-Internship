// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(sal) {
  switch (true) {
    case (sal > 0 && sal < 500000):
      return 0;
    case (sal > 500000 && sal < 1000000):
      return sal * 0.10;
    case (sal > 1000000 && sal < 1500000):
      return sal * 0.20;
    case (sal > 1500000):
      return sal * 0.30;
    default:
      return "Invalid Salary!";
  }
}

console.log('Tax :',findTax(1100000));
