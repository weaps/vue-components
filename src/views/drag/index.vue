<template>
  <el-container class="drag-container">
    <el-header height="47px">
      <TemplateHeader />
    </el-header>
    <el-container>
      <el-aside width="292px">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="(item, index) of menuData"
            :key="item.id"
            :title="item.name"
            :name="index"
          >
            <draggable
              class="menu-group"
              :list="item.list"
              :group="{
                name: 'people',
                pull: 'clone',
                put: false,
                sort: false,
              }"
              :move="menuMove"
              @change="log"
              @add="add"
              @end="end"
              @remove="moveToList($event, item.list)"
              filter=".undraggable"
            >
              <MenuItem
                v-for="element in item.list"
                :key="element.n"
                :class="['item', { undraggable: selectedDragData[element.n] }]"
                :disabled="selectedDragData[element.n] !== undefined"
                :name="element.k"
              ></MenuItem>
            </draggable>
          </el-collapse-item>
        </el-collapse>
        <!-- fixd-sub-menu -->
        <div class="fixd-sub-menu">
          <el-checkbox v-model="isShowTabList" @change="isShowTabEvent"
            >栏目右侧是否适用二级导航</el-checkbox
          >
        </div>
      </el-aside>
      <el-main>
        <GeminiScrollbar class="container-scroll">
          <!-- header -->
          <div class="drag-nav">
            <el-row :gutter="20">
              <el-col :span="8">asdfasd</el-col>
              <el-col :span="16" class="text-right">
                <el-dropdown class="custom-dropdown">
                  <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
                  <span class="el-dropdown-link">
                    李晓年<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <!-- <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu> -->
                </el-dropdown>
              </el-col>
            </el-row>
          </div>
          <div class="drag-scroll-container clearfix">
            <!-- <EditAndDel /> -->

            <!--  -->
            <div class="left-drag-module">
              <!-- isDisabledDragObj[ORIGINGROUP.GROUP1] -->
              <div v-if="isDisabledDrag" class="area-disabled">
                <span class="tips">
                  <i class="el-icon-warning-outline"></i>
                  <h5>此区域不可用</h5>
                </span>
              </div>
              <draggable
                class="list-group"
                id="list1"
                :list="leftTtems"
                group="people"
                @change="log"
                @end="end"
                :move="move"
                :options="{
                  ghostClass: 'sortable-ghost',
                  containment: 'list-group',
                }"
                filter=".undraggable"
              >
                <el-card
                  v-for="element in leftTtems"
                  :key="element.n"
                  :class="['box-card', { undraggable: element.size === 1 }]"
                  shadow="hover"
                >
                  <div slot="header" class="clearfix">
                    <span>{{ element.k }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >操作按钮</el-button
                    >
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{ "列表内容 " + o }}
                  </div>
                </el-card>
              </draggable>
            </div>
            <div class="right-drag-module">
              <el-card
                v-if="isShowTabList"
                shadow="hover"
                :body-style="{ padding: 0 }"
              >
                <EditAndDel class="is-show" @editClick="editClick" />
                <ul class="tab-drga">
                  <li
                    :class="{ active: item.id === activeName }"
                    v-for="item of tabList"
                    :key="item.id"
                    v-text="item.name"
                    @click="tabClick(item)"
                  ></li>
                </ul>
              </el-card>

              <!-- tablist.length < 2 的情况下显示 -->
              <draggable
                v-if="!isShowTabList"
                id="list2"
                class="list-group"
                :list="items2"
                group="people"
                @change="log"
                :move="move"
                @end="end"
                @choose="choose"
                :options="{
                  ghostClass: 'sortable-ghost',
                  containment: 'list-group',
                }"
              >
                <el-card
                  v-for="element in items2"
                  :key="element.n"
                  class="box-card"
                  shadow="hover"
                >
                  <div slot="header" class="clearfix">
                    <span>{{ element.k }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >操作按钮</el-button
                    >
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{ "列表内容 " + o }}
                  </div>
                </el-card>
              </draggable>
              <!--  -->
              <template v-for="tab of tabList">
                <draggable
                  v-show="activeName === tab.id"
                  id="list2"
                  :key="tab.id"
                  class="list-group"
                  :list="tabDragObj[tab.id]"
                  group="people"
                  @change="log"
                  :move="move"
                  @end="end"
                  @choose="choose"
                  :options="{
                    ghostClass: 'sortable-ghost',
                    containment: 'list-group',
                  }"
                >
                  <el-card
                    v-for="element in tabDragObj[tab.id]"
                    :key="element.n"
                    class="box-card"
                    shadow="hover"
                  >
                    <div slot="header" class="clearfix">
                      <span>{{ element.k }}</span>
                      <el-button
                        style="float: right; padding: 3px 0"
                        type="text"
                        >操作按钮</el-button
                      >
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                      {{ "列表内容 " + o }}
                    </div>
                  </el-card>
                </draggable>
              </template>
            </div>
          </div>
        </GeminiScrollbar>
        <!-- 页面滚动区域 -->
      </el-main>
    </el-container>

    <!-- tab dialog -->
    <TabEditDialog v-if="isTabDialog" ref="tabEditDialog" :tabList="tabList" @saveTabData="saveTabData" />

  </el-container>
