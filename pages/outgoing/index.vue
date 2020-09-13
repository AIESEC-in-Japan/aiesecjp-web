<template>
  <div class="wrapper">
    <OgxGVGTDetail />
    <OgxDetail />
  </div>
</template>

<script>

import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'

export default {
  components: {
    OgxGVGTDetail,
    OgxDetail
  }
}
</script>
