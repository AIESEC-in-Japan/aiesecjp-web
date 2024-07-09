<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="incoming-image"></div>
      <div class="incoming-image"></div>
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
          background-position: center;
          background-size: cover;
          width: 52rem;
          height: 39rem;
        }
        &:last-child{
          background-image: url(assets/images/incoming/incomingImages2.png);
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
