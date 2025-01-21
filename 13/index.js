function capitalizeWords(words) {
  return words.map((words) => words.charAt(0).toUpperCase() + words.slice(1));
}

console.log(capitalizeWords(["apple", "banana", "cherry"]));
console.log(capitalizeWords(["hello", "world"]));
