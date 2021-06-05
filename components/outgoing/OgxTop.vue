<template>
  <div class="container">
    <section class="ogx-top">
      <h1 class="title">Experience the world with AIESEC</h1>
      <p class="catchphrase">
        <span>アイセックの海外インターンシップで、</span>
        <span>きっと、変わる。自分も、世界も。</span>
      </p>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container {
  background-image: url("~@/assets/images/ogx_top_background.jpg");
  background-position: center;
  background-size: cover;
}

.ogx-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $white;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.4);

  .title {
    text-align: center;
    font-style: oblique;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .catchphrase {
    font-size: 1rem;
    text-align: center;
    letter-spacing: 4px;
    line-height: 1.5;

    span {
      display: block;
      color: $white;
    }
  }
}
</style>
