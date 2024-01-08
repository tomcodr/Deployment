<template>
  <Navigation/>

  <div  @click="goBack">
    <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
    </div>
    
    <div class="motor-value">87</div>
    <div class="motor-prozent">%</div>
    <div class="auto-titel">Porsche 911</div>
    
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />


    <gps/>
     
</template>
<script>
  import { defineComponent } from "vue";
  import gps from "../components/gps.vue";
  import Navigation from '../components/Navigation.vue';

  export default defineComponent({
    name: "Motor",
    components: { gps, Navigation },
    methods: {
      goBack() {
      // Navigiere zur vorherigen Seite
      this.$router.go(-1); // Diese Zeile funktioniert in Vue Router
      // Alternativ: window.history.back();
    },
    },
 });
</script>
<style scoped>

  .motor-value {
    position: absolute;
    top: 450px;
    left: 170px;
    font-size: 100px;
    color: #fff;
    font-family: 'Manrope';
  }
  .motor-prozent {
    position: absolute;
    top: 540px;
    left: 300px;
    font-weight: 100;
    color: #fff;
  }
  .auto-titel {
    position: absolute;
    top: 15%;
    left: 48%;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Poppins';
    color: #fff;
  }
  .png-auto-dashboard {
    position: absolute;
    top: 12%;
    left: 30%;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .arrow {
    position: absolute;
    top: 14%;
    left: 10%;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Poppins';
    color: #fff;
    cursor: pointer;
  }
.arrow:hover{
  color:#426b1f;
}
</style>