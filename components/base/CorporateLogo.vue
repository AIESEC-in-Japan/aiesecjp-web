<template>
    <div class="partners-contents">
        <div class="partners-content"></div>
    </div>
</template>

<script>
export default {
  props: {
    logos: {
        name: String,
        alt: String
    }
  },

  data: function(logos) {
      logos.forEach(logo => {
        return {

        })
  }
};

</script>

<style scoped lang="scss">

</style>
