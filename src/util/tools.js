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
  },
  deepclone(obj) {
    // debugger
    if (obj == null) return obj
    if (typeof obj != 'object') return obj
    // 判断是否是日期对象
    if (obj instanceof Date) return new Date(obj)
    // 判断是否是正则对象
    if (obj instanceof RegExp) return new RegExp(obj)
    let res = new obj.constructor
    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = this.deepclone(obj[key])
      }
    }
    return res
  }
}
export default util
