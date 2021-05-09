import Vue from 'vue'

Vue.directive('scroll', {
  bind(el, binding, vnode) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
