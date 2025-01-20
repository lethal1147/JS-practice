function numbersSum(arr) {
    return arr.reduce((sum, num) => {
      if (typeof num === 'number') {
        return sum + num;
      } else {
        return sum;
      }
    }, 0);
  }
  
  console.log(numbersSum([1, 2, "13", "4", "645"])); 
  console.log(numbersSum([true, false, "123", "75"])); 
  console.log(numbersSum([1, 2, 3, 4, 5, true])); 

  module.exports = numbersSum;