<template>
     <Navigation/> 

  <div  @click="goBack">
      <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
      </div>
  
      <container class = "chart-oel"><ChartOel/></container>
      <container class = "chart-wasser"><ChartWater/></container>
  
      <img
    class="png-auto-dashboard"
    :src="getLatestCarPath"
    alt=""
    />
 
      
      <img class="wasser-icon" alt="" src="/png-wasser-icon@2x.png" />
      <div class="wasser-value"><WasserTemperaturAnzeige/></div>
      <div class="oel-value"><OelTemperaturAnzeige/></div>
      <img class="oel-icon" alt="" src="/png-l-icon@2x.png" />
      
      
      <div class="auto-titel"></div>
  </template>
  
  
  
  <script>
    import { defineComponent } from "vue";
    import Navigation from '../components/Navigation.vue';
    import OelTemperaturAnzeige from "../components/OelTemperaturAnzeige.vue";
    import WasserTemperaturAnzeige from "../components/WasserTemperaturAnzeige.vue";
    import ChartOel from "../components/ChartOel.vue";
    import ChartWater from "../components/ChartWater.vue";
    import store from '../store/store';
  
    export default defineComponent({
      name: "Temperaturen",
      components: { WasserTemperaturAnzeige, OelTemperaturAnzeige, ChartOel, ChartWater, Navigation },
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
    .png-auto-dashboard {
      position: absolute;
      top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  opacity: 0.7;
    }
    .wasser-icon {
      position: absolute;
      top: 259px;
      left: 1172px;
      width: 28px;
      height: 37px;
      object-fit: cover;
    }
    .wasser-value {
      position: absolute;
      top: 260px;
      left: 1110px;
      font-size: 20px;
      font-weight: 300;
      display: inline-block;
      width: 78px;
      height: 42px;
      color:#fff;
    }
    .oel-value {
      position: absolute;
      top: 130px;
      left: 100px;
      font-size: 20px;
      font-weight: 800;
      display: inline-block;
      width: 78px;
      height: 42px;
      color:#fff;
    }
    .oel-icon {
      position: absolute;
      top: 256px;
      left: 260px;
      width: 52px;
      height: 37px;
      object-fit: cover;
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
   
    .chart-oel {
      position: absolute;
      top: 410px;
      left: 80px;
      max-width: 100%; 
      max-height: 100%;
    }
    .chart-wasser {
      position: absolute;
      top: 410px;
      left: 800px;
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