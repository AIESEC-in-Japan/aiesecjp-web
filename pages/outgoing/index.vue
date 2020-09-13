<template>
  <div class="wrapper">
    <OgxDetail />
    <PathOfOgxDetail />
  </div>
</template>

<script>
import OgxDetail from '~/components/OgxDetail.vue'
import PathToDetail from '~/components/PathOfOgxDetail.vue'

export default {
  components: {
    OgxDetail,
    PathOfOgxDetail
  }
}
</script>
