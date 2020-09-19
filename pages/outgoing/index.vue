<template>
  <div class="wrapper">
    <OgxTop />
    <OgxGVGTDetail />
    <OgxDetail />
  </div>
</template>

<script>

import OgxTop from '~/components/OgxTop.vue'
import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'

export default {
  components: {
    OgxTop,
    OgxGVGTDetail,
    OgxDetail
  }
}
</script>
