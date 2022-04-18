<template>
  <div class="aboutus-table-container">
    <h2 class="aboutus-table-title">
      役員一覧
    </h2>
    <AboutCustomTable :list-data="items" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          caption: "会長",
          description:
            "各務茂夫（東京大学 大学院工学系研究科 教授 産学協創推進本部副本部長）",
        },
        {
          caption: "専務理事",
          description: "高橋祐哉（東京外国語大学 国際社会学部 4年）",
        },
        {
          caption: "副会長",
          description:
            "松塚ゆかり（一橋大学森有礼高等教育国際流動化機構 教授）",
        },
        {
          caption: "副会長",
          description: "菊地端夫（明治大学 経営学部 教授）",
        },
        {
          caption: "常務理事",
          description: "籔上りか子（同志社大学 商学部 4年）",
        },
        {
          caption: "理事",
          description: "伊藤友章（北海学園大学 経営学部 教授）",
        },
        {
          caption: "理事",
          description: "江夏幾多郎（神戸大学 経済経営研究所 准教授）",
        },
        {
          caption: "理事",
          description: "椙山泰生（椙山女学園大学 現代マネジメント学部 教授 / 学校法人椙山女学園 理事長 / 京都大学 名誉教授）",
        },
        {
          caption: "理事",
          description: "横田一彦（早稲田大学 商学部 教授）",
        },
        {
          caption: "理事",
          description: "米田邦彦（広島修道大学 商学部 教授）",
        },
        {
          caption: "監事",
          description: "太田康広（慶應義塾大学ビジネス・スクール教授）",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

</style>
