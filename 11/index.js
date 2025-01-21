function findLongestWord(word) {
  return word.sort((a, b) => b.length - a.length)[0];
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"]));
console.log(findLongestWord(["one", "three", "seven", "twenty"]));
console.log(
  findLongestWord([
    "รองเท้าผ้าใบ",
    "เสื้อยืด",
    "กางเกงขาสั้น",
    "รองเท้าแตะที่ขาดแล้ว",
  ])
);
