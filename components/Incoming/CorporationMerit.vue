<template>
  <section class="corporation-merit-container">
    <div class="corporation-merit">
      <div class="merit-item">
        <h3>異文化間の協働体験に</h3>
        <p>
          学生とともに異文化間の育成・マネジメント方法<br>について学ぶ機会になります。<br>相互理解の意識を持った上で<br>コミュニケーションをとる姿勢が養われ、<br>社内の活性化にも繋がります。
        </p>
      </div>
      <div class="merit-item">
        <h3>海外学生の視点からの学び</h3>
        <p>
          学生との議論や、研修中の活動に対して<br>助言を行う過程にて、<br>今後社員の方がグローバルなフィールドで<br>活動を行う際のヒントとなるような<br>発見を得ることができます。
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

