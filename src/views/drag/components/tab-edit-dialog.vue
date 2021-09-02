<template>
  <el-dialog
    class="tab-edit-dialog"
    title="管理栏目"
    :visible.sync="isTabDialog"
    width="800px"
    @close="close"
  >
    <div class="options">
      <el-row :gutter="20">
        <el-col :span="12" class="text-left">最多可添加9个栏目</el-col>
        <el-col :span="12" class="text-right">
          <el-button size="small" type="primary" @click="addData" :disabled="isEditing || dataLen > 8"
            >添加栏目</el-button
          >
        </el-col>
      </el-row>
    </div>

    <div class="table-box">
      <el-table
        ref="tableList"
        :data="copyTabList"
        size="small"
        :height="tabHeight"
      >
        <el-table-column type="index" width="200"></el-table-column>
        <el-table-column property="name" label="栏目">
          <template slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.name }}</span>
            <div v-else class="el-input el-input--mini el-input--suffix" style="width: 200px">
              <input v-focus type="text" class="el-input__inner" v-model="editContext">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" class="td-options">
          <template slot-scope="scope">
            <template v-if="!scope.row.isEdit">
              <el-button type="text" size="mini" @click="sortEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                v-if="scope.$index !== 0"
                type="text"
                size="mini"
                @click="sortUp(scope.$index)"
                >上移</el-button
              >
              <el-button
                v-if="scope.$index !== dataLen - 1"
                type="text"
                size="mini"
                @click="sortDown(scope.$index)"
                >下移</el-button
              >
              <el-button type="text" size="mini" @click="sortDel(scope.$index, scope.row.name)"
                >删除</el-button
              >
            </template>
            <template v-else>
              <el-button type="text" size="mini" @click="conformAdd(scope.$index)" :disabled="!editContextEmpty">确认</el-button>
              <el-button type="text" size="mini" @click="cancelAdd(scope.$index, scope.row)">取消</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isTabDialog = false">取 消</el-button>
      <el-button type="primary" @click="saveData">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "tab-edit-dialog",
  data() {
    return {
      isTabDialog: false,
      copyTabList: [],
      tabHeight: "",
      isEditing: false,
      editContext: ''
    };
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    editContextEmpty() {
      return this.editContext.trim()
    },
    dataLen() {
      return this.copyTabList.length
    }
  },
  created() {
    // 简易深拷贝
    this.tabList.map(item => {
      this.copyTabList.push({
        name: item.name,
        id: item.id,
        isEdit: false
      })
    })
    // this.copyTabList = JSON.parse(JSON.stringify(this.tabList));
    this.tabHeight = window.innerHeight < 700 ? 300 : '100%';
  },
  methods: {
    isShowDialog() {
      this.isTabDialog = true;
    },
    sortDel(index, name) {
      this.$confirm(`是否确定删除[${name}]`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.copyTabList.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
    },
    // tab 选项排序方法
    sortUp(index) {
      console.log(index)
      const [a, b] = this.copyTabList.slice(index-1, index+1);
      this.copyTabList.splice(index-1, 2, b, a);
    },
    sortDown(index) {
      const [a, b] = this.copyTabList.slice(index, index + 2);
      // debugger
      console.log(a, b, "xxx");
      this.copyTabList.splice(index, 2, b, a);
    },
    sortEdit(index, data) {
      this.isEditing = true
      data.isEdit = true
      this.editContext = data.name
      this.$nextTick(() => {
        // debugger
      })
      
      // console.log(index);
    },
    // 保存
    saveData() {
      this.$emit("saveTabData", this.copyTabList);
      this.isTabDialog = false;
      this.isEditing = false
    },
    // 添加tab
    addData() {
      this.$refs.tableList.bodyWrapper.scrollTop = this.$refs.tableList.bodyWrapper.scrollHeight;
      this.isEditing = true
      this.copyTabList.push({
        name: "",
        id: `tab${this.copyTabList.length + 1}`,
        isEdit: true,
      });
    },
    // 监听弹框是否关闭
    close() {
      this.isEditing = false
    },
    conformAdd(index) {
      if(!this.editContext) this.$message({type: 'error', message: '内容不能为空'})
      this.copyTabList[index].name = this.editContext
      this.copyTabList[index].isEdit = false
      this.isEditing = false
      this.editContext = ''
      this.$forceUpdate()
    },
    cancelAdd(index, data) {
      this.isEditing = false
      this.editContext = ''
      if(!data.name) {
        this.copyTabList.splice(index, 1)
      } else {
        data.isEdit = false
      }
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.options
  padding: 12px 20px
.table-box
  .el-button
    & + .el-button
      position: relative
      margin-left: 15px
      &::after
        position: absolute
        left: -8px
        content: ''
        width: 1px
        height: 10px
        background: #ddd
</style>
