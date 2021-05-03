<template>
  <button :class="classes" :style="style">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: String,
    color: String,
    backgroundColor: String || undefined,
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        [`button-${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor || 'transparent',
        color: this.color
      };
    },
  },
};
</script>

<style lang="scss" scoped>

button {
  margin-top: 35px;
  margin-bottom: 140px;
  padding: 15px;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}

.button {

  &-small {
    width: 10px;
  }

  &-medium {
    width: 100px;
  }

  &-large {
    width: 200px;
  }
}
</style>
