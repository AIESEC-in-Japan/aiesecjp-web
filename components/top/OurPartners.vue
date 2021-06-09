<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
    <CorporateLogo 
    />
    <!-- <div class="partners-contents">
      <img src="@/assets/2020corporation-logo/accenture.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/enjapan.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/endroll.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/オースビー.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/gaiax.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/givery.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/sairu.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/sansan.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/sunstar.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/cuc.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/schneiderelectric.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/johnsonandjohnson.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/spartaenglishmethod.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/softbank.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/dentsu.gif" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/toyobo.svg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/nissan.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/nissha.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/panasonic.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/prtable.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/bizreach.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/florence.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/mizuho.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/langoo.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/lifull.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/RIZAP.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/realworld.png" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/リクルートマネジメントソリューションズ.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/legaseed.jpg" alt="" class="partners-content">
      <img src="@/assets/2020corporation-logo/wacul.png" alt="" class="partners-content">
    </div> -->
  </div>
</template>

<script>
// const corporatelogo = [
//   {name: accenture.png, alt: ""},
//   {name: enjapan.png, alt: ""},
//   {name: endroll.jpg, alt: ""},
//   {name: オースビー.png, alt: ""},
//   {name: gaiax.png, alt: ""},
// ]




</script>



<style scoped lang="scss">
.partners-container {
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: $blue;
    font-size: 24px;
    letter-spacing: 2px;
    padding-top: 150px;
  }
}
.partners-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 75px;
}
.partners-content {
  width: 120px;
  height: 120px;
  margin: 30px;
  object-fit: contain;
}
.partners-content-empty {
  width: 200px;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 30px 0;
}
</style>
