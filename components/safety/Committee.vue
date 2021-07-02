<template>
  <div class="safety-container">
    <h2>
      海外安全管理委員会
    </h2>
    <p>
      春期と秋期の年に2回、学生の海外への送り出し研修事業における安全管理体制を監査するための諮問委員会を開催しております。
      以下の内容に関して団体外部の有識者や危機管理の専門家の方々より指摘、提言をいただいております。
    </p>
    <ul>
      <li>安全管理制度の履行状況の監査</li>
      <li>安全管理における改善</li>
    </ul>

    <div class="logs-wrapper">
      <div
        v-for="(item,i) in committeeLogs"
        :key="i"
        class="log"
      >
        <div v-show="i <= 5 || openLogs">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.describe }}<span v-show="!!item.link">詳細な報告につきましては <a :href="item.link">こちら</a>をご覧ください。</span>
          </p>
        </div>
        <v-btn
          v-show="i === 5"
          class="collapse-button"
          @click="openLogs = !openLogs"
        >
          過去の開催報告<span v-if="!openLogs">もみる</span><span v-else>を閉じる</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openLogs: false,
      committeeLogs: [
        {
          title: '令和三年度第一回安全管理委員会開催報告',
          describe: '令和3年5月27日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1nIld1vzD8zBt7olnIC8-D7Lcl8AO0G1i/view?usp=sharing'
        },
        {
          title: '令和二年度第二回安全管理委員会開催報告',
          describe: '令和2年11月11日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1368R2pHI1BZ2oKLiL1NKRntqXfTMBR-0/view?usp=sharing'
        },
        {
          title: '令和二年度第一回安全管理委員会報告',
          describe: '令和2年5月22日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/15U4qTnJQKuQrkDWRj6IKvqDSco1QPDiI/view?usp=sharing'
        },
        {
          title: '令和元年度第二回安全管理委員会開催報告',
          describe: '令和元年11月7日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1FxUUrbwdEphjiudVi-kcI4RCSsq7_bME/view?usp=sharing'
        },
        {
          title: '令和元年度第一回安全管理委員会報告',
          describe: '令和元年6月27日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1O9mhjwpOTeb2iQRLywKuEA3_V7NzfJ7z/view?usp=sharing'
        },
        {
          title: '平成30年度第二回安全管理委員会報告',
          describe: '平成30年11月5日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1c8mk7DK-4qbgT9VAqL7E0fC-uHGjFi5I/view?usp=sharing'
        },
        {
          title: '平成30年度第一回安全管理委員会報告',
          describe: '平成30年6月4日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/19n3xIUj_79NbEBs48xQluy25cwzoLvVA/view?usp=sharing'
        },
        {
          title: '平成29年度第一回安全管理委員会報告',
          describe: '平成29年4月27日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1AJZcZpD4ZGrcLWpeK2e9KXPFjz_Hwc1J/view?usp=sharing'
        },
        {
          title: '平成28年度第二回安全管理委員会報告',
          describe: '平成28年11月14日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1m2mUxTHva7LVV9wuM_zsaShc4_3Tzo_Z/view?usp=sharing'
        },
        {
          title: '平成28年度第一回安全管理委員会報告',
          describe: '平成28年5月20日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1cS0FXzyLzYUukqsL2uAvN7Hk3pKJ5NK0/view?usp=sharing'
        },
        {
          title: '平成27年度第二回安全管理委員会報告',
          describe: '平成27年11月9日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1Dq8FHBJXtq0AyCp4ZFb2r4iuKBAry8aJ/view?usp=sharing'
        },
        {
          title: '平成27年度第一回安全管理委員会報告',
          describe: '平成27年5月11日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1ryJ-3ipry1NsGqhWrwWzVa4wBuc3e3Le/view?usp=sharing'
        },
        {
          title: '平成26年度第二回安全管理委員会報告',
          describe: '平成26年11月11日に安全管理委員会を開催いたしました。',
          link: 'https://drive.google.com/file/d/1tdlVlu27Dl5FOoxB8uxmPt4eM1753RTG/view?usp=sharing'
        },
        {
          title: '平成26年度第一回安全管理委員会報告',
          describe: '平成26年5月30日に安全管理委員会を開催いたしました。'
        },
        {
          title: '平成25年度第二回安全管理委員会報告',
          describe: '平成25年10月15日に安全管理委員会を開催いたしました。'
        },
        {
          title: '平成25年度第一回安全管理委員会報告',
          describe: '平成25年度7月3日に安全管理委員会を開催いたしました。'
        },
        {
          title: '平成25年度 海外安全対策委員会 最終報告',
          describe: '平成25年4月30日に海外安全対策委員会の最終報告を発表いたしました。',
          link: '/safety/final'
        }
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.safety-container {
  max-width: 80%;
  margin: 2rem auto;
  padding-left: 7rem;

  @include sp {
    padding-left: 1rem;
  }
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  color: $mint;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
}

ul {
  list-style: circle;
  margin-left: 1.5rem;
}

li {
  margin: 0.5rem auto;
  color: $dark-gray;
}

p {
  font-size: 1rem;
  line-height: 2;
}

.logs-wrapper {
  margin-top: 2rem;

  h3 {
    color: $blue;
  }
}

.collapse-button {
  margin: 1rem auto;
}

</style>
