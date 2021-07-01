<template>
  <section class="whyWhat-container">
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video-content"
      height="315"
      src="https://www.youtube.com/embed/cNV-ddCP-WY"
      title="YouTube video player"
      width="560"
    />
    <div class="description">
      <h3>MOVIE</h3>
      <h1>Why We Do What We Do</h1>
      <p>
        私たちアイセックは、若者のリーダーシップこそがより良い明日への鍵であると考え、
        若者が挑戦的な環境で実践的な経験をするための機会創出をしています。
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.whyWhat-container {
  height: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
}

.video-content {
  border-width: 0;
  width: 50%;
  max-width: 40rem;
  margin-right: 5rem;
}

.description {
  width: 50%;
  max-width: 40rem;

  h3 {
    color: $gray;
  }

  h1 {
    color: $blue;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
  }

}
</style>
