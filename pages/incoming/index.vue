<template>
  <div class="wrapper">
    <Top />
    <AboutIcxIntern />
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
import AboutIcxIntern from '@/components/incoming/AboutIcxIntern'

export default {
  components: {
    CorporationInternship,
    CorporationMerit,
    Detail,
    Top,
    AboutIcxIntern
  }
}
</script>

<style></style>
