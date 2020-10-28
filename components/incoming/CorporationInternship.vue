<template>
  <div class="corporation-internship-container">
    <div class="corporation-internship">
      <h2>アイセックの企業インターンシップ</h2>
      <p>
        <span>42⽇以上、3ヶ⽉未満の短期インターンシップです。</span><span>豊富な知識とスキルの持った</span><span>海外の若者をインターン⽣として</span><span>受け⼊れていただくことで、</span><span>企業様の課題や挑戦に新たな視点をもたらし、</span><span>世界を舞台にした発展に寄与いたします。</span>
      </p>
      <Button class="button" name="インターンシップの詳細はこちら" color="#FFFFFF"></Button>
    </div> 
  </div>
</template>

<script>
import Button from '@/components/base/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    name: String,
    color: String,
    width: String
  }
};
</script>

<style scoped lang="scss">
.corporation-internship-container {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/icx-corporation-internship.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
}
.corporation-internship {
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
  h2 {
    color: $white;
    font-size: 24px;
    padding-top: 80px;
    padding-bottom: 60px;
    letter-spacing: 2px;
  }
  p {
    color: $white;
    font-size: 16px;
    padding: 4px;
    letter-spacing: 2px;
    max-width: 630px;
    span {
      display: inline-block;
    }
  }
}
.button {
  margin-top: 60px;
  padding: 20px 40px;
  background-color: transparent;
  border: solid 3px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
