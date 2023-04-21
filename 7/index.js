function countTrue(arr) {

  // Your code here

  let result = 0;
  arr.forEach((ele) => {
    if(ele === true) {
      result = result + 1
    } 
  });

  return result;
  }
  
  console.log(countTrue([true, false, false, true, false]))
  

  module.exports = countTrue;