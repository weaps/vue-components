<template>
	<div
		:class="['datepicker-container', { disabled: !count }]"
		v-click-outside="test"
	>
		<input
			type="text"
			v-model="formatDate"
			placeholder="选择时间"
			class="el-input__inner"
			readonly
		/>
		<!-- <el-input></el-input> -->
		<!-- <el-input v-model="value" placeholder="请输入内容"></el-input> -->
		<div
			v-if="isVisible"
			class="datepicker-con el-picker-panel el-date-picker el-popper"
			:class="isTop"
		>
			<div class="header">
				<i
					class="icon el-icon-d-arrow-left"
					@click="switchYear('prev')"
				></i>
				<i
					class="icon el-icon-arrow-left"
					@click="switchMonth('prev')"
				></i>
				<h5 class="title">
					<span v-text="`${cloneDate.year}年`"></span>
					<span v-text="`${cloneDate.month + 1}月`"></span>
				</h5>
				<i
					class="icon el-icon-arrow-right"
					@click="switchMonth('next')"
				></i>
				<i
					class="icon el-icon-d-arrow-right"
					@click="switchYear('next')"
				></i>
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
						:key="index"
						:class="{ disabled: !isDayDisabled(day) }"
						@click="checkDay(day, index, isDayDisabled(day))"
					>
						<span
							v-text="new Date(day).getDate()"
							:class="[
								{ check: isSelect(day) },
								{ today: isToday(day) },
							]"
						>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import util from '../../utils/tools'
export default {
	name: 'datepicker',
	data() {
		return {
			isVisible: false,
			isTop: '',
			checkDayIndex: null,
			cloneDate: {},
		}
	},
	created() {
		this.cloneDate = util.getYearMonthDay(this.value)
	},

	mounted() {
		console.log(this.$store.state.testState, this.count)
	},
	methods: {
		test() {
			this.isVisible = !this.isVisible
		},
		// 获取当前点击的位置
		getCurrentPosition(x, y) {
			let domHeight =
				document.documentElement.innerHeight || window.innerHeight
			this.isTop = domHeight - y > y ? 'bottom' : 'top'
		},
		checkDay(day, index) {
			// if (!type) return false
			let { year, month, today } = util.getYearMonthDay(day)
			this.checkDayIndex = index
			this.$emit('input', day)
			this.cloneDate = {
				year,
				month,
				today,
			}
			console.log(
				`你选择了：${year}-${String(month + 1).padStart(
					2,
					'0'
				)}-${String(today).padStart(2, '0')}`
			)
			this.test() // 选择日期后，关闭日期选择框
		},
		// 判断是否是当前月，不是当前月的添加disabled状态
		isDayDisabled(date) {
			let { year, month } = util.getYearMonthDay(
				util.getDate(this.cloneDate.year, this.cloneDate.month, 1)
			)
			let { year: a, month: b } = util.getYearMonthDay(date)
			return year === a && month === b
		},
		// 判断是否是今天
		isToday(date) {
			let { year, month, today } = util.getYearMonthDay(new Date())
			let { year: y, month: m, today: d } = util.getYearMonthDay(date)
			return year === y && month === m && today === d
		},
		// 选择日期效果
		isSelect(date) {
			let { year, month, today } = util.getYearMonthDay(this.value)
			let { year: y, month: m, today: d } = util.getYearMonthDay(date)
			return year === y && month === m && today === d
		},
		// 切换上一年，下一年
		switchYear(type) {
			let d = util.getDate(this.cloneDate.year, this.cloneDate.month, 1)
			if (type === 'next') {
				d.setFullYear(d.getFullYear() + 1)
			} else {
				d.setFullYear(d.getFullYear() - 1)
			}
			this.cloneDate = util.getYearMonthDay(d)
		},
		// 切换上个月、下个月
		switchMonth(type) {
			let d = util.getDate(this.cloneDate.year, this.cloneDate.month, 1)
			if (type === 'next') {
				d.setMonth(d.getMonth() + 1)
			} else {
				d.setMonth(d.getMonth() - 1)
			}
			this.cloneDate = util.getYearMonthDay(d)
		},
	},
	computed: {
		count() {
			return this.$store.state.testState
		},
		// 格式化日期人格式 2019-05-09
		formatDate() {
			let { year, month, today } = util.getYearMonthDay(this.value)
			return `${year}-${String(month + 1).padStart(2, '0')}-${String(
				today
			).padStart(2, '0')}`
		},
		// 获取当前月份的所有显示的day
		visibleDate() {
			// debugger
			// 获取当前时间 年，月，日
			let { year, month } = util.getYearMonthDay(
				util.getDate(this.cloneDate.year, this.cloneDate.month, 1)
			)
			// 通过当前年，月获取当前月的第一天
			let currentMonthFirstDay = util.getDate(year, month, 1)
			// 获取当前月第一天是星期几
			let week = currentMonthFirstDay.getDay() || 7
			// 获取当前排在第位的日期
			let startDay = currentMonthFirstDay - week * 60 * 60 * 1000 * 24
			let arr = []
			// 循环42天
			for (let i = 0; i < 42; i++) {
				arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
			}
			return arr
		},
	},
	props: {
		value: {
			type: Date,
			default: () => new Date(),
		},
	},
	directives: {
		clickOutside: {
			bind(el, binding, vnode) {
				let hander = (e) => {
					// debugger
					if (el.contains(e.target)) {
						let a = binding + vnode
						if (!vnode.context.isVisible) {
							vnode.context.getCurrentPosition(
								e.clientX,
								e.clientY
							)
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
			},
		},
	},
}
</script>
<style lang="sass" scoped>
.datepicker-container
  &.disabled
    .el-input__inner
      color: rgba(#606266, .3)
      background: #ddd
</style>
