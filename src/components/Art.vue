<template>
  <div class="art">
    
    <div class="pick-up-text">PICK-UP</div>
    <div class="geleanderwagen-text">GELÄNDEWAGEN</div>
    
    <div class="cabrio-text">CABRIO</div>
    <div class="coupe-text">COUPE</div>
    <div class="limousine-text">LIMOUSINE</div>
  
  </div>

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Art",
  });
</script>
<style scoped>
  .pick-up-text {
    position: absolute;
    height: 14.01%;
    width: 77.49%;
    top: 79.21%;
    left: 6.27%;
    display: inline-block;
  }
  .geleanderwagen-text {
    position: absolute;
    height: 14.01%;
    width: 77.49%;
    top: 65.35%;
    left: 6.27%;
    display: inline-block;
  }
  .cabrio-text {
    position: absolute;
    height: 14.01%;
    width: 77.49%;
    top: 34.65%;
    left: 6.27%;
    display: inline-block;
  }
  .coupe-text {
    position: absolute;
    height: 14.01%;
    width: 77.49%;
    top: 19.31%;
    left: 6.27%;
    display: inline-block;
  }
  .limousine-text {
    position: absolute;
    height: 14.01%;
    width: 77.49%;
    top: 3.61%;
    left: 5.9%;
    display: inline-block;
  }
  .art {
    position: relative;
    background-color: var(--color-gray-100);
    width: 271px;
    height: 202px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>