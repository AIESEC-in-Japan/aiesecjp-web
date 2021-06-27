<template>
  <section class="icxTop-container">
    <div class="icxTop-wrapper">
      <img
        src="@/assets/images/product_GT-horizontal-white.png"
        alt="GT-logo"
      >
      <h1>
        Globalize your company<br v-show="this.$isMobile()"> with AIESEC
      </h1>
      <p>
        アイセックのインターンシップで、<br v-show="this.$isMobile()">グローバルな組織作りを
      </p>
    </div>
  </section>
</template>


<style scoped lang="scss">
.icxTop {
  &-container {
    width: 100%;
    background-image: url("~@/assets/images/icx/icx-top.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 80vh;
  }
}

img {
  margin: 1rem;
  display: flex;
  width: 25rem;

  @include sp {
    width: 80%;
  }
}

h1 {
  font-style: oblique;
  display: flex;
  letter-spacing: 0.5px;
  color: $white;
  margin-bottom: 0.5rem;
}

p {
  font-size: 0.875rem;
  display: flex;
  letter-spacing: 5px;
  color: $white;
}

</style>
