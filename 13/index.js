function capitalizeWords(strings) {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(capitalizeWords(['apple', 'banana', 'cherry'])); 
console.log(capitalizeWords(['hello', 'world'])); 
console.log(capitalizeWords(['javascript', 'is', 'fun'])); 
console.log(capitalizeWords(['one', 'two', 'three', 'four', 'five', 'six', 'seven' , 'eight', 'nine', 'ten'])); 

module.exports = capitalizeWords;