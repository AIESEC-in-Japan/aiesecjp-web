<template>
  <div
    class="news-item"
    :id="`${data.category}`">
    <p
      class="news-date">
      {{data.date}}
    </p>
    <div class="news-category">
      <p>
        {{data.category}}
      </p>
    </div>
    <a
      class="news-title"
      :href="data.url">
      {{data.title}}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      // type: {alt: String, src: String}, 本当は型で縛りたいけどTSじゃないので
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.news-item {
  width: 100%;
  margin: 0;
  padding: 2rem 0.5rem;
  display: flex;
  border-bottom: 1px #B5BABF solid;  
  align-items: center;
}

.news-date{
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
  text-align: center;
}
.news-category{
  margin: 0 2rem;
  text-align: center;
  flex-grow: 1;
}
.news-category p{
  padding: 12px 30px;  
  width: max-content;
  border: 0.8px $dark-gray  solid;
  border-radius: 3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
}
.news-title{
  color: $dark-gray;
  font-size: 1rem;
  flex-grow: 6;
  margin: 0;
  text-decoration: none;
}


</style>
