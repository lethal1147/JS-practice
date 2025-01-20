function uncensor(censored, vowels) {
  let vowelIndex = 0;
  let result = "";

  for (let char of censored) {
    if (char === "*") {
      result += vowels[vowelIndex];
      vowelIndex++;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));
