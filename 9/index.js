function ountOccurrences(arr, value) {
  return arr.filter((item) => item === value).length;
}

console.log(ountOccurrences([1, 2, 3, 2, 4], 2));
console.log(ountOccurrences(["apple", "banana", "apple", "orange"], "apple"));
console.log(
  ountOccurrences(
    ["ก๋วยเตี๋ยว", "ขัาวผัด", "ข้าวผัดกะเพรา", "กระเพราะปลา"],
    "น้ำมัน"
  )
);
console.log(
  ountOccurrences(["Converse", "Nike", "Adidas", "Keds"], "Converse")
);
