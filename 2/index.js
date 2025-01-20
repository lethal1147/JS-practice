function getGrade(percentage) {
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

console.log(getGrade(75)); 
console.log(getGrade(80)); 
console.log(getGrade(45)); 

module.exports = getGrade;