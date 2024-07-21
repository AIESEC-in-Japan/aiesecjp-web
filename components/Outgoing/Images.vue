<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="outgoing-image"></div>
      <div class="outgoing-image"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.outgoing{
  &-container{
    position: relative;
    margin: 8rem 0;
    width: 100vw;

    .outgoing-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 0;

      .outgoing-image{
        &:first-child{
          background-image: url(assets/images/outgoing/outgoingImages1.png);
          background-position: center;
          background-size: cover;
          width: 52rem;
          height: 39rem;
        }
        &:last-child{
          background-image: url(assets/images/outgoing/outgoingImages2.png);
          background-position: center;
          background-size: cover;
          width: 32.6rem;
          height: 39rem;

        }
      }

    }

  }
}
</style>
