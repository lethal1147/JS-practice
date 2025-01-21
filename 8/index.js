function simpleCalculator(num1, num2, operater) {
  switch (operater) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

console.log(simpleCalculator(5, 3, "+"));
console.log(simpleCalculator(10, 2, "-"));
console.log(simpleCalculator(5, 3, "*"));
console.log(simpleCalculator(0, 8, "/"));
console.log(simpleCalculator(5, 0, "/"));
console.log(simpleCalculator(4, 0, "%"));
