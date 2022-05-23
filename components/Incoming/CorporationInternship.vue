<template>
  <section class="corporationInternship-container">
    <div class="corporationInternship-wrapper">
      <h2>受け入れによって<br v-show="this.$isMobile()">できること</h2>
      <p>
        6～8週間の<br v-show="this.$isMobile()">
        短期インターンシップです。
      </p>
      <p>
        豊富な知識とスキルを持った<br>
        海外の若者をインターン⽣として<br>
        受け⼊れていただくことで、<br>
        企業様の課題や挑戦に<br v-show="this.$isMobile()">
        新たな視点をもたらし、<br>
        世界を舞台にした発展に寄与いたします。
      </p>
      <!-- 実例集へのリンクを停止 2022/05/22
      <div class="button__wrapper">
        <BaseRoundButton
          v-bind="this.WhiteButtonProps"
          :label="'インターンシップ実例を見る'"
        />
      </div>
      -->
    </div>
  </section>
</template>

<script>
/* 実例集へのリンクを停止 2022/05/22
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      WhiteButtonProps: {
        textColor: basic_color.white,
        baseColor: 'transparent',
        size: 'large',
        url: '/incoming/article'
      }
    }
  }
}
*/
</script>

<style lang="scss" scoped>
.corporationInternship-container {
  width: 100%;
  background-image: url("~@/assets/images/icx/icx-corporation-internship.jpg");
  background-size: cover;
  background-position: center 50%;
  min-height: 50vh;
  height: max-content;

  @include sp {
    min-height: 80vh;
    height: max-content;
  }
}

.corporationInternship-wrapper {
  width: 100%;
  min-height: 50vh;
  height: max-content;
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

