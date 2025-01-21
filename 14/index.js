function findMax(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

console.log(findMax([3, 7, 2, 9, 4]));
console.log(findMax([-10, -5, -20]));
console.log(findMax([100]));
console.log(findMax([]));
