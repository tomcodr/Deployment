<template>
     <Navigation/> 

  <div  @click="goBack">
      <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
      </div>
  
      <container class = "chart-trips"><ChartTrips/></container>
      
      
      
      <img
        class="auto-dashboard"
        alt=""
        src="/png-auto-dashboard@2x.png"
      />
      
      <div class="auto-titel">Porsche 911</div>
     
  </template>
  
  <script>
    import { defineComponent } from "vue";
    import Navigation from '../components/Navigation.vue';
    import MesswerteDropdown from "../components/MesswerteDropdown.vue";
    import ChartTrips from "../components/ChartTrips.vue";
  
    export default defineComponent({
      name: "Trips",
      components: { MesswerteDropdown, ChartTrips, Navigation },
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
  
    .auto-dashboard {
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
    .chart-trips {
      position: absolute;
      top: 410px;
      left: 250px;
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