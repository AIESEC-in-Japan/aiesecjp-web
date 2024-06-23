<template>
  <section>
    <div class="kv-container">
      <div class="kv-bg"></div>
      <p class="kv-text">
        きっと変わる。<br>
        自分も、世界も。
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.kv-container{
  position: relative;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: -5rem 0 10rem 0;
}
.kv-bg {
  width: 100%;
  height: 100vh;
  background-image: url(assets/images/top/top-kv.png);
  background-size: cover;
  background-position: center;
}
.kv-text{
  color: #fff;
  font-size: 6rem;
  position: absolute;
  bottom: 1rem;
  left: 2.6rem;
  font-family: $TsukuGoPro;
}

</style>