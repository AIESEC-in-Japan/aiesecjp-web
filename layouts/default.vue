<template>
  <v-app>
    <BaseHeader />
    <nuxt class="nuxt-with-header" />
    <BaseFooter />
  </v-app>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

/* header の分 下げる */
.nuxt-with-header {
  margin-top: 5rem;
}

</style>
