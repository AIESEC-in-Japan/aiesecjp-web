<template>
  <div class="wrapper">
    <IcxCorporationInternship />
    <IcxCorporationMerit />
    <IcxDetail />
  </div>
</template>

<script>
import IcxCorporationInternship from '~/components/IcxCorporationInternship.vue'
import IcxCorporationMerit from '~/components/IcxCorporationMerit.vue'
import IcxDetail from '~/components/IcxDetail.vue'

export default {
  components: {
    IcxCorporationInternship, 
    IcxCorporationMerit,
    IcxDetail
  }
}
</script>

<style></style>
