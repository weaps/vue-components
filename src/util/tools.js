const util =  {
  getYearMonthDay(day) {
    let year = day.getFullYear(),
        month = day.getMonth(),
        // week = day.getDay(),
        today = day.getDate()
    return {year, month, today}
  },
  getDate(year, month=0, day=1) {
    return new Date(year, month, day)
  }
}
export default util