<template>
<!-- 自定义组件要实现 v-model，必须实现:value, @input事件 -->
  <input :value="value" @input="onInput" :v-bind="$attrs" @blur="inputBlur">
</template>
<script>
export default {
  name: 'custom-input',
  props: {
    value: String
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    inputBlur(e) {
      this.$parent.$emit('validate', e)
    }
  }
}
</script>