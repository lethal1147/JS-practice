function getMonthInfo(monthNumber) {
  // Your code here
  switch (monthNumber) {
    case 1:
      return ["January", 31];
      break;
    case 2:
      return ["February", 28];
      break;
    case 3:
      return ["March", 31];
      break;
    case 4:
      return ["April", 30];
      break;
    case 5:
      return ["May", 31];
      break;
    case 6:
      return ["June", 30];
      break;
    case 7:
      return ["July", 31];
      break;
    case 8:
      return ["August", 31];
      break;
    case 9:
      return ["September", 30];
      break;
    case 10:
      return ["October", 31];
      break;
    case 11:
      return ["November", 30];
      break;
    case 12:
      return ["December", 31];
      break;
    default:
      return "not a month";
  }
}

console.log(getMonthInfo(3));
module.exports = getMonthInfo;
