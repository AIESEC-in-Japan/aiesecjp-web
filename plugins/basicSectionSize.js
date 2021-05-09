import Vue from 'vue'

Vue.use({
  install(Vue, option) {
    Vue.prototype.$basicSectionSize = () => {
      const maxSectionSize = 800; // base.scssと同じ値を使用してください
      const height = Vue.prototype.$window.height;
      return height < maxSectionSize ? height : maxSectionSize;
    }
  }
})
