<template>
  <section class="container">
    <div>
      <OrganizationInfo />
      <OfficerList />
    </div>
  </section>
</template>

<script>
import OfficerList from "@/components/about/OfficerList.vue"
import OrganizationInfo from "@/components/about/OrganizationInfo.vue"

export default {
  components: {
    OfficerList,
    OrganizationInfo
  }
}
</script>

<style></style>
