<template>
  <Navigation />
  <div @click="goBack">
    <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
  <div class="layout-green" @click="setMode('green')" />
  <div class="layout-white" @click="setMode('white')" />
  <div class="layout-blue" @click="setMode('blue')" />
  <div class="darkmode-schalter">
    <div class="grün-text">Grün</div>
    <div class="weiß-text">Weiß</div>
    <div class="frozen-text">Frozen</div>
  </div>
</template>



<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';

export default defineComponent({
  name: "Layout",
  components: { Navigation },
  methods: {
    setMode(mode) {
      document.documentElement.style.setProperty('--secondary-color', `var(--${mode}-color)`);
    },
    goBack() {
      // Navigiere zur vorherigen Seite
      this.$router.go(-1); // Diese Zeile funktioniert in Vue Router
      // Alternativ: window.history.back();
    },
  },
});
</script>

<style scoped>

 .layout-white {
   position: absolute;
   top: 35%;
   left: 42%;
   border-radius: 40px;
   background: linear-gradient(-2.09deg, #fff 53.13%, rgba(217, 217, 217, 0));
   width: 211px;
   height: 211px;
   opacity: 0.4;
 }
 .layout-blue {
   position: absolute;
   top: 35%;
   left: 57%;
   border-radius: 40px;
   background: linear-gradient(
     -2.09deg,
     #1dc4ce 53.13%,
     rgba(217, 217, 217, 0)
   );
   width: 211px;
   height: 211px;
   opacity: 0.4;
 }
 .layout-green {
   position: absolute;
   top: 35%;
   left: 27%;
   border-radius: 40px;
   background: linear-gradient(
     -2.09deg,
     #426b1f 53.13%,
     rgba(217, 217, 217, 0)
   );
   width: 211px;
   height: 211px;
   opacity: 0.4;
 }
 .layout-green:hover,
 .layout-white:hover,
 .layout-blue:hover {
   width: 220px; 
   height: 220px; 
   opacity: 0.8; 
   transition: all 0.3s ease; 
 }

 [data-active-mode="white"] .layout-white,
[data-active-mode="blue"] .layout-blue,
[data-active-mode="green"] .layout-green {
  width: 220px;
  height: 220px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

 .grün-text {
 position: absolute;
 height: 15px;
 width: 109px;
 top: 65%;
 left: 32.4%;
 font-weight: 800;
 display: inline-block;
 color: #fff;
}

.weiß-text {
 position: absolute;
 height: 15px;
 width: 109px;
 top: 65%;
 left: 47.3%;
 font-weight: 800;
 display: inline-block;
 color: #fff;
}

.frozen-text {
 position: absolute;
 height: 15px;
 width: 109px;
 top: 65%;
 left: 62.2%;
 font-weight: 800;
 display: inline-block;
 color: #fff;
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
  .arrow:hover {
  color: var(--text-color);
}



</style>