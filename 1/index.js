function determineAgeCategory(age) {
  if (age <= 18) {
    return 'Minor';
  } else if (age < 65) {
    return 'Adult';
  } else {
    return 'Senior';
  }
}

console.log(determineAgeCategory(25));
console.log(determineAgeCategory(70));

module.exports = determineAgeCategory;