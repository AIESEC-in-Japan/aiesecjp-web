<template>
    <div class="corporation-internship-bg">
      <div class="corporation-internship">
        <h2>アイセックの企業インターンシップ</h2>
        <p>42⽇以上、3ヶ⽉未満の短期インターンシップです。</p>
        <p>豊富な知識とスキルの持った海外の若者をインターン⽣として</p>
        <p>受け⼊れていただくことで、企業様の課題や挑戦に新たな視点をもたらし、</p>
        <p>世界を舞台にした発展に寄与いたします。</p>
      <button class="button">インターンシップの詳細はこちら</button>
      </div> 
    </div>
</template>

<style scoped lang="scss">
.corporation-internship-bg{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/icx-corporation-internship.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
}
.corporation-internship{
  width: 100%;;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
    h2{
    color: white;
    font-size: 24px;
    padding-top: 80px;
    padding-bottom: 60px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
    }
    p{
    color:white;
    font-size: 16px;
    padding: 4px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
    }
}
.button{
  margin-top: 60px;
  padding: 20px 40px;
  color: white;
  background-color: transparent;
  border: solid 3px;
  font-weight: bold;
  font-size: 20px;
  font-family: "游ゴシック";
  letter-spacing: 2px;
}
</style>