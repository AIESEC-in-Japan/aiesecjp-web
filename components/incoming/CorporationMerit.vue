<template>
  <section class="corporation-merit-container">
    <div class="corporation-merit">
      <div class="merit-item">
        <h3>組織の活性化に</h3>
        <p>
          <span>異なるバックグラウンドを持つインターン⽣が</span><span>受け⼊れられると、</span><span>社内の⽇々のコミュニケーションに</span><span>創意⼯夫が⽣まれるので、</span><span>より相互理解の意識を</span><span>持った上で協働する姿勢が養われ、</span><span>組織の活性化につながります。</span>
        </p>
      </div>
      <div class="merit-item">
        <h3>海外への販路拡⼤のきっかけに</h3>
        <p>
          <span>現地進出にあたって必要となる費⽤・書類・法律など</span><span>についてリサーチを⾏い、</span><span>その報告を⾏います。</span><span>実際に現地に住んでいる学⽣の肌感覚の情報を</span><span>得ることができます。</span><span>また、現地学⽣⽬線からの製品への</span><span>フィードバックを得ることもできます。</span>
        </p>
      </div>
      <div class="merit-item">
        <h3>直接採⽤に繋がることも</h3>
        <p>
          <span>⽇本とは就業⽂化の異なる外国⼈を採⽤するにあたって、</span><span>その試⾦⽯となります。</span><span>インターン⽣が受け⼊れ企業様に</span><span>就職をしたケースもございます。</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.corporation-merit-container {
  width: 100%;
  background-size: cover;
  background-position: center 50%;
}

.corporation-merit {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .merit-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h3 {
    width: 75%;
    color: $mint;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding: 3rem 0 1rem;
    letter-spacing: 2px;
    border-bottom: solid 0.5px $mint;
  }

  p {
    color: $dark-gray;
    font-size: 1rem;
    letter-spacing: 2px;
    max-width: 45rem;
    line-height: 1.5;

    span {
      display: inline-block;
    }
  }
}
</style>

