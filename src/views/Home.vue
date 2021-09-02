<!--
 * @Author: your name
 * @Date: 2019-09-23 09:13:53
 * @LastEditTime: 2020-05-25 11:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-components\src\views\Home.vue
-->
<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<ul class="tab" v-tab={}>
			<li v-for="item of tab.tabList" :key="item" v-text="item" :class="{active: item === tab.currentIndex}" :title="tab.currentIndex" @click="tab.currentIndex = item"></li>
		</ul>
		<h1>{{$store.state.num}}</h1>
		<el-button type="primary" @click="clickme">点我</el-button>
		<custom-form
			:model="formData"
			:rules="rules"
			:inline="true"
			label-width="80px"
			label-position="left"
		>
			<custom-item label="用户名" prop="name">
				<div><custom-input v-model="formData.name"></custom-input></div>
			</custom-item>
			<custom-item label="密码" prop="password">
				<custom-input
					v-model="formData.password"
					type="password"
				></custom-input>
			</custom-item>
		</custom-form>
		<div>{{ formData }}</div>
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<date-picker v-model="nowDate"></date-picker>
		<div class="swiper">
			<ul>
				<li v-for="item of 5" :key="item">{{item}}asdfasdfasdfsd</li>
			</ul>
		</div>
		<el-button type="primary">test</el-button>
	</div>
</template>
<script>
// @ is an alias to /src
import customForm from '@/components/custom-form/custom-form'
import HelloWorld from '@/components/HelloWorld.vue'
import datePicker from '@/components/datepicker/datepicker'
import customItem from '@/components/custom-form/form-item'
import customInput from '@/components/custom-form/input'
import tab from '@/directives/tab.js'
import Swiper from '@/utils/swiper'
export default {
	name: 'home',
	data() {
		return {
			nowDate: new Date(),
			formData: {
				name: '',
				password: '',
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur',
					},
					{
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur',
					},
				],
				password: [
					{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur',
					},
					{
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur',
					},
				],
			},
			tab: {
				currentIndex: 'tab1',
				tabList: ['tab1','tab2','tab3','tab4','tab5']
			},
			swiper: null
		}
	},
	computed: {
		state() {
			return this.$store.state.testState
		},
	},
	mounted() {
		this.swiper = new Swiper('.swiper')
	},
	methods: {
		async clickme() {
			this.$store.commit('setState', true)
			const res = await this.$store.dispatch('setNum')
			if(res) this.$store.commit('setNum', res)
		},
	},
	directives: {
		tab
	},
	components: {
		HelloWorld,
		datePicker,
		customForm,
		customInput,
		customItem,
	},
}
</script>
