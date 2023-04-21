function getMonthInfo(monthNumber) {
  // Your code here
  // switch (monthNumber) {
  //   case 1:
  //     return ["January", 31];
  //     break;
  //   case 2:
  //     return ["February", 28];
  //     break;
  //   case 3:
  //     return ["March", 31];
  //     break;
  //   case 4:
  //     return ["April", 30];
  //     break;
  //   case 5:
  //     return ["May", 31];
  //     break;
  //   case 6:
  //     return ["June", 30];
  //     break;
  //   case 7:
  //     return ["July", 31];
  //     break;
  //   case 8:
  //     return ["August", 31];
  //     break;
  //   case 9:
  //     return ["September", 30];
  //     break;
  //   case 10:
  //     return ["October", 31];
  //     break;
  //   case 11:
  //     return ["November", 30];
  //     break;
  //   case 12:
  //     return ["December", 31];
  //     break;
  //   default:
  //     return "not a month";
  //}

  // const monthsName = [
  //   //'',
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ] 

  // const daysInMonth = [
  //   //'',
  //   31,
  //   28,
  //   31,
  //   30,
  //   31,
  //   30,
  //   31,
  //   31,
  //   30,
  //   31,
  //   30,
  //   31
  // ]

  // //ต้อง -1 เพราะอาร์เรย์มันเริ่ม 0 ถ้าอยากเข้าไปหามกราคมต้องพิมพ์ 0 ซึ่งคงไม่มีใครพิมพ์ เลยให้ -1
  // //ไม่ก็เอา -1 ออก แล้วเพิ่มอะไรใส่ index 0 ไปแทน เช่น index เปล่าๆ
  // return [monthsName[monthNumber-1], daysInMonth[monthNumber-1]]

  const dataList = [
    {
      monthsName: 'Jan',
      daysinMonth: 31
    },
    {
      monthsName: 'Feb',
      daysinMonth: 28
    },
    {
      monthsName: 'Mar',
      daysinMonth: 31
    }
  ]
  return [dataList[monthNumber-1].monthsName, dataList[monthNumber-1].daysinMonth]
}

console.log(getMonthInfo(2));
module.exports = getMonthInfo;
