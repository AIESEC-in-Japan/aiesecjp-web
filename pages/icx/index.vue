<template>
  <div class="wrapper">
    <IcxCorporationInternship />
    <IcxInternFeature/>
    <IcxCorporationMerit />
    <IcxDetail />
  </div>
</template>

<script>
import IcxCorporationInternship from '~/components/IcxCorporationInternship.vue'
import IcxInternFeature from '~/components/IcxInternFeature.vue'
import IcxCorporationMerit from '~/components/IcxCorporationMerit.vue'
import IcxDetail from '~/components/IcxDetail.vue'

export default {
  components: {
  IcxCorporationInternship,  
  IcxInternFeature,
  IcxCorporationMerit,
  IcxDetail
  }
}
</script>

<style></style>