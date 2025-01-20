function calculateTax(income) {
  let tax = 0;
  if (income > 500000) {
    tax = income * 0.15;
  } else if (income > 300000) {
    tax = income * 0.1;
  } else if (income > 150000) {
    tax = income * 0.05;
  } else {
    tax = 0;
  }
  return tax;
}

console.log(calculateTax(150000));
console.log(calculateTax(220000));
console.log(calculateTax(700000));
