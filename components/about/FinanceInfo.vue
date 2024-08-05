<template>
  <div class="aboutus-table-container">
    <h2 class="aboutus-table-title">
      財務情報
    </h2>
    <div class="aboutus-table"
        v-for="(item, index) in items"
        :key="index"
      >
        <h3><a :href="item.link" target="_blank">{{ item.title }}</a></h3>
      </div>
    </div>
</template>

<script>
  export default{
    data: () =>{
      return{
        items:[
          {
            title : '2023年度 貸借対照表', 
            link : 'https://drive.google.com/file/d/1wn4lZ48LAStr7R-lOaiiv3IIuIHohgAF/view?usp=drive_link'
          },
          {
            title : '2023年度 活動計算書',
            link : 'https://drive.google.com/file/d/1Vp91YI-N6NcdYsVSzupheCYU8JpYPftd/view?usp=drive_link'
          },
          {
            title : '2022年度 貸借対照表', 
            link : 'https://drive.google.com/file/d/1pW9Cf6oG9FixUv9q007-0RfRuNNIkcQi/view?usp=drive_link'
          },
          {
            title : '2022年度 活動計算書',
            link : 'https://drive.google.com/file/d/1JrcA01Is7ReEFBFgXz5cObwdhbvOaWPe/view?usp=drive_link'
          },
          {
            title : '2021年度 貸借対照表',
            link : 'https://drive.google.com/file/d/1ToU5i1DBtS1HLg6whwE1V1H3HuF-sgv_/view?usp=drive_link'
          },
          {
            title : '2021年度 活動計算書',
            link : 'https://drive.google.com/file/d/1oyv8OJCvD7i5bus0vGMDiiIAHJO3TvBN/view?usp=drive_link'
          },
          {
            title : '2020年度 貸借対照表',
            link : 'https://drive.google.com/file/d/1ihRHGJmhHu7q8nDBLWgWpVT3W7A8n7p-/view?usp=drive_link'
          },
          {
            title : '2020年度 活動計算書',
            link : 'https://drive.google.com/file/d/1jS3onYGpDy8ERUp468niSjFquRvDMYJ1/view?usp=drive_link'
          },
          {
            title : '2019年度 貸借対照表',
            link : 'https://drive.google.com/file/d/18DmZ70P7w1Xxb-j6-R6Rgeg7Bjao5tjK/view?usp=drive_link'
          },
          {
            title : '2018年度 貸借対照表',
            link : 'https://drive.google.com/file/d/1EWW5pHvheUIjIYaSgmNohDP2bXm7zVdI/view?usp=drive_link'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
h3 {
  padding: 0.5rem 1rem;
  font-weight:normal;

  @include sp {
    padding: 0.5rem 1rem;
  }
}

</style>
