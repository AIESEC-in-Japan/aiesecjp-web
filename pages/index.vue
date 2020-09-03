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
import AboutAiesec from "~/components/AboutAiesec.vue";
import OurPrograms from "~/components/OurPrograms.vue";
import OurPartners from "~/components/OurPartners.vue";

export default {
  components: {
    AboutAiesec,
    OurPrograms,
    OurPartners,
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
}

</style>
