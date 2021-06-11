<template>
  <button
    :class="classes"
    :style="style"
    @mouseleave="mouseLeaveAction"
    @mouseover="mouseOverAction"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "click"
    },
    textColor: {
      type: String,
      default: "#333"
    },
    baseColor: {
      type: String,
      default: 'transparent'
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    mouseOverAction() {
      this.isHover = true;
    },
    mouseLeaveAction() {
      this.isHover = false;
    }
  },
  computed: {
    classes() {
      return {
        [`button-${this.size}`]: true,
      };
    },
    style() {
      return {
        // todo background colorのデフォルトセットしたので、色考える
        backgroundColor: this.isHover ? this.textColor : this.baseColor,
        color: this.isHover ? this.baseColor : this.textColor
      };
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 15px;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}

.button {
  // 今のところ使い道はなさそうだけど、sample codeの役割で追加
  &-small {
    width: 100px;
  }

  &-medium {
    width: 200px;
  }

  &-large {
    width: 400px;
  }
}
</style>
