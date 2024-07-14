<template>
  <div>
    <BaseNewsList
      v-for="i in count"
      :key="news_data[i-1].url"
      :data="news_data[i-1]"
    />
  </div>
</template>


<script>
export default {
  props: {
    //表示行数
    count: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      news_data: [
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "/news/0001", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0002", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0003", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0003", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0004", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0004", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0004", category: "活動報告"},
        {date: "2023年8月22日", title: "夏合宿を実施いたしました。", url: "@/News/news0004", category: "活動報告"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
