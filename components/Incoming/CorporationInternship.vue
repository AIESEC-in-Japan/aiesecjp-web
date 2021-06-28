<template>
  <section class="corporationInternship-container">
    <div class="corporationInternship-wrapper">
      <h2>アイセックの<br v-show="this.$isMobile()">企業インターンシップ</h2>
      <p>
        42⽇以上、3ヶ⽉未満の<br v-show="this.$isMobile()">
        短期インターンシップです。
      </p>
      <p>
        豊富な知識とスキルの持った<br>
        海外の若者をインターン⽣として<br>
        受け⼊れていただくことで、<br>
        企業様の課題や挑戦に<br v-show="this.$isMobile()">
        新たな視点をもたらし、<br>
        世界を舞台にした発展に寄与いたします。
      </p>
      <div class="button__wrapper">
        <BaseRoundButton
          v-bind="this.WhiteButtonProps"
          :label="'お問い合わせはこちら'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      WhiteButtonProps: {
        textColor: basic_color.white,
        baseColor: 'transparent',
        size: 'large'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.corporationInternship-container {
  width: 100%;
  background-image: url("~@/assets/images/icx/icx-corporation-internship.jpg");
  background-size: cover;
  background-position: center 50%;
  min-height: 50vh;

  @include sp {
    height: 80vh;
  }
}

.corporationInternship-wrapper {
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @include sp {
    height: 80vh;
  }

  h2 {
    color: $white;
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 4rem;
  }

  p {
    color: $white;
    font-size: 1rem;
    letter-spacing: 2px;
    max-width: 40rem;
    line-height: 1.5;
  }

  .button__wrapper {
    margin-top: 2rem;

    @include sp {
      width: 90vw;
    }
  }
}
</style>

