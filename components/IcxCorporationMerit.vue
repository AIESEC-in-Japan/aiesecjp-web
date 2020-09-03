<template>
  <div class="corporation-merit-container">
    <div class="corporation-merit">
      <h2>組織の活性化</h2>
      <p>
        異なるバックグラウンドを持つインターン⽣が受け⼊れられると、<br>
        社内の⽇々のコミュニケーションに創意⼯夫が⽣まれるので、より相互理解の意識を<br>
        持った上で協働する姿勢が養われ、組織の活性化につながります。
      </p>
      <h2>海外への販路拡⼤のきっかけに</h2>
      <p>
        現地進出にあたって必要となる費⽤・書類・法律などについてリサーチを⾏い、<br>
        その報告を⾏います。実際に現地に住んでいる学⽣の肌感覚の情報を得ることができます。<br>
        また、現地学⽣⽬線からの製品へのフィードバックを得ることもできます。
      </p>
      <h2>直接採⽤に繋がることも</h2>
      <p>
        ⽇本とは就業⽂化の異なる外国⼈を採⽤するにあたって、その試⾦⽯となります。<br>
        インターン⽣が受け⼊れ企業様に就職をしたケースもございます。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.corporation-merit-container {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/icx-corporation-merit.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
}
.corporation-merit {
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
    width: 40%;
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
    padding-top: 45px;
    padding-bottom: 15px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
    border-bottom: solid 0.5px white;
  }
  p {
    color:white;
    font-size: 14px;
    padding: 2px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
  }
}

</style>