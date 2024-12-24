<template>
  <div
    id="cookieBanner"
    class="cookie-banner"
  >
    <div class="cookie-description">
      <p>
        当ウェブサイトでは、お客様により適したサービスの提供や、サイト改善のために、クッキーを使用しています。クッキーの使用に同意いただける場合は「同意する」を選択してください。
        詳細については <a
          href="https://drive.google.com/file/d/1W-i_srZ4L0T8AOzweW-tNDiUPO-EDxjU/view?usp=drive_link"
          target="_blank"
        >Cookieポリシー</a>をご覧ください。
      </p>
    </div>
    <div class="cookie-button">
      <button
        id="acceptCookie"
        class="button-accept"
      >
        同意する
      </button>    
      <button
        id="denyCookie"
        class="button-deny"
      >
        拒否する
      </button>    
    </div>
  </div>
</template>

<script>

if (process.client) {
  
  'use strict';

  //設定
  //GA_ID は必ず実際に使用しているプロファイル ID に変更してください
  const GA_ID = ['G-0XWZPJW27L','G-KTWNHJF2EJ', 'G-1KK59RE2KP', 'G-M05GSK8635']; // gyd, lp-outgoing, lp-incoming
  //Cookie の有効期限（1年 = 31536000秒）
  const cookie_max_age = 60 * 60 * 24 * 365;

  //Cookie を取得
  const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  //Cookie をセット
  const setCookie = (name, value, options = {}) => {
    options = {
      path: '/',
      secure: true,
      samesite: 'Lax',
      ...options
    };

    if (options.expires) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }

  document.onreadystatechange = () => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      const cookie = getCookie('ga_cookie_opt_in');
      const ga_disable =  new Array(GA_ID.length);
      for(var i = 0; i < GA_ID.length; i++){
        ga_disable[i] = 'ga-disable-' + GA_ID[i];
      }

      //Cookie をチェックして ga_cookie_opt_in が存在するかを確認
      if (cookie != null) {
        //ga_cookie_opt_in が存在する場合、Cookie をチェックして ga_cookie_opt_in の値を取得
        if (cookie == 'yes') {
          //ga_cookie_opt_in = yes なら Google Analytics トラッキングコードを発行
          setCookie('_ga', 'yes', { 'max-age': cookie_max_age });
          setCookie('_gid', 'yes', { 'max-age': cookie_max_age });
          for(i = 0; i < GA_ID.length; i++){
            setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'yes', { 'max-age': cookie_max_age });
          }
          
        } else if (cookie == 'no') {
          //ga_cookie_opt_in = no なら Google Analytics を無効に
          console.log('ga_cookie_opt_in = no / ga-disable = true');
          for(i = 0; i < GA_ID.length; i++){
            window[ga_disable[i]] = true;
          }
          setCookie('_ga', 'no', { 'max-age': 0 });
          setCookie('_gid', 'no', { 'max-age': 0 });
          for(i = 0; i < GA_ID.length; i++){
            setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'no', { 'max-age': 0 });
          }
        } else {
          //ga_cookie_opt_in の値が yes でも no でもない場合は例外なので Google Analytics を無効に
          console.log('ga_cookie_opt_in = Unpredictable value');
          for(i = 0; i < GA_ID.length; i++){
            window[ga_disable[i]] = true;
          }
          setCookie('_ga', 'no', { 'max-age': 0 });
          setCookie('_gid', 'no', { 'max-age': 0 });
          for(i = 0; i < GA_ID.length; i++){
            setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'no', { 'max-age': 0 });
          }
        }
      } else {
        //ga_cookie_opt_in が存在しない場合は一旦 Google Analytics を無効にして通知を表示
        console.log('ga_cookie_opt_in = null');
        for(i = 0; i < GA_ID.length; i++){
          window[ga_disable[i]] = true;
        }
        setCookie('_ga', 'no', { 'max-age': 0 });
        setCookie('_gid', 'no', { 'max-age': 0 });
        for(i = 0; i < GA_ID.length; i++){
          setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'no', { 'max-age': 0 });
        }
        // クッキーの同意がない場合、同意バナーを表示
        document.getElementById('cookieBanner').style.display = 'flex';

      }

      //各要素の取得
      const elm_accept_bar = document.getElementById('cookieBanner')
      const elm_accept_btn = document.getElementById('acceptCookie');
      const elm_deny_btn = document.getElementById('denyCookie');

      if (elm_accept_bar) {
        //「同意する」ボタンのクリックでオプトイン（ga_cookie_opt_in = yes）
        if (elm_accept_btn) {
          elm_accept_btn.onclick = () => {
            setCookie('ga_cookie_opt_in', 'yes', { 'max-age': cookie_max_age });
            setCookie('_ga', 'yes', { 'max-age': cookie_max_age });
            setCookie('_gid', 'yes', { 'max-age': cookie_max_age });
            for(i = 0; i < GA_ID.length; i++){
              setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'yes', { 'max-age': cookie_max_age });
            }
            elm_accept_bar.classList.add('state-remove');
            location.reload();
          };
        } else {
          //何らかの理由で要素が取得できなかった
          console.log('elm_accept_btn = ' + elm_accept_btn);
        }
        //「同意しない」ボタンのクリックでオプトアウト（ga_cookie_opt_in = no）
        if (elm_deny_btn) {
          elm_deny_btn.onclick = () => {
            setCookie('ga_cookie_opt_in', 'no', { 'max-age': cookie_max_age });
            setCookie('_ga', 'no', { 'max-age': 0 });
            setCookie('_gid', 'no', { 'max-age': 0 });
            for(i = 0; i < GA_ID.length; i++){
              setCookie('_ga_'+ GA_ID[i].replace('G-', ''), 'no', { 'max-age': 0 });
            }
            elm_accept_bar.classList.add('state-remove');
            location.reload();
          };
        } else {
          //何らかの理由で要素が取得できなかった
          console.log('elm_deny_btn = ' + elm_deny_btn);
        }
      } else if (cookie != null) {
        //すでに「同意する」ボタンを押下済みなので通知が非表示だった
        console.log('name-ga-cookie-accept-bar is invisible');
      } else {
        //何らかの理由で要素が取得できなかった
        console.log('elm_accept_bar = ' + elm_accept_bar);
      }
    }
  };  
}

