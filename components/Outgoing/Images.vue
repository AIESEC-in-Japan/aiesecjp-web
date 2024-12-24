<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="outgoing-image" />
      <div class="outgoing-image" />
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
          width: 60vw;
          height: 40vw;

          @media (max-width:765px){
            height: 50vw;
          }
        }
        &:last-child{
          background-image: url(assets/images/outgoing/outgoingImages2.png);
          background-position: center;
          background-size: cover;
          width: 36vw;
          height: 40vw;

          @media (max-width:765px){
            height: 50vw;
          }

        }
      }

    }

  }
}
</style>