</template>

<script>
const ORIGINGROUP = {
  GROUP1: "list1", // 拖拽来源List1
  GROUP2: "list2", // 拖拽来源List2
};
const DRAGMODULES = {
  BIG: 2,
  SMALL: 1,
};
import areaData from "./data";
import draggable from "vuedraggable";
import MenuItem from "./components/menu-item";
import EditAndDel from "./components/edit-and-del";
import TabEditDialog from './components/tab-edit-dialog'
import TemplateHeader from './components/template-header'
export default {
  name: "App",
  components: { draggable, MenuItem, EditAndDel, TabEditDialog, TemplateHeader },
  data: function() {
    return {
      activeNames: [0, 1],
      leftTtems: [
        {
          k: "下山 ",
          n: 122423,
          size: 1,
        },
        {
          k: "肖战 ",
          n: 107837,
        },
      ],
      items2: [
        {
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
          size: 2,
        },
      ],
      selectedDragData: {},
      isDisabledDrag: false,
      isDisabledDragObj: {
        [ORIGINGROUP.GROUP1]: false,
        [ORIGINGROUP.GROUP2]: false,
      },
      tabList: [
        {
          name: "备课",
          id: "tab1",
        },
        {
          name: "课堂",
          id: "tab2",
        },
        {
          name: "家校",
          id: "tab3",
        },
        {
          name: "研训a",
          id: "tab4",
        },
        {
          name: "备课b",
          id: "tab5",
        },
        {
          name: "课堂c",
          id: "tab6",
        },
        {
          name: "家校d",
          id: "tab7",
        },
        {
          name: "研训e",
          id: "tab8",
        },
      ],
      activeName: "tab1",
      isShowTabList: false,
      tabDragObj: {},
      isTabDialog: false
    };
  },
  created() {
    this.menuData = areaData;
    console.log(this.isDisabledDragObj);
    this.isShowTabList = this.tabList.length > 1;
    this.tabList.forEach((item, index) => {
      this[`list${index}`] = []
      this.tabDragObj[item.id] = []
    })
    console.log(this)
  },
  methods: {
    handleChange() {},
    add: function() {
      this.list.push({ name: "Juan" });
    },
    move(ele) {
      // 禁止向menu区域拖拽
      if (ele.to._prevClass === "menu-group") return false;
      if (ele.to.id === ORIGINGROUP.GROUP1) {
        if (ele.draggedContext.element.size === DRAGMODULES.BIG) {
          this.isDisabledDrag = true;
          return false;
        }
      }
    },
    menuMove(ele) {
      // 判断当前;
      if (
        ele.to.id === ORIGINGROUP.GROUP1 &&
        ele.draggedContext.element.size === DRAGMODULES.BIG
      ) {
        this.isDisabledDrag = true;
        return false;
      }
    },
    moveToList(e, data) {
      this.$set(this.selectedDragData, data[e.oldIndex].n, data[e.oldIndex].n);
      console.log(this.selectedDragData, "moveToList");
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned",
      };
    },
    end() {
      console.log(this.isDisabledDragObj, "end");
      this.isDisabledDrag = false;
    },
    log: function(evt) {
      window.console.log(evt, "log");
    },
    choose(e, b) {
      console.log(e, b);
    },
    tabClick(item) {
      this.activeName = item.id;
    },
    isShowTabEvent(val) {
      if(!val) this.clearSelectedData()
    },
    // 清空已拖拽的数据
    clearSelectedData() {
      for(const key in this.tabDragObj) {
        this.tabDragObj[key] = []
      }
    },
    // delClick() {
    //   this.isTabDialog = true
    // },
    editClick() {
      this.isTabDialog = true
      this.$nextTick(() => {
        this.$refs.tabEditDialog.isShowDialog()
      })
    },
    saveTabData(data) {
      console.log(data)
      this.tabList = data
    }
  }
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
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
.sortable-ghost {
  border: 2px dashed #BBBFC4;
}
</style>

<style scoped lang="scss"></style>
