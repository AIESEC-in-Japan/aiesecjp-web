<template>
  <article>
    <header>
      <div class="header-info">
        <time>2021年4月1日</time>
        <p>特定非営利活動法人アイセック・ジャパン</p>
      </div>
      <h1>2021年度以降の活動方針について</h1>
      <p>
        この度アイセック・ジャパンは新型コロナウイルスの影響を受けて、
        これまで主観事業としてきた海外への渡航を伴う海外インターンシップの運営を一度停止し、
        新たな事業に取り組むことといたしました。昨年度からの取り組みを踏まえた現時点での決定事項、
        また行ってまいりました取り組みについて具体的にお知らせいたします。
      </p>
    </header>
    <section>
      <h2>渡航を伴う海外インターンシップの停止について</h2>
      <p>
        アイセック・ジャパンはこれまで日本、そして海外の学生に現地の企業や団体で行うインターンシップを提供、
        そのサポートを行ってまいりましたが、新型コロナウイルスの流行およびそれに伴う国際間の往来の停止という現状を鑑み、
        全ての海外インターンシップの企画・運営を停止いたしました。現時点で送り出し、受け入れの海外インターンシップともに再開時期は未定となっております。
      </p>
      <p>
        現在も、具体的な海外インターンシップをご紹介できる詳細な時期は未定ですが、
        ご質問等にお答えすることは可能ですので、お気軽に下記の連絡先までお問い合わせください。
      </p>
      <p>事務局 広報担当 info@aiesec.jp</p>
    </section>
    <section>
      <h2>海外インターンシップ以外の事業について</h2>
      <p>
        海外インターンシップに代わり、昨年度からは海外支部や卒業生の方々と協力しながら、
        オンラインでの国際交流イベントの運営と参加、リモートの海外インターンシップの運営、
        そして世界についての学びの場の設計や運営などを行ってまいりました。
        今年度も引き続きこのような事業の企画・運営を中心として、活動を続けてまいります。
      </p>
    </section>
    <footer>
      <h2>▼最後に</h2>
      <p>アイセック・ジャパン一同、今後とも若者のリーダーシップを育む機会を提供するべく尽力してまいりますので、弊団体の対応へのご理解とご協力をよろしくお願いいたします。</p>
    </footer>
  </article>
</template>


<style lang="scss" scoped>
/* 一時的な対応。今後はmarkdownで描けるようにするかも */

article {
  width: 90%;
  max-width: 80rem;
  margin: auto auto;
}

header {
  margin-top: 10rem;

  .header-info {
    text-align: right;
  }

  h1 {
    text-align: center;
  }
}

section {
  min-height: max-content;
  margin: 4rem auto;

  h2 {
    color: $blue;
    margin: 2rem auto;
  }
}

p {
  font-size: 1rem;
}

footer {
  margin-bottom: 4rem;

  h2 {
    color: $blue;
    margin: 1rem auto;
  }
}
</style>
