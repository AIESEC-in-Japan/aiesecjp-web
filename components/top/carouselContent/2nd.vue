<template>
  <div class="carousel-content">
    <h1>Experience the world with AIESEC.</h1>
    <p>
      アイセックは、海外インターンシップやオンラインの国際交流イベントなど、<br>
      若者が世界を身近に感じ、リーダーシップを育むきっかけとなる事業を運営しています。<br>
      海外インターンシップは、日本の大学生を海外の企業やNPO法人などへ送り出す海外インターンシップのみならず、<br>
      海外の大学生を日本の企業様などに受け入れていただく海外インターンシップも運営しています。
    </p>
  </div>
</template>


<style lang="scss" scoped>
h1 {
  margin: 1rem auto;
  font-size: 2rem;
  font-weight: bold;
  color: $white;
  text-align: center;

  @include sp {
    font-size: 1.5rem;
  }
}

p {
  text-align: center;
  margin: 1rem auto;
  font-size: 1rem;
  line-height: 2;
  color: $white;
  font-weight: normal;

  @include sp {
    font-size: 1rem;
    line-height: 1.5;
  }
}

@include sp {
  br {
    display: none;
  }
}

</style>
