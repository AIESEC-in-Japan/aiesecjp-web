<template>
  <div class="wrapper">
    <OgxDetail />
    <PathToDetail />
  </div>
</template>

<script>
import OgxDetail from '~/components/OgxDetail.vue'
import PathToDetail from '~/components/pathToDetail.vue'

export default {
  components: {
    OgxDetail,
    PathToDetail
  }
}
</script>
