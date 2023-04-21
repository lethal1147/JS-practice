function numbersSum(arr) {

  // Your code here
  let result = 0

  // for(let i = 0; i < arr.length; i++) {
  //   if(typeof arr[i] === 'number') {
  //     result = result + arr[i]
  //     //result += arr[i] เขียนแบบนี้ก็ได้
  //   }
  // }
  // return result


  arr.forEach(ele => {
    if (typeof ele === 'number') {
      result = result + ele;
    } 
    
  });

  return result



} 

console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([1, 2, 3, 4, 5]))


module.exports = numbersSum;