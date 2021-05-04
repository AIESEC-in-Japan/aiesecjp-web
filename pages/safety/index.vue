<template>
  <div class="wrapper">
    <SafetyTop/>
    <SafetyDescriptions/>
  </div>
</template>

<script>
import SafetyTop from "@/components/safety/SafetyTop";
import SafetyDescriptions from "@/components/safety/SafetyDescriptions";


export default {
  components: {SafetyDescriptions, SafetyTop}
}
</script>
