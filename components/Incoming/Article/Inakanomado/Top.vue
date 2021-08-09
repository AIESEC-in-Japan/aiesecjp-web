<template>
  <div class="example">
    <div class="example-container">
      <div class="example-top">
        <h1 class="example-top-headline">
          兵庫県丹波篠山地域における外国人観光客数の誘致
        </h1>
        <p class="example-top-text">
          作成日 2017年8月
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  &-container {
    max-width: 50rem;
    margin: 3rem auto;

    @include sp {
      width: 100%;
    }
  }

  &-top {
    margin: 2rem 0;

    @include sp {
      margin: 2rem 1rem;
    }

    &-headline {
      color: $blue;
      margin: 1rem 0;
    }
  }
}
</style>