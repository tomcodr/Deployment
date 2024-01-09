<template>
 <Navigation/>
    
  <container class = "chart-geschwindigkeit"><ChartGeschwindigkeit/></container>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>

  <img
    class="png-auto"
    :src="getLatestCarPath"
    alt=""
    />
 
  
  
  <div class="kmh">KM/H</div>
  <div class="geschwindigkeit-value"><GeschwindigkeitAnzeige/></div>
  <div class="auto-titel"></div>


</template>
<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue";
import ChartGeschwindigkeit from "../components/ChartGeschwindigkeit.vue";
import store from '../store/store';


export default defineComponent({
  name: "Geschwindigkeit",
  components: { GeschwindigkeitAnzeige, ChartGeschwindigkeit, Navigation },
  computed: {
    getLatestCarPath() {
      const carPaths = store.getters.getCarPaths;

      // Wenn das Array carPaths nicht leer ist, gib den neuesten Wert zurück
      if (carPaths.length > 0) {
        const latestPath = carPaths[carPaths.length - 1];
        return latestPath;
      } else {
        // Wenn das Array leer ist, gib einen leeren String zurück oder einen Standardpfad
        return '/default-car-image.png'; // Passe dies entsprechend an
      }
    
    },
  },
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
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
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
  top: 15%; /* Zentrieren vertikal */
  left: 50%; /* Zentrieren horizontal */
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  white-space: nowrap; /* Verhindert, dass der Text umbrochen wird */
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