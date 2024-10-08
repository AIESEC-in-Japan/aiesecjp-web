<template>
  <div class="policy-container">
    <div class="policy-contents">
      <div class="policy-outline">
        <a
          class="button-container" 
          v-for="(button, index) in buttons" 
          :key="index"
          :href="button.href" 
          @click="handleClick(index)"
            :class="{ active: activeButtonIndex === index }" 
        >
          <a
            class="button"
          >
            <p>{{ button.text }}</p>
          </a>
          <p class="button-nextText">{{ button.nextText }}</p>
        </a>
      </div>
      <div class="policy-content">
        <h2  id="pr1" class="policy-content-title">
          1. 個人情報保護方針
        </h2>
        <p>
          特定非営利活動法人アイセック・ジャパン(以下アイセック)は、海外インターンシップに参加される学生様をはじめとする関係者の皆様のプライバシーを尊重し、個人情報の取り扱いに関して以下のような指針を定め、それに従って個人情報の適正な利用、その保護に努めております。
        </p>

        <h2  id="pr2" class="policy-content-title">
          2. 個人情報の定義
        </h2>
        <p>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び、当該情報単体から特定の個人を識別できる情報(個人識別情報)を指します。
        </p>
        <h2  id="pr3" class="policy-content-title">
          3. 個人情報の収集方法
        </h2>
        <p>
          アイセックは、皆様に海外インターンシップをご紹介するにあたり必要な範囲、またはアイセックの事業や活動を運営するにあたり必要な範囲で、適法かつ公正な手段により個人情報を収集いたします。
          個人情報を収集する際は、できる限りその目的を限定し、海外インターンシップを中心とするアイセックの事業の運営に必要な限度を超えないものとします。
        </p>
        <h2  id="pr4" class="policy-content-title">
          4. 個人情報の利用目的
        </h2>
        <p>収集した個人情報は、以下の目的達成のために必要な範囲に限り、ご本人の権利を損なわないように、十分配慮して利用いたします。</p>
        <p>【個人情報の利用目的】</p>
        <ul>
          <li>採用時の業務執行のため</li>
          <li>アイセックでの法人および会員団体への諸制度の運営管理のため</li>
          <li>取引先、ご提携企業との円滑な事務連絡のため</li>
          <li>経理作業の円滑・適切な執行、推進のため</li>
          <li>取引先、ご提携企業との契約履行のため</li>
          <li>組織経営に必要な分析のため</li>
          <li>新規事業における説明会での当日アンケート収集のため</li>
          <li>事業運営における円滑な事務対応のため</li>
          <li>海外支部との情報提供のため</li>
          <li>各種法令に定める手続きのため</li>
          <li>その他、上記に付随する業務の遂行、各種リスクの把握および管理その他皆様とのお取引およびアイセックの業務運営を適切かつ円滑に履行するために行う業務の遂行のため</li>
        </ul>
        <h2  id="pr5" class="policy-content-title">
          5. 個人情報の管理・保護について
        </h2>
        <p>
          アイセックは、個人情報保護の責任者を置き、皆様の個人情報をお預かりするにあたり、適切な管理を行うとともに、漏えい、紛失、改ざん等の防止のために必要な安全管理措置を講じています。詳細に関しましては10.「安全管理措置」をご確認ください。また、皆様の個人情報の保護と適切な取扱いに関して、個人情報保護責任者を中心として法人および会員団体に対し内部教育を行い、利用目的を達成したときはこれを適切な方法で廃棄します。
        </p>
        <h2  id="pr6" class="policy-content-title">
          6. 個人情報の第三者提供
        </h2>
        <p>
          個人情報を、ご本人の同意なしに関係機関又は業務委託先以外の第三者に開示・提供することはありません。
          ただし、法令により開示を求められた場合、又は、裁判所、警察等の公的機関から開示を求められた場合には、ご本人の同意なく個人情報を開示・提供することがあります。
          また、個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合、開示・提供することがあります。
        </p>
        <h2  id="pr7" class="policy-content-title">
          7. 日本国外への移転
        </h2>
        <p>
          アイセックは、皆様の個人情報を、アイセック海外支部に提供する場合、以下のいずれかに該当する場合を除き、ご本人の同意に基づき提供します。
        </p>
        <p>
          （1）第三者が日本と同等の水準の個人情報保護制度を有している国として法令に定められている国にある場合
        </p>
        <p>
          （2）第三者が日本の個人情報取扱事業者が講ずべき措置に然るべき措置を継続的に講ずるために必要な体制を構築している場合
        </p>
        <p>  
          なお、（2）の場合、第三者の然るべき措置の継続的な実施を確保するためにアイセックは必要かつ適切な措置を講じます。
        </p>
        <h2  id="pr8" class="policy-content-title">
          8. 個人情報の開示
        </h2>
        <p>
          アイセックは、ご本人から個人情報の開示を求められたときは、ご本人が希望された個人情報の項目、利用目的または第三者提供の記録について、電磁的記録の提供を含め、ご本人が指示した方法により、ご本人に対し遅滞なくこれを開示いたします。
          ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
        </p>
        <ul>
          <li>ご本人または第三者の生命、身体、財産その他の権利利益を害する恐れがある場合</li>
          <li>アイセックの事業運営の適正な実施に著しい支障を及ぼす恐れがある場合</li>
          <li>法令に違反することとなる場合</li>
        </ul>

        <h2  id="pr9" class="policy-content-title">
          9. 個人情報の訂正及び利用停止等
        </h2>
        <p>
          （1）アイセックはご本人から、①個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び②あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合。
          上記2点の場合、ご本人からの請求であることを確認の上で、個人情報の内容の訂正または利用停止を行い、その旨をご本人に通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、ご本人に対しその旨を通知いたします。
        </p>
        <p>
          （2）アイセックは、ご本人から、ご本人の個人情報について消去を求められた場合、またはアイセックが当該請求に応じる必要があると判断した場合は、ご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をご本人に通知します。
        </p>
        <p>
          （3）個人情報保護法その他の法令により、アイセックが訂正等または利用停止等の義務を負わない場合は、（１）および（2）の規定は適用されません。
        </p>
        <h2  id="pr10" class="policy-content-title">
          10. 安全管理措置
        </h2>
        <p>
          アイセックでは、個人データおよび特定個人情報等の漏えい、滅失または毀損の防止その他の個人データおよび特定個人情報等の安全管理措置を講じます。具体的な安全管理措置の内容につきましては以下をご参照ください。
        </p>
        <p>
          （1）基本方針の策定
        </p>
        <ul>
          <li>アイセックは、個人情報保護に関する主たる責任と権限の確立、個人データを取り扱う機器及び電子媒体等の盗難又は紛失等を防止するための措置、個人情報の漏えい、データの破壊その他の個人情報の安全管理のために必要かつ適切な措置 (以下「安全管理措置」という。) を講じます。</li>
        </ul>
        <p>
          （2）組織的安全管理措置
        </p>
        <ul>
          <li>個人情報の取扱いに関する個人情報保護管理責任者を設置するとともに、個人情報を取り扱う管理者及び当該管理者が取り扱う個人情報の範囲を明確化し、アイセックの活動において使用する全ての個人情報を特定するための手順を確立し、かつ、維持しています。</li>
        </ul>
        <p>
          （3）人的安全管理措置
        </p>
        <ul>
          <li>個人情報の取扱いに関する留意事項について、法人及び会員団体に適切な方法で教育を実施しています。</li>
          <li>アイセックは、事務局等に個人データを取り扱わせるに当たっては、当該個人データの安全管理が図られるよう、当該事務局等に対する必要かつ適切な監督を行っています。</li>
          <li>アイセックは、個人データについての秘密保持に関する事項を入会時の誓約書に盛り込んでいます。</li>
        </ul>
        <p>
          （4）物理的安全管理措置
        </p>
        <ul>
          <li>個人データの取り扱いにあたって、権限を有しない者による個人データの閲覧を防止する措置を実施しています。</li>
          <li>個人情報の廃棄手順について定め、適切な廃棄措置を実施しています。</li>
        </ul>
        <p>
          （5）技術的安全管理措置
        </p>
        <ul>
          <li>アクセス制御を実施して、担当者及び取り扱う個人情報データベース等の範囲を限定しています。</li>
        </ul>
        <h2  id="pr11" class="policy-content-title">
          11. 仮名加工情報に関して
        </h2>
        <p>（1）利用目的</p>
        <p>アイセックは、個人情報保護法の定めに従い、ご本人の個人情報を他の情報と照合しない限り特定の個人を識別することができないように加工した仮名加工情報を、以下の目的で利用します。</p>
        <ul>
          <li>新規事業でのアイセック海外支部への情報提供のため</li>
          <li>その他、事業の円滑な運営に活用するため</li>
        </ul>
        <p>（2）仮名加工情報の取扱い</p>
        <p>仮名加工情報（他の情報と照合しない限り特定の個人を識別することができないように個人情報を加工して得られる個人に関する情報）を作成する場合には、以下の対応を行います。</p>
        <ul>
          <li>①法令で定める基準に従って、適正な加工を施すこと</li>
          <li>②法令で定める基準に従って、仮名加工情報の作成に用いた個人情報から削除した情報や加工の方法に関する情報の漏えいを防止するために安全管理措置を講じること</li>
          <li>③仮名加工情報の作成の元となった個人情報に係るご本人を識別する目的で、他の情報を照合しないこと</li>
          <li>④前項にある利用目的以外で仮名加工情報を利用しないこと</li>
          <li>⑤ご本人の同意がなく、第三者に仮名加工情報を提供しないこと</li>
        </ul>
        <h2  id="pr12" class="policy-content-title">
          12. 見直し
        </h2>
        <p>個人情報の取扱いにつきましては、事業内容や技術動向の変化にともない上記各項目の内容を適宜見直し、改善してまいります。</p>
        <h2  id="pr13" class="policy-content-title">
          13. お問い合わせ
        </h2>
        <p>
          個人情報保護方針(プライバシーポリシー)に関するお問い合わせについては、下記の電話番号、もしくは<a href="https://www.aiesec.jp/contact-us">アイセック・ジャパン公式HP</a>にあるお問い合わせフォームのご回答をお願いいたします。
        </p>
        <p>
          住所：〒162-0814 東京都新宿区新小川町4-16飯田橋プラレールビル3F
        </p>
        <p>
          特定非営利活動法人アイセック・ジャパン
        </p>
        <p>
          連絡先：03-6457-5806
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { href: "#pr1", text: "01", nextText: "個人情報保護方針" },
        { href: "#pr2", text: "02", nextText: "個人情報の定義" },
        { href: "#pr3", text: "03", nextText: "個人情報の収集方法" },
        { href: "#pr4", text: "04", nextText: "個人情報の利用目的" },
        { href: "#pr5", text: "05", nextText: "個人情報の管理・保護について" },
        { href: "#pr6", text: "06", nextText: "個人情報の第三者提供" },
        { href: "#pr7", text: "07", nextText: "日本国外への移転" },
        { href: "#pr8", text: "08", nextText: "個人情報の開示" },
        { href: "#pr9", text: "09", nextText: "個人情報の訂正及び利用停止等" },
        { href: "#pr10", text: "10", nextText: "安全管理措置" },
        { href: "#pr11", text: "11", nextText: "仮名加工情報に関して" },
        { href: "#pr12", text: "12", nextText: "見直し" },
        { href: "#pr13", text: "13", nextText: "お問い合わせ" }
      ],
      activeButtonIndex: null
    };
  },
  methods: {
    handleClick(index) {
      this.activeButtonIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.policy {
  height: max-content;

  &-container {
    position: relative;
    margin: 5rem 0;
  }

  &-contents{
    position: relative;
    display: flex;
    margin: 0 5%;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    @media(max-width:959px){
      flex-direction: column;
    }
  }

  &-outline{
    width: 30%;
    @media(max-width:959px){
      width: 100%;
      padding-top: 8rem;
      margin-top: -8rem;
      
    }
  }

  &-content {
    width: 70%;
    height: 120vh;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-bottom: 10rem;
    scrollbar-width: none;
    padding-left: 1rem;
    padding-top: 9rem;
    margin-top: -7rem;
    margin-bottom: 3rem;

    @media(max-width:959px){
      width: 100%;
      height: auto;
      overflow:visible;
    }

    &-title {
      color: $dark-gray;
      font-size: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;

      &::before{
        display: block;
        height: 9rem;
        margin-top: -9rem;
        content: "";
      }

    }

    p {
      font-size: 0.875rem;
      line-height: 2;
    }

    ul {
      list-style: circle;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    li {
      font-size: 0.875rem;
      margin: 0.5rem auto;
      color: $dark-gray;
      list-style: disc;

    }
  }
}

.button-container{
  display: flex;
  margin-bottom: 0.8rem;
  margin-left: 3rem;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  justify-content:flex-start;

  .button-nextText{
    display: block;
    font-size: 0.875rem;
    padding: 6px;
    padding-left: 18px;
    margin: auto 0;
  }

  .button{
    position: relative;
    width: 48px;
    height: 48px;
    padding: auto;
    border-radius: 5rem;
    transition: all 0.2s ease 0s;
    text-align: center;
    align-content: center;
    text-decoration: none;

    p{
      display: block;
      margin: 0;
      font-size: 0.875rem;
    }
  }

  &:hover{
    .button{
      border: 1px solid $dark-gray;
      transition: all 0.2s ease 0s;

    }
  }



}

.active{
  .button-nextText{
    color: $blue;
  }
  .button{
      background-color: $blue;
      border: 2px solid $blue;
      transition: all 0.2s ease 0s;
      p{
        color: white;

      }

    }
  &:hover{
    .button{
      border: 2px solid $blue;
    }
  }
}



</style>
