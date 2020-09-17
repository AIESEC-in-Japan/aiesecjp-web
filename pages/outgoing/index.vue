<template>
  <div class="wrapper">
    <OgxGVGTDetail />
    <OgxDetail />
    <OgxInternshipExperience />
  </div>
</template>

<script>

import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'
import OgxInternshipExperience from '~/components/OgxInternshipExperience.vue'

export default {
  components: {
    OgxGVGTDetail,
    OgxDetail,
    OgxInternshipExperience
  }
}
</script>
