<template>
  <section class="container">
    <div>
      <MainView />
      <AboutAiesec />
      <OurPrograms />
      <OurPartners />
    </div>
  </section>
</template>

<script>
import AboutAiesec from "@/components/top/AboutAiesec.vue"
import OurPrograms from "@/components/top/OurPrograms.vue"
import OurPartners from "@/components/top/OurPartners.vue"
import MainView from "@/components/top/MainView"

export default {
  components: {
    AboutAiesec,
    OurPrograms,
    OurPartners,
    MainView
  }
}
</script>

<style></style>
