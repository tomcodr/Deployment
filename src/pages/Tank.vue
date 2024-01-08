<template>
    <Navigation/> 
  <div  @click="goBack">
    <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
    </div>
    
    <div class="tankstand-value"><TankAnzeige/></div>
    <img class="tank-leiste-hintergrund" alt="" src="/tank-hintergrund.svg" />
    <img class="tank-aktuell-leiste" alt="" src="/tankbalken-aktuell.svg" />
    
    <img
      class="png-auto"
      alt=""
      :src="getImagePath"
    />
    <div class="auto-titel">Porsche 911</div>
    
    
</template>
<script>
  import { defineComponent } from "vue";
  import Navigation from '../components/Navigation.vue';
  import MesswerteDropdown from "../components/MesswerteDropdown.vue";
  import TankAnzeige from "../components/TankAnzeige.vue";
  import store from "../store/store";


  export default defineComponent({
    name: "Tank",
    components: { MesswerteDropdown, TankAnzeige, Navigation },
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
  .tankstand-value {
    position: absolute;
    top: 450px;
    left: 110px;
    font-size: 100px;
    color: #fff;
    font-family: 'Manrope';
  }
  .tank-leiste-hintergrund {
    position: absolute;
    top: 643px;
    left: 144px;
    border-radius: 56px;
    width: 1193px;
    height: 122px;
  }
  .tank-aktuell-leiste {
    position: absolute;
    top: 654px;
    left: 148px;
    border-radius: 56px;
    width: 1185px;
    height: 103px;
  }
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