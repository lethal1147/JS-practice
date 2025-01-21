function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    let num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  }).join("\n");
}

console.log(fizzBuzz(15));
