<template>
  <iframe
    class="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSfn-kinSEaa8mTjjxsOaguAbIEL-W5eo1sLSexfC-RftIcYRQ/viewform?embedded=true"
  />
</template>


<style lang="scss" scoped>
.google-form {
  border-width: 0;
  height: 100rem;
  max-width: 40rem;
  width: 90%;
  margin: 7rem auto;

  @include sp {
    height: 90vh;
  }
}
</style>
