<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="incoming-image" />
      <div class="incoming-image" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.incoming{
  &-container{
    position: relative;
    margin: 8rem 0;
    width: 100vw;

    .incoming-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 0;

      .incoming-image{
        &:first-child{
          background-image: url(assets/images/incoming/incomingImages1.png);
          background-position: cover;
          background-size: cover;
          background-repeat: none;
          width: 64vw;
          height: 46vw;


          @media (max-width:765px){
            width: 64vw;
            height: 50vw;
          }

        }
        &:last-child{
          background-image: url(assets/images/incoming/incomingImages2.png);
          background-position: center;
          background-size: cover;
          background-repeat: none;
          width: 30vw;
          height: 46vw;

          @media (max-width:765px){
            width: 30vw;
            height: 50vw;
          }


        }
      }

    }

  }
}
</style>
