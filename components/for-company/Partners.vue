<template>
  <div class="fcompany-container">
    <div class="fcompany-contents">
      <h3 class="fcompany-title">私たちのパートナー</h3>
      <BasePartners/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fcompany{
  &-container{
    position: relative;
    margin: 3rem 0;
    width: 100vw;

    .fcompany-contents{
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 5rem;
      align-items: center;


      .fcompany-title{
        font-size: 1.35rem;
        margin-bottom: 1.8rem;
        line-height: 4rem;
        border-bottom: $blue 3px solid;

      }


    }

  }
}
</style>
