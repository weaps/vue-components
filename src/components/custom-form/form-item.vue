<template>
  <label label="label" :class="{'inline': inline}">
    <span v-if="label" v-text="label"></span>
    <slot></slot>
    <p v-if="errorMessage" v-text="errorMessage" class="error"></p>
  </label>
</template>
<script>
export default {
  name: 'form-item',
  props: {
    label: String,
    inline: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
}
</script>
<style lang="scss" scoped>
.error {
  color: red;
  font-size: 14px;
  text-align: left;
}
</style>