<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <date-picker></date-picker>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import datePicker from '@/components/datepicker/datepicker'

export default {
  name: 'home',
  components: {
    HelloWorld,
    datePicker
  }
}
</script>
