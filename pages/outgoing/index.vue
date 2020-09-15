<template>
  <div class="wrapper">
    <OgxTop />
    <OgxDetail />
  </div>
</template>

<script>
import OgxTop from '~/components/OgxTop.vue'
import OgxDetail from '~/components/OgxDetail.vue'

export default {
  components: {
    OgxTop,
    OgxDetail
  }
}
</script>
