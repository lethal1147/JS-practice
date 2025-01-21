function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([10, 24, 30, 42, 51, 66]));
console.log(filterEvenNumbers([99, 87, 38, 86, 38, 10]));
