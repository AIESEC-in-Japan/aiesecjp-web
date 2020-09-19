<template>
  <section class="container">
    <div>
      <OrganizationInfo />
      <OfficerList />
    </div>
  </section>
</template>

<script>
import OfficerList from "~/components/OfficerList.vue"
import OrganizationInfo from "~/components/OrganizationInfo.vue"

export default {
  components: {
    OfficerList,
    OrganizationInfo
  }
}
</script>

<style></style>
