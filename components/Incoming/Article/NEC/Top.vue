<template>
  <div class="example">
    <div class="example-container">
      <div class="example-top">
        <h1 class="example-top-headline">
          テクノロジーの力で食を変える。母国の課題と向き合うインターンシップ
        </h1>
        <p class="example-top-text">
          作成日 2019年10月1日
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  &-container {
    max-width: 50rem;
    margin: 4rem auto;
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

  &-thumbnail {
    width: 100vw;
    height: 240px;
    background-color: $gray;
  }
}
</style>