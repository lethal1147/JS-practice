function getMonthInfo(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return [monthNames[monthNumber - 1], monthDays[monthNumber - 1]];
}

console.log(getMonthInfo(3));
console.log(getMonthInfo(1));
console.log(getMonthInfo(2));
console.log(getMonthInfo(4));
console.log(getMonthInfo(5));
console.log(getMonthInfo(6));
console.log(getMonthInfo(12));

export { getMonthInfo as default };
