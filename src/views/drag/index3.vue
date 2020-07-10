<template>
  <el-container>
    <el-container>
      <el-aside width="292px">
        
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(item, index) of menuData" :key="item.id" :title="item.name" :name="index">
            <drag v-for="n in item.list" :data="n" class="item" :key="n.n" @dragstart="dragstart" @dragend="dragend">
              <el-button size="small">{{ n.k }}</el-button>
            </drag>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="6">
            <div style="position:relative">
              <div v-if="notDrap" class="not-drap"></div>
              <drop-list
                :items="items"
                :class="['list list1']"
                @insert="onInsert($event, 'list')"
                @reorder="$event.apply(items)"
                @dragenter="dragenter"
              >
                <template v-slot:item="{ item }">
                  <drag class="item" :key="item.n" :accepts-data="(n) => n.id">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>卡片名称{{item}}</span>
                        <el-button
                          style="float: right; padding: 3px 0"
                          type="text"
                          >操作按钮</el-button
                        >
                      </div>
                      <div>
                        {{ item.k }}
                      </div>
                    </el-card>
                  </drag>
                </template>
                <template v-slot:feedback="{ data }">
                  <div class="item feedback" :key="data.n">{{ data.n }}</div>
                </template>
              </drop-list>
            </div>
          </el-col>
          <el-col :span="16">
            <el-tabs v-model="activeName" @tab-click="tabClick">
              <el-tab-pane label="首页" name="first">
                <h1>asfasdfas</h1>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
            <drop-list
              :items="items2"
              class="list list2"
              @insert="onInsert2"
              @reorder="$event.apply(items2)"
            >
              <template v-slot:item="{ item }">
                <drag class="item" :key="item.n">
                  <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                      <span>卡片名称</span>
                      <el-button
                        style="float: right; padding: 3px 0"
                        type="text"
                        >操作按钮</el-button
                      >
                    </div>
                    <div>
                      {{ item.k }}
                    </div>
                  </el-card>
                </drag>
              </template>
              <template v-slot:feedback="{ data }">
                <div class="item feedback" :key="data.n">{{ data }}</div>
              </template>
            </drop-list>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import areaData from "./data";
export default {
  name: "App",
  components: {
    Drag,
    DropList,
    // Drop
  },
  data: function() {
    return {
      activeNames: [0, 1],
      activeName: 'second',
      menuData: [],
      items: [{
        k: "下山 ",
        n: 122423,
      },
      {
        k: "肖战 ",
        n: 107837,
      },],
      items2: [{
        k: "冰雪奇缘 ",
        n: 76530,
      },
      {
        k: "心似烟火 ",
        n: 69945,
      },
      {
        k: "酒醉的蝴蝶原唱 ",
        n: 69664,
      },],
      notDrap: false
    };
  },
  created() {
    this.menuData = areaData;
  },
  methods: {
    dragstart() {
      return false
      // if(a.data.id) {
      //   this.notDrap = true
      // }
      // console.log(a)
    },
    dragend() {
      this.notDrap = false
    },
    dragenter(a) {
      console.log(a)
    },
    tabClick(a) {
      console.log(a)
    },
    handleChange() {},
    onInsert(event) {
      if(event.data.id) {
        this.$message({
          type: 'warning',
          message: `${event.data.k}不能拖到此模块`
        })
        return
      }
      this.items.splice(event.index, 0, event.data);
    },
    onInsert2(event) {
      this.items2.splice(event.index, 0, event.data);
    },
  },
};
</script>

<style lang="scss">
html,
body,
#app,
.v-application--wrap,
.v-content,
.v-content__wrap {
  height: 100%;
}

.drop-in {
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
}
.drop-forbidden {
  position: relative;
  &::after {
    background: rgba(0, 0, 0, 0.5);
  }
}
.not-drap {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>

<style scoped lang="scss">
.list {
  .el-card {
    margin-top: 20px;
    border: 0;
    &:last-child {
      margin-top: 0;
    }
  }
  .item {
    &.feedback {
      background-color: rgb(255, 220, 220);
      border: 2px dashed black;
    }

    &.drag-image {
      background-color: rgb(220, 255, 220);
      transform: translate(-50%, -50%);
    }
  }
  &.list1 {
    width: 352px;
  }
  &.list1 {
    width: 100%;
  }
}
</style>
