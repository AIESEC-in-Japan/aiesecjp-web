<template>
  <div class="wrapper">
    <OgxTop />
    <OgxFeature />
    <OgxGVGTDetail />
    <OgxDetail />
    <OgxInternshipExperience />
  </div>
</template>

<script>
import OgxTop from '~/components/OgxTop.vue'
import OgxFeature from '~/components/OgxFeature.vue'
import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'
import OgxInternshipExperience from '~/components/OgxInternshipExperience.vue'

export default {
  components: {
    OgxTop,
    OgxFeature,
    OgxGVGTDetail,
    OgxDetail,
    OgxInternshipExperience
  }
}
</script>
