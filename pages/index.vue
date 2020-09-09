<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">aiesecjp-web</h1>
      <h2 class="subtitle">AIESEC in Japan official website</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div>
        <AboutAiesec/>
      </div>
      <div>
        <IcxInternFeature/>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Button from "~/components/Button.vue";
import AboutAiesec from "~/components/AboutAiesec.vue";
import IcxInternFeature from "~/components/IcxInternFeature.vue";

export default {
  components: {
    AppLogo,
    Button,
    AboutAiesec,
    IcxInternFeature
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 30px;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
