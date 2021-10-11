<template>
  <div class="example-actions">
    <h1 class="example-actions-headline">
      この記事が気になった方は
    </h1>
    <BaseRoundButton
      v-bind="this.PrimaryButtonProps"
      :label="'受け入れについて話を聞く'"
      class="example-actions-item"
    />
    <BaseRoundButton
      v-bind="this.SecondaryButtonProps"
      :label="'一覧に戻る'"
      class="example-actions-item"
    />
  </div>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      PrimaryButtonProps: {
        textColor: basic_color.white,
        baseColor: basic_color.deepBlue,
        size: 'large',
        url: '/contact-us'
      },
      SecondaryButtonProps: {
        textColor: basic_color.deepBlue,
        baseColor: basic_color.White,
        size: 'large',
        url: '/incoming/article',
        target: '_self'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example-actions {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 0 2rem;

  &-headline {
    color: $dark-gray;
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  &-item {
    margin: 0.5rem 0;
  }
}
</style>