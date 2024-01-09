<template>    
        <Navigation/>
  
  <div  @click="onPlusClick" class="plus-icon"> <i class='bx bx-plus' ></i></div>
  <div  @click="goBack">
   <div class="arrow"><i class='bx bx-left-arrow-alt'></i></div>
   </div>
   
   <div class="fahrzeug-hinzufuegen-text">Fahrzeuge Hinzufügen</div>
  
<CarouselExample/>

</template>
<script>
 import { defineComponent } from "vue";
 import Navigation from '../components/Navigation.vue';
 import CarouselExample from "../components/CarouselExample.vue";

 export default defineComponent({
   name: "Fahrzeuge",
   components: { CarouselExample, Navigation},
   methods: {
     onPlusClick() {
       this.$router.push("/fahrzeughinzufuegen");
     },
   },
   methods: {
    onPlusClick(){
this.$router.push('/fahrzeughinzufuegen')
    },
 goBack() {
     // Navigiere zur vorherigen Seite
     this.$router.go(-1); // Diese Zeile funktioniert in Vue Router
     // Alternativ: window.history.back();
   },
} 
});
</script>
<style scoped>
 .plus-icon {
   position: absolute;
   top: 57%;
   left: 90%;
   width: 85.5px;
   height: 85.5px;
   overflow: hidden;
   cursor: pointer;
   color: #fff;
   font-size: 50px;
 }
 .fahrzeug-hinzufuegen-text {
   position: absolute;
   top: 60%;
   left: 65.76%;
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