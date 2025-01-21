function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero !!";
    default:
      return "Error: Invalid operator !!";
  }
}

console.log(simpleCalculator(5, 3, "+"));
console.log(simpleCalculator(99, 66, "-"));
console.log(simpleCalculator(20, 7, "*"));
console.log(simpleCalculator(10, 2, "/"));
console.log(simpleCalculator(22, 11, "%"));
console.log(simpleCalculator(8, 0, "/"));
console.log(simpleCalculator(0, 12, "/"));

module.exports = simpleCalculator;
