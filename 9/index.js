function countOccurrences(array, value) {
    return array.reduce((count, current) => current === value ? count + 1 : count, 0);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); 
console.log(countOccurrences(['apple', 'banana', 'apple', 'orange'], 'apple'));
console.log(countOccurrences([true, false, true, true], true)); 
console.log(countOccurrences([1, 2, 3], 4));
console.log(countOccurrences([1, 3, 5], 2));
console.log(countOccurrences(['bmw', 'benz', 'toyota', 'audi', 'ford', 'honda', 'mazda', 'nissan', 'subaru'], 'audi'));
console.log(countOccurrences(['samsung', 'iphone', 'xiaomi', 'oppo', 'iphone', 'iphone', 'iphone', 'samsung', 'xiaomi'], 'iphone'));

module.exports = countOccurrences;