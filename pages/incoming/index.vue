<template>
  <div class="wrapper">
    <Top />
    <CorporationInternship />
    <CorporationMerit />
    <Detail />
  </div>
</template>

<script>
import CorporationInternship from '@/components/incoming/CorporationInternship.vue'
import CorporationMerit from '@/components/incoming/CorporationMerit.vue'
import Detail from '@/components/incoming/Detail.vue'
import Top from '@/components/incoming/Top.vue'

export default {
  components: {
    CorporationInternship, 
    CorporationMerit,
    Detail,
    Top
  }
}
</script>

<style></style>
