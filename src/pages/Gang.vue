<template>
 <Navigation/>

  <container class = "chart-gang"><ChartGang/></container>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
 
  <div class="gear-text">GEAR</div>
  <div class="gear-value"><GangAnzeige/></div>
  <img
    class="png-auto-dashboard"
    alt=""
    src="/png-auto-dashboard@2x.png"
  />
  
  <div class="auto-titel">Porsche 911</div>
  
    
</template>

<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import GangAnzeige from "../components/GangAnzeige.vue";
import ChartGang from "../components/ChartGang.vue";


export default defineComponent({
  name: "Gang",
  components: { GangAnzeige, ChartGang, Navigation },
  methods: {
    onProfilIconClick() {
      this.$router.push("/profil");
    },
    onPNGCartrackerLogoImageClick() {
      this.$router.push("/");
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
.gear-text {
  position: absolute;
  top: 450px;
  left: 350px;
  font-weight: 100;
  color: #fff;
}
.gear-value {
  position: absolute;
  top: 450px;
  left: 110px;
  font-size: 100px;
  color: #fff;
  font-family: 'Manrope';
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
.auto-titel {
  position: absolute;
  top: 15%;
  left: 48%;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins';
  color: #fff;
}




.chart-gang {
  position: absolute;
  top: 410px;
  left: 550px;
  max-width: 100%; 
  max-height: 100%;
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