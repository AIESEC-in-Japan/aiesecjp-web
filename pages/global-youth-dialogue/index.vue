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
            src: 'https://www.google-analytics.com/analytics.js',
            type: 'text/javascript'
          },
          {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-222793123-5' 
          },
          {
            innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-222793123-5');`
          }
        ],
        __dangerouslyDisableSanitizers: ['script'],
      } 
    }
  }
</script>

