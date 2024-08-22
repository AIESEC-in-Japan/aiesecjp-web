<template>
  <iframe
    class="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSd_NLIfIP2F6z6yydJ8VlgEa6w-vMIeq8KDDg9rkwKro0IP7A/viewform"
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
