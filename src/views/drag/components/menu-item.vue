<template>
  <!-- <div>
    <el-button size="small" :disabled="disabled">{{ name }}</el-button>
    <MenuPop v-if="isShow"></MenuPop>
  </div> -->
  <el-popover
    placement="right-start"
    title="标题"
    width="200"
    :open-delay="500"
    :close-delay="0"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button size="small" slot="reference" :disabled="disabled"><p class="text-left text-ellipsis">{{name}}</p></el-button>
  </el-popover>
</template>
<script>
// import MenuPop from './menu-pop'
export default {
  name: 'drag-menu-item',
  props: {
    disabled: Boolean,
    menuData: {
      type: Object,
      default() {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    // MenuPop
  },
  computed: {
    isShow() {
      return Object.keys(this.menuData).length
    }
  }
}
</script>
<style lang="sass" scoped>
.text-left
  text-align: left
.text-ellipsis
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
</style>