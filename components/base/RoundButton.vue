<template>
  <button
    :class="classes"
    :style="style"
    @click="openExtraLink"
    @mouseleave="mouseLeaveAction"
    @mouseover="mouseOverAction"
  >
    {{ label }}
  </button>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  props: {
    // 一旦ボタンの挙動は外部への遷移とする。モーダルが開くとかも想定されるが
    // 今回は考慮せず。必要になったら実装する方針。
    url: {
      type: String,
      default: '/'
    },
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
    },
    openExtraLink() {
      window.open(this.url, '_blank');
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
        backgroundColor: this.baseColor,
        color: this.textColor,
        opacity: this.isHover ? 0.6 : 1
      };
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

    @include sp {
      width: 90%;
    }
  }
}
</style>
