<template>
   <Navigation/>

    
  <container class = "chart-hoehe"><ChartHoehe/></container>
  <div  @click="goBack">
  <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
  </div>
  <div class="motor-value"><HoeheAnzeige/></div>

  <div class="auto-titel">Porsche 911</div>
  
  <img
      class="png-auto-dashboard"
      alt=""
      :src="getImagePath"
    />

</template>
<script>
import { defineComponent } from "vue";
import Navigation from '../components/Navigation.vue';
import ChartHoehe from "../components/ChartHoehe.vue";
import HoeheAnzeige from "../components/HoeheAnzeige.vue";
import store from "../store/store";


export default defineComponent({
  name: "Motor",
  components: { ChartHoehe, HoeheAnzeige, Navigation },
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

.motor-value {
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
.png-auto-dashboard {
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

.chart-hoehe {
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