<template>
  <div class="datepicker-container" v-click-outside="test">
    <input type="text" v-model="formatDate" placeholder="选择时间" class="el-input__inner">
    <!-- <el-input></el-input> -->
    <!-- <el-input v-model="defaultValue" placeholder="请输入内容"></el-input> -->
    <div v-if="isVisible" class="datepicker-con el-picker-panel el-date-picker el-popper" :class="isTop">
      <div class="header">
        <i class="icon el-icon-d-arrow-left"></i>
        <i class="icon el-icon-arrow-left"></i>
        <h5 class="title">asdf</h5>
        <i class="icon el-icon-arrow-right"></i>
        <i class="icon el-icon-d-arrow-right"></i>
      </div>
      <div class="body">
        <ul class="week day-list">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ul class="day-con day-list">
          <li
            v-for="(day, index) of visibleDate"
            :key="index" @click="checkDay(day,index)"
          >
            <span v-text="new Date(day).getDate()" :class="{'check':checkDayIndex === index}"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import util from '../../util/tools'
export default {
  name: 'datepicker',
  data() {
    return {
      isVisible: false,
      isTop: '',
      checkDayIndex: null
    }
  },
  mounted() {
    // console.log(this.visibleDate)
  },
  methods: {
    test(...a) {
      this.isVisible = !this.isVisible
    },
    // 获取当前点击的位置
    getCurrentPosition(x, y) {
      let domWidth  = document.documentElement.innerWidth || window.innerWidth
      let domHeight  = document.documentElement.innerHeight || window.innerHeight
      this.isTop = domHeight - y > y ? 'bootom' : 'top'
      console.log(this.isTop)
    },
    checkDay(day, index) {
      let {year, month, today} = util.getYearMonthDay(day)
      this.checkDayIndex = index
      console.log(`你选择了：${year}-${String(month+1).padStart(2, '0')}-${String(today).padStart(2, '0')}`)
    }
  },
  computed: {
    // 格式化日期人格式 2019-05-09
    formatDate() {
      let {year, month, today} = util.getYearMonthDay(this.defaultValue)
      return `${year}-${month + 1}-${today}`
    },
    visibleDate() {
      // 获取当前时间 年，月，日
      let {year, month, today} = util.getYearMonthDay(this.defaultValue)
      // 通过当前年，月获取当前月的第一天
      let currentMonthFirstDay = util.getDate(year, month, 1)
      // 获取当前月第一天是星期几
      let week = currentMonthFirstDay.getDay() || 7
      // 获取当前排在第位的日期
      let startDay = currentMonthFirstDay - (week * 60 * 60 * 1000 * 24)
      let arr = []
      // 循环42天
      for(let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + (i * 60 * 60 * 1000 * 24)))
      }
      return arr
    }
  },
  props: {
    defaultValue: {
      type: Date,
       default() {
         return new Date
       }
    }
  },
  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        let hander = (e) => {
          // debugger
          if(el.contains(e.target)) {
            let a = binding + vnode
            if (!vnode.context.isVisible) {
              vnode.context.getCurrentPosition(e.clientX, e.clientY)
              binding.value(a)
            }
          } else {
            if (vnode.context.isVisible) {
              binding.value()
            }
          }
        }
        el.hander = hander
        document.addEventListener('click', el.hander)
      },
      unbind(el) {
        document.removeEventListener('click', el.hander)
      }
    }
  }
}
</script>