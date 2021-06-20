<template>
  <section class="corporation-internship-container">
    <div class="corporation-internship">
      <h2>アイセックの企業インターンシップ</h2>
      <p>
        <span>42⽇以上、3ヶ⽉未満の短期インターンシップです。</span><span>豊富な知識とスキルの持った</span><span>海外の若者をインターン⽣として</span><span>受け⼊れていただくことで、</span><span>企業様の課題や挑戦に新たな視点をもたらし、</span><span>世界を舞台にした発展に寄与いたします。</span>
      </p>
      <RoundButton
          v-bind="this.WhiteButtonProps"
          :label="'インターンシップの詳細を見る'"
        />
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

<style scoped lang="scss">
.corporation-internship-container {
  width: 100%;
  background-image: url("~@/assets/images/icx/icx-corporation-internship.jpg");
  background-size: cover;
  background-position: center 50%;
}

.corporation-internship {
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: $white;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  p {
    color: $white;
    font-size: 1rem;
    letter-spacing: 2px;
    max-width: 40rem;
    line-height: 1.5;
    margin: 2rem 0;

    span {
      display: inline-block;
    }
  }
}

.button {
  margin-top: 60px;
  padding: 20px 40px;
  color: $white;
  background-color: transparent;
  border: solid 3px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>

