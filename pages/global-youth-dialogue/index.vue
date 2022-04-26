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
      title: 'aiesecjp-web',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: 'AIESEC in Japan official website'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
      script: [{
        async: true,
        src: ‘https: //www.googletagmanager.com/gtag/js?id=G-F3F77C5HPD’ 
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(‘js’, new Date());gtag(‘config’, ‘G-F3F77C5HPD’);`
        }
      ]
    } 
  }
}
</script>

