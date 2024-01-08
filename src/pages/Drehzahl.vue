<template>
      <Navigation/>
  <container class="chart-drehzahl"><ChartDrehzahl/></container>
  <div class="rpm-text">RPM</div>
  <div class="rpm-value"><DrehzahlAnzeige/></div>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
  
  <div class="auto-titel">Porsche 911</div>

  <img
    class="png-auto-dashboard"
    alt=""
    src="/png-auto-dashboard@2x.png"
  />
</template>



<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import DrehzahlAnzeige from "../components/DrehzahlAnzeige.vue";
import ChartDrehzahl from "../components/ChartDrehzahl.vue";

export default defineComponent({
  name: "Drehzahl",
  components: { DrehzahlAnzeige, ChartDrehzahl, Navigation },
  methods: {
goBack() {
    // Navigiere zur vorherigen Seite
    this.$router.go(-1); // Diese Zeile funktioniert in Vue Router
    // Alternativ: window.history.back();
  },
} 
});
</script>


<style scoped>


.rpm-text {
  position: absolute;
  top: 450px;
  left: 350px;
  font-weight: 100;
  color: var(--text-color);
}

.rpm-value {
  position: absolute;
  top: 450px;
  left: 110px;
  font-size: 100px;
  color: var(--text-color);
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
  color: var(--text-color);
}

.chart-drehzahl {
  position: absolute;
  top: 510px;
  left: 550px;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  z-index: 3;
  overflow: hidden;
}

.arrow {
  position: absolute;
  top: 14%;
  left: 10%;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Poppins';
  color: var(--text-color);
  cursor: pointer;
}

.arrow:hover {
  color: #426b1f;
}
</style>
