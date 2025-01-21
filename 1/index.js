function ageClassification(age) {
  if (age <= 18) {
    return "Minor";
  } else if (age >= 65) {
    return "Senior";
  } else {
    return "Adult";
  }
}
console.log(ageClassification(25));  
console.log(ageClassification(70));  
console.log(ageClassification(15)); 

export default ageClassification;
