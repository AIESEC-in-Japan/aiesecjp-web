<template>
  <div class="icx-top-container">
    <div class="icx-top">
      <img
        src="@/assets/images/product_GT-horizontal-white.png"
        alt="GT-logo"
      >
      <h1>
        Globalize your company with AIESEC
      </h1>
      <span>
        アイセックのインターンシップで、グローバルな組織作りを
      </span>
    </div>
  </div>
</template>


<style scoped lang="scss">
 .icx-top-container {
     width: 100%;
     background-image: url("~@/assets/images/icx-top.jpg");
     background-position: center;
     background-repeat: none;
     background-size:cover;  
     height: 100vh;
 }
 .icx-top {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
 }

 img {
     margin-bottom: 25px;
     margin-left: 18px;
     margin-right: 18px;
     margin-top: 18px;
     display: flex;
     width: 400px;
 }

 h1 {
     font-family: "Lato";
     font-size: 25px;
     font-style: oblique;
     display: flex;
     letter-spacing: 0.5px;
     color: white; 
     margin-bottom: 10px;
 }

 span {
     font-family: "游ゴシック";
     font-size: 14px;
     display: flex;
     letter-spacing: 5px;
     color: white; 
     font-weight: lighter; 
 }

</style>
