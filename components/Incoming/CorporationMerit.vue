<template>
  <section class="corporation-merit-container">
    <div class="corporation-merit">
      <div class="merit-item">
        <h3>組織の活性化に</h3>
        <p>
          異なるバックグラウンドを持つインターン⽣が<br>受け⼊れられると、<br>社内の⽇々のコミュニケーションに<br>創意⼯夫が⽣まれるので、<br>より相互理解の意識を<br>持った上で協働する姿勢が養われ、<br>組織の活性化につながります。
        </p>
      </div>
      <div class="merit-item">
        <h3>海外への販路拡⼤のきっかけに</h3>
        <p>
          現地進出にあたって必要となる費⽤・書類・法律など<br>についてリサーチを⾏い、<br>その報告を⾏います。<br>実際に現地に住んでいる学⽣の肌感覚の情報を<br>得ることができます。<br>また、現地学⽣⽬線からの製品への<br>フィードバックを得ることもできます。
        </p>
      </div>
      <div class="merit-item">
        <h3>直接採⽤に繋がることも</h3>
        <p>
          ⽇本とは就業⽂化の異なる外国⼈を採⽤するにあたって、<br>その試⾦⽯となります。<br>インターン⽣が受け⼊れ企業様に<br>就職をしたケースもございます。
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.corporation-merit-container {
  width: 100%;
  background-size: cover;
  background-position: center 50%;
  margin: 2rem auto;
}

.corporation-merit {
  width: 100%;
  min-height: 80vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include sp {
    height: max-content;
  }

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

    @include sp {
      width: 90%;
    }
  }

  p {
    color: $dark-gray;
    font-size: 1rem;
    letter-spacing: 2px;
    max-width: 45rem;
    line-height: 1.5;

    @include sp {
      width: 90%;
    }
  }
}

@include sp {
  br {
    display: none;
  }
}
</style>

