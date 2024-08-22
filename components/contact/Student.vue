<template>
  <iframe
    class="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSf75ceD4eVuRs1itF3VpbaXWXh4ThpRnx0R0COaI4DcxkazAQ/viewform"
  />
</template>


<style lang="scss" scoped>
.google-form {
  border-width: 0;
  height: 100rem;
  max-width: 50rem;
  width: 90%;
  margin: 7rem auto;

  @include sp {
    height: 90vh;
  }
}
</style>
