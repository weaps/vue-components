export default class Swiper {
  constructor(el, options) {
    if (!el) throw new Error('Swiper element cannot be empty')
    this.container = document.querySelector(el)
    this.ul = this.container.querySelector('ul')
    this.sliders = this.ul.querySelectorAll('li')
    this.options = options
    this.currentIndex = 0
    this.init()
  }
  init() {
    this.setSwiperWidth()
  }
  setSwiperWidth() {
    this.ul.style.width = this.sliders.length * 520 + 'px'
  }
  setTranslate() {
    this.ul.style.webkitTransform = `translate3d(${this.currentIndex * 520}px,0,0)`
  }
  autoPlay(direction='next') {
    if (direction === 'next') {
      this.currentIndex++
    } else {
      this.currentIndex--
    }
    this.setTranslate()
  }
}