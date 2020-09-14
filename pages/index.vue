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
import AboutAiesec from "~/components/AboutAiesec.vue"
import OurPrograms from "~/components/OurPrograms.vue"
import OurPartners from "~/components/OurPartners.vue"

export default {
  components: {
    AboutAiesec,
    OurPrograms,
    OurPartners
  }
}
</script>

<style></style>
