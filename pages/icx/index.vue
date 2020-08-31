<template>
  <div class="wrapper">
    <IcxCorporationInternship />
    <IcxCorporationMerit />
    <IcxCorporationVoice />
    <IcxDetail />
  </div>
</template>

<script>
import IcxCorporationInternship from "~/components/IcxCorporationInternship.vue";
import IcxCorporationMerit from "~/components/IcxCorporationMerit.vue";
import IcxCorporationVoice from "~/components/IcxCorporationVoice.vue";
import IcxDetail from "~/components/IcxDetail.vue";

export default {
  components: {
    IcxCorporationInternship,
    IcxCorporationMerit,
    IcxCorporationVoice,
    IcxDetail,
  },
};
</script>

<style></style>