<template>
  <section>
    <div class="scroll-container">
      <a
        class="button"
        href="#outline"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll{

  &-container{
    display: none;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0;  

    .button{
      position: relative;
      display: block;
      right: 30px;
      bottom: 30px;
      width: 60px;
      height: 60px;
      padding: auto;
      border-radius: 5rem;
      transition: all 0.2s ease 0s;
      text-align: center;
      align-content: center;
      text-decoration: none;
      background-color: $blue;

      p{
        display: block;
        margin: 0;
        font-size: 0.875rem;
      }
    }

    .button::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 3px;
      bottom: 0;
      left: 24px;
      width: 12px;
      height: 12px;
      border-top: 1.5px solid #fff;
      border-right: 1.5px solid #fff;
      transform: rotate(-45deg);
    }
    
    @media(max-width:959px){
      display: block;
    }
    
  }
}
</style>
