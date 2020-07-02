let Vue
const install = (_Vue) => {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if(this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    })

    // 初始化Mutations
    this.mutations = options.mutations || {}

    // 初始化actions

    this.actions = options.actions || {}
  }

  commit = (type, args) => {
    console.log(type, args, this)
    this.mutations[type](this.state, args)
  }
  dispatch(type, args) {
    // debugger
    console.log(type, args, this)
    // actions 里是异步操作，有的情况下需要return个Promise
    return this.actions[type](this, args)
  }
}

export default {Store, install}