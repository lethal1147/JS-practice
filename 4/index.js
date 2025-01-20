function uniqueOddNumbers(arr) {
  return [...new Set(arr.filter(num => num % 2 !== 0))];
}

console.log(uniqueOddNumbers([1, 2, 3, 4, 5, 5, 7, 7, 9, 10]));

console.log(uniqueOddNumbers([2, 4, 6, 7]));

module.exports = uniqueOddNumbers;