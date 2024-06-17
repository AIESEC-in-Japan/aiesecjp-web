<template>
  <section>
    <div class="news-container">
      <div class="news-bg"></div>
      <div class="news-text">
        NEWS
      </div>
      <h2 class="news-text-sub">お知らせ</h2>
    </div>
  </section>
</template>



<style lang="scss" scoped> 
// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

.news-container{
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 0 10rem 0;  
}
.news-bg {
  width: 100%;
  height: 100vh;
  background-image: url(assets/images/top/top-kv.png);
  background-size: cover;
  background-position: center;
  border-radius: 0 0 0 14rem;
}
.news-text{
  color: #fff;
  font-size: 6rem;
  font-weight: bold;
  position: absolute;
  bottom: 40%;
  left: 6rem;

  &-sub{
    color: #fff;
    font-size: 1.6rem;
    position: absolute;
    bottom: 35%;
    left: 6rem;
  }
}

</style>
