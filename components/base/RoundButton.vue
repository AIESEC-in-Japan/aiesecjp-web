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
      default: ""
    },
    textColor: {
      type: String,
      default: "#333"
    },
    baseColor: {
      type: String,
      // todo default undefはダメっぽい。確かにそっちの方が綺麗なコードになるので考える。
      default: undefined
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
        backgroundColor: this.computedBaseColor,
        color: this.computedTextColor
      };
    },
    computedBaseColor() {
      const buttonBasementColor = this.baseColor ?? 'transparent';
      return this.isHover ? this.textColor : buttonBasementColor
    },
    computedTextColor() {
      const buttonBasementColor = this.baseColor ?? '#fff';
      return this.isHover ? buttonBasementColor : this.textColor
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
