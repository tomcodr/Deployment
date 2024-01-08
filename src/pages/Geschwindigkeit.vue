<template>
 <Navigation/>
    
  <container class = "chart-geschwindigkeit"><ChartGeschwindigkeit/></container>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>

  <img
    class="png-auto"
    alt=""
    src="/png-auto-dashboard@2x.png"
  />
 
  
  
  <div class="kmh">KM/H</div>
  <div class="geschwindigkeit-value"><GeschwindigkeitAnzeige/></div>
  <div class="auto-titel">Porsche 911</div>


</template>
<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue";
import ChartGeschwindigkeit from "../components/ChartGeschwindigkeit.vue";

export default defineComponent({
  name: "Geschwindigkeit",
  components: { GeschwindigkeitAnzeige, ChartGeschwindigkeit, Navigation },
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

.png-auto {
  position: absolute;
  top: 12%;
  left: 30%;
  width: 670px;
  height: 287px;
  object-fit: cover;
  opacity: 0.7;
}

.kmh {
  position: absolute;
  top: 450px;
  left: 350px;
  font-weight: 100;
  color: #fff;
}
.geschwindigkeit-value {
  position: absolute;
  top: 450px;
  left: 110px;
  font-size: 100px;
  color: #fff;
  font-family: 'Manrope';
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


.chart-geschwindigkeit {
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