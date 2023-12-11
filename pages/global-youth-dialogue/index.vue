<template>
  <div>
    <GlobalYouthDialogueTop />
    <GlobalYouthDialogueDetail />
    <GlobalYouthDialogueVoice />
    <GlobalYouthDialogueApply />
    <GlobalYouthDialogueFixedFooter />
  </div>
</template>

<script>
  export default {
    head() {
      return{
        title: 'global youth dialogue',
        meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {hid: 'description', name: 'description', content: 'AIESEC in Japan official website'}
        ],
        link: [
          {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
          {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-KTWNHJF2EJ' 
          },
          {
            innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-KTWNHJF2EJ');`
          }
          // , cookie許可機能導入に伴い未対応のため、Facebook Metaタグ一時停止
          // // Meta Pixel Code
          // {
          //   innerHTML: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '441541344740997');fbq('track', 'PageView');`
          // }
        ],
        __dangerouslyDisableSanitizers: ['script']
        // ,
        // noscript: [
        //   {
        //     innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=441541344740997&ev=PageView&noscript=1"/>`,
        //   }
        // ],
      }
    }
  }
</script>

