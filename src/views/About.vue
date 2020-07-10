<template>
  <div class="about">
    <img :src="imgUrl"
         alt=""
         width="100%"
         height="200" />
    <el-table :data="jsonData"
              @row-click="handleCommand($event, 'a', 'b')">
      <el-table-column label="姓名"
                       prop="name"></el-table-column>
      <el-table-column label="位置"
                       prop="hr.position"></el-table-column>
      <el-table-column label="价格"
                       prop="hr.salary"></el-table-column>
      <el-table-column label="操作"
                       prop="contact">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.contact[0]}}</span> -->
          <el-select v-model="value"
                     placeholder="请选择"
                     size="mini"
                     @change="handleCommand($event, 'a', 'b')">
            <el-option v-for="item in scope.row.contact"
                       :key="item"
                       :label="item"
                       :value="item">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div ref="imageDom"
         class="box">
      <table>
        <thead>
          <th>1</th>
          <th>3</th>
          <th>4</th>
        </thead>
        <tbody>
          <td>a</td>
          <td>b</td>
          <td>c</td>
        </tbody>
      </table>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
import axios from 'axios'
import jsonData from '@/util/tableData.json'
import util from '@/util/tools'
import html2canvas from 'html2canvas'
export default {
  name: 'test',
  data() {
    return {
      jsonData: [],
      value: '',
      imgUrl: ''
    }
  },
  created() {
    this.jsonData = jsonData.data
    let obj = { a: 1, b: 2 }
    obj.c = obj
    let obj2 = util.deepClone(obj)
    // obj.a = 10
    console.log(obj)
    console.log(obj2)
  },
  methods: {
    rowClick(a, b, c) {
      console.log(a, b, c)
    },
    handleCommand(a, ...b) {
      console.log(a, b)
    },
    clickGeneratePicture() {
      var c = window.document.createElement('canvas')
      var ctx = c.getContext('2d')
      ctx.rect(20, 20, 150, 100)
      ctx.fillStyle = 'green'
      ctx.fill()
      window.document.body.appendChild(c)
    }
  }
}
</script>
<style scoped>
.my-scroll-bar {
  height: 200px;
}
.box {
  position: absolute;
  left: -2000px;
  top: -2000px;
  width: 100px;
  height: 100px;
}
</style>
