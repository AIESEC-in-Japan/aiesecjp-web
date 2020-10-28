<template>
  <button :style="{ width: width,color:color }">{{name}}</button>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
    width: String
  }
};
</script>

<style scoped lang="scss">
button {
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}
</style>