</script>

<style lang="scss" scoped>
.cookie-banner{
  z-index: $cookieBanner;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vm;
  background-color: $light-gray;
  padding: 1.6em 8em;
  display: none;
  box-shadow: 0 3px 5px #52565E;
  border-top: 0.6px solid $dark-gray;
  
  @include tab{
    padding: 1.5em 2.4em;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    padding: 0.5em 2.5em;
    box-shadow: none;
  }

  @include sp{
    padding: 0.5em 1em;
  }

  .cookie-description{
    margin-top: 1rem;
    width: 60%;
    p{
      margin-bottom: 0;
      font-size:1em;
      @include tab{
        font-size: 0.875rem;
      }
    }

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  .cookie-button{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    float: none;
    padding-top: 1em;
    
    @include tab{
      padding: 0.4em;
    }
    @media screen and (max-width: 768px){
      width: 100%;
      padding: 0.8em;
    }
    @include sp{
    }
    

    button{
      width: 160px;
      padding: 20px;
      transition: 0.3s all;
      border-radius: 0.26em;

      
      &:hover{
        opacity: 0.7;
      }
      @include tab{
        width: 140px;
        padding: 15px;
      }
      @include sp{
        width: 120px;
        padding: 10px;
        margin: 0 0.2em;
      }
    }
    .button-accept{
      color: #fff;
      background-color: $blue;
      margin-left: 0;
    }
    .button-deny{
      color: #000;
      background-color: $gray;
    
    }
  }

}

</style>