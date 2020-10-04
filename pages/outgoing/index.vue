<template>
  <div class="wrapper">
    <Top />
    <Button :name="buttonName" />
    <Feature />
    <GVGTDetail />
    <Detail />
    <InternshipExperience />
  </div>
</template>

<script>
import Top from '@/components/outgoing/Top.vue'
import Button from '@/components/Button.vue'
import Feature from '@/components/outgoing/Feature.vue'
import GVGTDetail from '@/components/outgoing/GVGTDetail.vue'
import Detail from '@/components/outgoing/Detail.vue'
import InternshipExperience from '@/components/outgoing/InternshipExperience.vue'

export default {
  components: {
    Top,
    Button,
    Feature,
    GVGTDetail,
    Detail,
    InternshipExperience
  },
  data() {
    return {
      buttonName: "Omiman",
    };
  }
};

</script>
