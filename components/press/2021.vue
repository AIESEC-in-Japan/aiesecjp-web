<template>
  <article>
    <section>
      <h2>
        現在このページは、メンテナンス作業を行っている為、<br>表示できません。
      </h2>
    </section>
  </article>
</template>


<style lang="scss" scoped>
/* 一時的な対応。今後はmarkdownで描けるようにするかも */

article {
  width: 90%;
  max-width: 80rem;
  margin: auto auto;
}

section {
  min-height: max-content;
  margin: 4rem auto;

}
h2 {
      margin-top: 6rem;
      margin-bottom: 1rem;
      color: $blue;
}
</style>
