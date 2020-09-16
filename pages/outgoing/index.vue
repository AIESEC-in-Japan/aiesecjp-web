<template>
  <div class="wrapper">
    <Og />
    <OgxGVGTDetail />
    <OgxDetail />
  </div>
</template>

<script>

import Og from '~/components/Og.vue'
import OgxGVGTDetail from '~/components/OgxGVGTDetail.vue'
import OgxDetail from '~/components/OgxDetail.vue'

export default {
  components: {
    Og,
    OgxGVGTDetail,
    OgxDetail
  }
}
</script>
