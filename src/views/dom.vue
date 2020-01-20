<template>
  <ul class="dom">dom
  </ul>
</template>
<script>
export default {
  name: 'dom',
  data() {
    return {
      total: 100000
    }
  },
  mounted() {
    // debugger
    let dom = document.querySelector('.dom')
    for(let i = 0; i < this.total; i++) {
      let li = document.createElement('li')
      li.innerText = i
      dom.appendChild(li)
    }
  }
}
</script>