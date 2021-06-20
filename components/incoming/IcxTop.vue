<template>
  <section class="icx-top-container">
    <div class="icx-top">
      <img
        src="@/assets/images/product_GT-horizontal-white.png"
        alt="GT-logo"
      >
      <h1>
        Globalize your company with AIESEC
      </h1>
      <span>
        アイセックのインターンシップで、グローバルな組織作りを
      </span>
    </div>
  </section>
</template>


<style scoped lang="scss">
.icx-top-container {
  width: 100%;
  background-image: url("~@/assets/images/icx/icx-top.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;
}

.icx-top {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 80vh;
}

img {
  margin: 1rem;
  display: flex;
  width: 400px;
}

h1 {
  font-style: oblique;
  display: flex;
  letter-spacing: 0.5px;
  color: $white;
  margin-bottom: 0.5rem;
}

span {
  font-size: 0.875rem;
  display: flex;
  letter-spacing: 5px;
  color: $white;
}

</style>
