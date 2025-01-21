function getEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(getEvenNumbers([7, 9, 11])); 
console.log(getEvenNumbers([10, 15, 20, 25, 30])); 
console.log(getEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99]));
console.log(getEvenNumbers([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(getEvenNumbers([]));

module.exports = getEvenNumbers;