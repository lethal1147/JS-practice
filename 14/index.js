function findMax(numbers) {
    return Math.max(...numbers);
}

console.log(findMax([3, 7, 2, 9, 4])); 
console.log(findMax([-10, -5, -20])); 
console.log(findMax([1, 1, 1, 1]));
console.log(findMax([100, 50, 75, 200]));
console.log(findMax([0.1, 0.01, 0.001, 0.0001]));
console.log(findMax([-11, 22, -33, 44, -55, 66, -77, 88, -99]));

module.exports = findMax;