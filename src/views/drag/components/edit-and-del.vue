<template>
  <div class="edit-and-del" :style="{left: position.x, top: position.y}">
    <span @click="editClick"><icon icon="edit" size="1rem" color="#fff"></icon>编辑</span>
    <span @click="delClick"><icon icon="del" size="1rem" color="#fff"></icon>删除</span>
  </div>
</template>
<script>
export default {
  name: 'edit-and-del',
  props: {
    position: {
      type: Object,
      default() {
        return {x: 0, y: '-32px'}
      }
    }
  },
  methods: {
    editClick() {
      this.$emit('editClick')
    },
    delClick() {
      this.$emit('delClick')
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-and-del
  position: absolute
  height: 32px
  background: rgba(0,0,0,0.5)
  border-radius: 2px
  border: 1px solid rgba(3,3,3,0.2)
  z-index: 10
  font-size: 0
  &:hover
    background: rgba(0, 0, 0, .6)
  span
    display: inline-block
    line-height: 32px
    padding: 0 12px
    font-size: 14px
    color: #fff
    text-decoration: none
    cursor: pointer
    svg
      color: red
      margin-right: 8px
    &:hover
      color: rgba(#fff, .8)
  span + span
    position: relative
    &::after
      position: absolute
      left: 0
      top: 50%
      content: ''
      width: 1px
      height: 10px
      background: rgba(255, 255, 255, .5)
      font-size: 0
      transform: translateY(-50%)
      
</style>