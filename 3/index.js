function calculateTax(income) {

  // your code here

  if (income > 500000) {
    return (income / 100) * 15;
  } else if (income > 300000) {
    return (income / 100) * 10;
  } else if (income > 150000) {
    return (income / 100) * 5;
  } else {
    return 0
  }

  // let tax = 0

  // if (income > 500000) {
  //     tax = income * 0.15;
  //   } else if (income > 300000) {
  //     tax = income * 0.10;
  //   } else if (income > 150000) {
  //     tax = income * 0.05;
  //   } else {
  //     tax = 0
  //   }

  //   return tax

}
console.log('Your tax is:' + calculateTax(150000));
console.log('Your tax is:' + calculateTax(220000));
console.log('Your tax is:' + calculateTax(700000));

module.exports = calculateTax;