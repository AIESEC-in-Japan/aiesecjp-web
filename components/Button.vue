<template>
  <button>{{name}}</button>
</template>

<script>
 export default {
  props: {
    name: String,
  }
 };
</script>

<style scoped lang="scss">
  button {
  margin-top: 35px;
  margin-bottom: 140px;
  padding: 15px;
  color: $mint;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}
</style>