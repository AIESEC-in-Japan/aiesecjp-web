<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer :width="width" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: 0
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
