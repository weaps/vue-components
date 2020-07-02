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
		<div style="height: 1000px"></div>
	</div>
</template>
<script>
// @ is an alias to /src
import customForm from '@/components/custom-form/custom-form'
import HelloWorld from '@/components/HelloWorld.vue'
import datePicker from '@/components/datepicker/datepicker'
import customItem from '@/components/custom-form/form-item'
import customInput from '@/components/custom-form/input'
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
		}
	},
	computed: {
		state() {
			return this.$store.state.testState
		},
	},
	mounted() {
		console.log(this.$xxx)
	},
	methods: {
		async clickme() {
			this.$store.commit('setState', true)
			const res = await this.$store.dispatch('setNum')
			if(res) this.$store.commit('setNum', res)
		},
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
