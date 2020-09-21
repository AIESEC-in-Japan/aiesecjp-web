<template>
  <section class="container">
    <div>
      <OfficerList />
      <AdvisorList />
    </div>
  </section>
</template>

<script>
import OfficerList from "~/components/OfficerList.vue"
import AdvisorList from "~/components/AdvisorList.vue"

export default {
  components: {
    OfficerList,
    AdvisorList   
  }
}
</script>

<style></style>
