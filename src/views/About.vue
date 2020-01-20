<template>
  <div class="about">
    <el-table :data="jsonData" @row-click="handleCommand($event, 'a','b')">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="位置" prop="hr.position"></el-table-column>
      <el-table-column label="价格" prop="hr.salary"></el-table-column>
      <el-table-column label="操作" prop="contact">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.contact[0]}}</span> -->
          <el-select v-model="value" placeholder="请选择" size="mini" @change="handleCommand($event, 'a','b')">
            <el-option
              v-for="item in scope.row.contact"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import jsonData from '@/util/tableData.json'
import util from '@/util/tools'
export default {
  name: 'test',
  data() {
    return {
      jsonData: [],
      value: ''
    }
  },
  created() {
    this.jsonData = jsonData.data
    let obj = {a:1,b:2}
    obj.c = obj
    let obj2 = util.deepClone(obj)
    // obj.a = 10
    console.log(obj);
    console.log(obj2);
    
  },
  mounted() {
  },
  methods: {
    rowClick(a,b,c) {
      console.log(a,b,c);
    },
    handleCommand(a, ...b) {
      console.log(a, b);
    }
  }
}
</script>
