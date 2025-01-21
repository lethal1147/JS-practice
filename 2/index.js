function getGrade(percentage) {
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

console.log(getGrade(88));
console.log(getGrade(77));
console.log(getGrade(66));
console.log(getGrade(55));
console.log(getGrade(45));

export { getGrade as default };
