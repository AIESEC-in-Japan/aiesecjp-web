<template>
  <div class="wrapper">
    <IcxTopcomponent />
    <IcxCorporationInternship />
    <IcxCorporationMerit />
    <IcxDetail />
  </div>
</template>

<script>
import IcxCorporationInternship from "~/components/IcxCorporationInternship.vue";
import IcxCorporationMerit from "~/components/IcxCorporationMerit.vue";
import IcxDetail from "~/components/IcxDetail.vue";
import IcxTopcomponent from "~/components/IcxTopcomponent.vue";

export default {
  components: {
    IcxCorporationInternship,
    IcxCorporationMerit,
    IcxDetail,
    IcxTopcomponent,
  },
};
</script>

<style></style>
