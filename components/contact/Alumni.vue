<template>
  <iframe
    class="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLScDZVibtElUXdcMGRvdUhgvlLGSqGHTmkGRhAZUumBOIcR_4g/viewform"
  />
</template>


<style lang="scss" scoped>
.google-form {
  border-width: 0;
  height: 82vh;
  max-width: 50rem;
  width: 90%;
  margin: 7rem auto;

  @include sp {
    height: 90vh;
  }
}
</style>
