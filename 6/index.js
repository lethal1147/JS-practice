function numbersSum(arr) {
  return arr.reduce((sum, current) => {
    if (typeof current === "number") {
      return sum + current;
    }
    return sum;
  }, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"])); 
console.log(numbersSum([true, false, "123", "75"])); 
console.log(numbersSum([1, 2, 3, 4, 5, true])); 

export { numbersSum as default };
