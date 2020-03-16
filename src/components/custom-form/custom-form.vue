<template>
  <div class="custom-form"> 
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'custom-form',
  props: {
    inline: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>