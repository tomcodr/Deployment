<template>
 <Navigation/>

  <container class = "chart-gang"><ChartGang/></container>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
 
  <div class="gear-text">GEAR</div>
  <div class="gear-value"><GangAnzeige/></div>
    
  <img
    class="png-auto"
    :src="getLatestCarPath"
    alt=""
    />
  
  <div class="auto-titel"></div>
  
    
</template>

<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import GangAnzeige from "../components/GangAnzeige.vue";
import ChartGang from "../components/ChartGang.vue";
import store from '../store/store';

export default defineComponent({
  name: "Gang",
  components: { GangAnzeige, ChartGang, Navigation },
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
.png-auto {
  position: absolute;
  top: 25%;
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