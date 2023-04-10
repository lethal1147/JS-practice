function getGrade(percentage) {

  // Your code here
  if (percentage > 100) {
    return 'Max percentage shoule be 100';
  }

  if (percentage < 0) {
    return 'Min percentage shoule be 0';
  }

  if (percentage >= 80) {
    return 'A';
  } else if (percentage >= 70) {
    return 'B';
  } else if (percentage >= 60) {
    return 'C';
  } else if (percentage >= 50) {
    return 'D';
  } else {
    return 'F';
  }

}

console.log(getGrade(85))


module.exports = getGrade;