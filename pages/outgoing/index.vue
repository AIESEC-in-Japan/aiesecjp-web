<template>
  <div class="wrapper">
    <OgxFeature />
    <OgxGVGTDetail />
    <OgxDetail />
  </div>
</template>

<script>

import OgxFeature from '~/components/OgxFeature.vue'
import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'

export default {
  components: {
    OgxFeature,
    OgxGVGTDetail,
    OgxDetail
  }
}
</script>
