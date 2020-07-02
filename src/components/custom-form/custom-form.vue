<template>
  <div class="custom-form"> 
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'custom-form',
  provide () {
    return {
      attrData: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    },
    inline: {
      type: Boolean,
      default: () => false
    },
    labelWidth: {
      type: String,
      default: () => ''
    },
    labelPosition: {
      type: String,
      default: () => 'left'
    },
    size: {
      type: String,
      default: () => ''
    }
  }
}
</script>