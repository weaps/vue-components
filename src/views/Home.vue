<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <custom-form :inline="inline">
      <custom-item label="用户名">
        <custom-input v-model="formData.name"></custom-input>
      </custom-item>
      <custom-item label="密码">
        <custom-input v-model="formData.password" type="password"></custom-input>
      </custom-item>
    </custom-form>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
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
        password: ''
      }
    }
  },
  components: {
    HelloWorld,
    datePicker,
    customForm,
    customInput,
    customItem
  }
}
</script>
