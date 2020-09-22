<template>
  <section class="container">
    <div>
      <OfficerList />
      <AdvisorList />
      <OrganizationInfo />
    </div>
  </section>
</template>

<script>
import OfficerList from "~/components/OfficerList.vue"
import AdvisorList from "~/components/AdvisorList.vue"
import OrganizationInfo from "~/components/OrganizationInfo.vue"

export default {
  components: {
    OfficerList,
    AdvisorList,   
    OrganizationInfo
  }
}
</script>

<style></style>
