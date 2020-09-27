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
import OfficerList from '@/components/about/OfficerList.vue'
import AdvisorList from '@/components/about/AdvisorList.vue'
import OrganizationInfo from '@/components/about/OrganizationInfo.vue'

export default {
  components: {
    OfficerList,
    AdvisorList,   
    OrganizationInfo
  }
}
</script>

<style></style>
