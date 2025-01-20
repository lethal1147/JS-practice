function calculateTax(income) {
  if (income >= 500000) {
    return income * 0.15;
  } else if (income >= 300001) {
    return income * 0.10;
  } else if (income >= 150001) {
    return income * 0.05;
  } else {
    return 0;
  }
}

console.log(calculateTax(150000)); 
console.log(calculateTax(220000)); 
console.log(calculateTax(700000)); 

module.exports = calculateTax;