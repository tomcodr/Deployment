<template>
     <Navigation/> 

  <div  @click="goBack">
      <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
      </div>
  
      <container class = "chart-oel"><ChartOel/></container>
      <container class = "chart-wasser"><ChartOel/></container>
  
      <img
      class="png-auto-dashboard-icon4"
      alt=""
      :src="getImagePath"
    />
      
      <img class="wasser-icon" alt="" src="/png-wasser-icon@2x.png" />
      <div class="wasser-value"><WasserTemperaturAnzeige/></div>
      <div class="l-function2"><OelTemperaturAnzeige/></div>
      <img class="oel-icon" alt="" src="/png-l-icon@2x.png" />
      
      
      <div class="auto-titel">Porsche 911</div>
  </template>
  
  
  
  <script>
    import { defineComponent } from "vue";
    import Navigation from '../components/Navigation.vue';
    import WasserTemperaturAnzeige from "../components/WasserTemperaturAnzeige.vue";
    import ChartOel from "../components/ChartOel.vue";
    import store from '../store/store';
  
    export default defineComponent({
      name: "Temperaturen",
      components: { WasserTemperaturAnzeige, ChartOel, Navigation },
      computed: {
    getImagePath() {
      return store.getters.getImagePath;
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
    .png-auto-dashboard-icon4 {
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
      top: 254px;
      left: 1089px;
      font-weight: 300;
      display: inline-block;
      width: 78px;
      height: 42px;
    }
    .l-function2 {
      position: absolute;
      top: 254px;
      left: 259px;
      font-weight: 300;
      display: inline-block;
      width: 78px;
      height: 42px;
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