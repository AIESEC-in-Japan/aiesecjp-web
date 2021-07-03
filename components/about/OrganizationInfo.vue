<template>
  <div class="aboutus-table-container">
    <h2 class="aboutus-table-title">
      団体情報
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
          caption: "団体名",
          description:
            "特定非営利活動法人アイセック・ジャパン （AIESEC in Japan）",
        },

        { caption: "所轄庁", description: "東京都" },

        {
          caption: "設立",
          description: "1962年 (2001年　特定非営利活動法人格取得)",
        },

        {
          caption: "代表",
          description:
            "各務茂夫 (東京大学 大学院工学系研究科教授 産学協創推進本部 副本部長)",
        },

        { caption: "専務理事", description: "菅家周平（早稲田大学 4年）" },

        {
          caption: "所在地",
          description:
            "〒162-0814 東京都新宿区新小川町4-16飯田橋プラレールビル3F",
        },

        {
          caption: "活動内容",
          description:
            "社会教育の推進を図る活動・国際協力活動を行う団体の運営、又は活動に関する連絡、助言又は援助の活動",
        },

        { caption: "電話番号", description: "03-6457-5806" },

        { caption: "FAX番号", description: "03-6457-5809" },

        { caption: "E-mail", description: "info@aiesec.jp" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

</style>
