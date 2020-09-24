<template>
  <div class="wrapper">
    <Topcomponent />
    <CorporationInternship />
    <CorporationMerit />
    <Detail />
  </div>
</template>

<script>
import CorporationInternship from '~/components/incoming/CorporationInternship.vue'
import CorporationMerit from '~/components/incoming/CorporationMerit.vue'
import Detail from '~/components/incoming/Detail.vue'
import Topcomponent from '~/components/incoming/Topcomponent.vue'

export default {
  components: {
    CorporationInternship, 
    CorporationMerit,
    Detail,
    Topcomponent
  }
}
</script>

<style></style>
