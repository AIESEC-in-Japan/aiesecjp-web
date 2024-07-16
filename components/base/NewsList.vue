<template>
  <div
    class="news-list-item"
    :id="`${data.categorized}`"
    v-if="data && data.url"
    >
    <p
      class="news-list-date">
      {{data.date}}
    </p>
    <div class="news-list-category">
      <p>
        {{data.category}}
      </p>
    </div>
    <a
      class="news-list-title"
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
.news-list-item {
  width: 100%;
  margin: 0;
  padding: 2rem 0.5rem;
  display: flex;
  border-bottom: 1px #B5BABF solid;  
  align-items: center;
}

.news-list-date{
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
  text-align: center;
}
.news-list-category{
  margin: 0 2rem;
  text-align: center;
  flex-grow: 1;
}
.news-list-category p{
  padding: 10px 16px;  
  width: 150px;
  border: 0.8px $dark-gray  solid;
  border-radius: 3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
}
.news-list-title{
  color: $dark-gray;
  font-size: 1rem;
  flex-grow: 6;
  margin: 0;
  text-decoration: none;
}


</style>
