function uncensor(censored, vowels) {
    let result = '';
    let vowelIndex = 0;
    for (let i = 0; i < censored.length; i++) {
      if (censored[i] === '*') {
        result += vowels[vowelIndex];
        vowelIndex++;
      } else {
        result += censored[i];
      }
    }
    return result;
  }
  
  console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
  console.log(uncensor("abcd", "")); 
  console.log(uncensor("*PP*RC*S*", "UEAE")); 

  module.exports = uncensor;