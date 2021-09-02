export default {
  bind(el, binding, vnode) {
    console.log('bind', el, binding, vnode)
    console.log(el.children)
  },
  inserted() {console.log('inserted')},
  update() {
    console.log('update')
  },
}