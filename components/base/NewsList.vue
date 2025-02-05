<template>
  <div
    class="news-list-item"
    :id="`${data.categorized}`"
    v-if="data && data.url"
  >
    <p
      class="news-list-date"
    >
      {{ data.date }}
    </p>
    <div class="news-list-category">
      <p>
        {{ data.category }}
      </p>
    </div>
    <a
      class="news-list-title"
      :href="data.url"
    >
      {{ data.title }}
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

  @media(max-width: 785px){
    display: grid;
    grid-template-columns: repeat(3 ,auto);
    padding: 1rem 0.5rem;
  }
}

.news-list-date{
  font-size: 1rem;
  margin: 0;
  // flex-grow: 1;
  width: 14%;

  text-align: center;
  @media(max-width: 785px){
    grid-row: 1;
    grid-column: 1;
    text-align: start;
    width: auto;
  }
}
.news-list-category{
  margin: 0 auto;
  text-align: center;
  width: 10rem;


  @media(max-width: 785px){
    grid-row: 1;
    grid-column: 3;
    margin-right: 0;
    width: auto;

  }
}
.news-list-category p{
  padding: 10px 16px;  
  width: 150px;
  border: 0.8px $dark-gray  solid;
  border-radius: 3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
  line-height: 1.25rem;
  

  @media(max-width: 785px){
    padding: 0.5rem 12px;  
    width: 12rem;
    margin-top: 1rem;
    margin-left: auto;
  }
  @include sp{
    width: 10rem;
    padding: 0.4rem 12px;  
  }
  @media(max-width:320px){
      font-size: 0.865px;
      line-height: 1.05rem;
      
    }
}
.news-list-title{
  color: $dark-gray;
  font-size: 1rem;
  width: 60%;
  margin: 0 0 0 auto;
  @media(max-width: 785px){
    grid-row: 2;
    grid-column: 1/ span 3;
    margin: 0.2rem 0 0 0;
    width: auto;

  }
}


</style>
