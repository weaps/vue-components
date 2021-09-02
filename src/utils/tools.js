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
  // 深度拷贝
  deepClone(origin, hash=new WeakMap) {
    // debugger
    // 去除Null值
    if(origin === null) return origin
    // 把不是对象类型的数据直接返回
    if(typeof origin !== 'object') return origin
    // 判断时间对象
    if(origin instanceof Date) return new Date(origin)
    // 判断正则对象
    if(origin instanceof RegExp) return new RegExp(origin)
    if(hash.has(origin)) {
      return hash.get(origin)
    }
    let instance = new origin.constructor
    hash.set(origin, instance)
    for(let key in origin) {
      // 去除原型上的属性
      if(origin.hasOwnProperty(key)) {
        instance[key] = this.deepClone(origin[key], hash)
      }
    }
    return instance
  }
}
export default util
