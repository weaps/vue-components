<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>asdfasd</el-button>
    <el-checkbox-group v-model="checkedCities" @change="a => handleCheckedCitiesChange('a',...a)">
      <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <input type="file" @change="changeFile">
  </div>
</template>
<script>
  import util from "../util/tools";

  export default {
    data() {
      return {
        checkAll: false,
        cityOptions: ['上海', '北京', '广州', '深圳'],
        checkedCities: ['上海', '北京'],
        cities: this.cityOptions,
        isIndeterminate: true
      }
    },
    mounted() {
      let arr = {a:{arr: [1,2,3,{sex: 'male'}]}}
      let res = util.deepclone(arr)
      arr.b = 'test'
      console.log(arr,res)
      let instance = {
        [Symbol.hasInstance] (value) {
          return true
        }
      }
      console.log({a:1} instanceof instance)
    },
    methods: {
      handleCheckedCitiesChange(...a) {
        console.log(a)
      },
      changeFile(e) {
        debugger
        let reader = new FileReader()
        reader.onload = function () {
          debugger
          console.log(reader)
        }
      }
    }
  }
</script>
<style lang="sass" scoped>
  .el-button
    border-color: #2c3e50
  .el-switch
    &.is-checked
      .el-switch__core
        background: aqua
</style>
