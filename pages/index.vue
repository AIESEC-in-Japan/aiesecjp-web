<template>
  <section class="container">
    <div>
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

export default {
  components: {
    AboutAiesec,
    OurPrograms,
    OurPartners
  }
}
</script>

<style></style>
