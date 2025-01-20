function countTrue(arr) {
    return arr.filter(x => x).length;
  }
  
  console.log(countTrue([true, false, false, true, false])); 
  console.log(countTrue([false, false, false, false])); 
  console.log(countTrue([])); 

  module.exports = countTrue;