<template>
      <Navigation/>
  <container class="chart-drehzahl"><ChartDrehzahl/></container>
  <div class="rpm-text">RPM</div>
  <div class="rpm-value"><DrehzahlAnzeige/></div>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
  
  <div class="auto-titel"></div>

  
  <img
    class="png-auto-dashboard"
    :src="getLatestCarPath"
    alt=""
    />




</template>



<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import DrehzahlAnzeige from "../components/DrehzahlAnzeige.vue";
import ChartDrehzahl from "../components/ChartDrehzahl.vue";
import store from '../store/store';


export default defineComponent({
  name: "Drehzahl",
  components: { DrehzahlAnzeige, ChartDrehzahl, Navigation },
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
} 
});
</script>

<style scoped>

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
.porsche-von-oben {
  position: absolute;
  top: 13rem;
  left: 203px;
  width: 435px;
  height: 498px;
  object-fit: cover;
}
.dreieck-hr-icon {
  position: absolute;
  top: 558.2px;
  left: 524.6px;
  border-radius: 20px;
  width: 46.5px;
  height: 15.9px;
}
.dreieck-hl-icon {
  position: absolute;
  top: 556.2px;
  left: 267.3px;
  border-radius: 20px;
  width: 46.5px;
  height: 15.9px;
}
.dreieck-vr-icon {
  position: absolute;
  top: 313.2px;
  left: 519.6px;
  border-radius: 20px;
  width: 46.5px;
  height: 15.9px;
}
.dreieck-vl-icon {
  position: absolute;
  top: 311.2px;
  left: 275.3px;
  border-radius: 20px;
  width: 46.5px;
  height: 15.9px;
}
.reifen-hr-value {
  position: absolute;
  top: 547px;
  left: 577px;
  font-weight: 300;
  display: inline-block;
  width: 99px;
  height: 43px;
  color: #fff;
}
.reifen-hl-value {
  position: absolute;
  top: 543px;
  left: 235px;
  font-weight: 300;
  display: inline-block;
  width: 99px;
  height: 43px;
  color: #fff;
}
.reifen-vr-value {
  position: absolute;
  top: 302px;
  left: 577px;
  font-weight: 300;
  display: inline-block;
  width: 99px;
  height: 43px;
  color: #fff;
}
.reifen-vl-value {
  position: absolute;
  top: 298px;
  left: 240px;
  font-weight: 300;
  display: inline-block;
  width: 99px;
  height: 43px;
  color: #fff;
}

.bremsen-header {
  position: absolute;
  top: 62px;
  left: 174px;
  width: 1064px;
  height: 67px;
  font-size: 21px;
  font-family: 'Poppins';
}

.chart-bremstemperaturen {
  position: absolute;
  top: 280px;
  left: 700px;
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
[19:16, 8.1.2024] Faruk  Mercan: <style scoped>
.rpm-text {
  position: absolute;
  top: 450px;
  left: 350px;
  font-weight: 100;
  color: #fff;
}
.rpm-value {
  position: absolute;
  top: 450px;
  left: 110px;
  font-size: 100px;
  color: #fff;
  font-family: 'Manrope';
}

.png-auto-dashboard {
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

.chart-drehzahl {
  position: absolute;
  top: 410px;
  left: 550px;
  max-width: 80%; 
  max-height: 50%;
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