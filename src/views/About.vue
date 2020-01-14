<template>
  <div class="about">
    <el-table :data="jsonData">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="位置" prop="hr.position"></el-table-column>
      <el-table-column label="价格" prop="hr.salary"></el-table-column>
      <el-table-column label="操作" prop="contact">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.contact[0]}}</span> -->
          <el-select v-model="value" placeholder="请选择" size="mini" @change="scope => handleCommand(scope, 'a','b')">
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
  },
  mounted() {
    console.log(jsonData);
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
