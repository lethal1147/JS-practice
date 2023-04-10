function uniqueOddNumbers(numbers) {

  // Your code here
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i])
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i])
    }
  }
  
  //console.log(result);

  let uniqueNum = result.filter((element, index) => {
    console.log(element, index)
    console.log(result.indexOf(element))
    return result.indexOf(element) === index;
    
});

return uniqueNum;

//------------------------------

//ของพี่ปัน ได้เหมือนกัน
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     if (result.includes(numbers[i]) === false) {
//       result.push(numbers[i]);
//     }
//   }
// }

//return result

//---------------------------


//ของพี่ปัน อีกอัน
// const result = [];
// numbers.forEach((element) => {
//   if(element % 2 !== 0) {
//     if(result.includes(element) === false) {
//       result.push(element)
//     }
//   } 
// })
// return result

}
uniqueOddNumbers([1, 2, 3, 4, 5, 5, 7, 7, 9, 10])
//console.log(uniqueOddNumbers([2, 4, 6, 7]));
//console.log(uniqueOddNumbers([1, 2, 3, 4, 5, 5, 7, 7, 9, 10]));


module.exports = uniqueOddNumbers;