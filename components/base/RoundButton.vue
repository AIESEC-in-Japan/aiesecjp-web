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
import {basic_color, hexToRgb} from "@/components/base/CommonColor";

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: basic_color.white
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
        backgroundColor: this.convertToHexWithOpacity,
        color: this.textColor
      };
    },
    convertToHexWithOpacity() {
      // ここは背景と文字色が同化してしまうため、背景だけ透過したいがそのためには変換が必要なので
      // ちょっと綺麗じゃないけど、変換処理を描いています。
      if (this.baseColor !== 'transparent') {
        return this.isHover ? "rgba(255,255,255,0.6)" : this.baseColor;
      }else {
        const hex = this.isHover ? this.textColor : this.baseColor;
        const rgb = hexToRgb(hex);
        return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.6)";
      }



      // hov

      // trans


    }
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 1rem;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.button {
  // 今のところ使い道はなさそうだけど、sample codeの役割で追加
  &-small {
    width: 6rem;
  }

  &-medium {
    width: 12rem;
  }

  &-large {
    width: 25rem;
  }
}
</style>
