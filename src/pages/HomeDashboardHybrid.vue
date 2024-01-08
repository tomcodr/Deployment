/Test



<template>
  <Navigation/>
  <div class="home-dashboard-hybrid">
    
    
   
      
  <div class="gang">
    <div class="gang-background" @click="onGangContainerClick"></div>
    <b class="gang-value"><GangAnzeige/></b>
    <div class="gangtitel">Gang</div>
    <div @click="onGangContainerClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
  </div>
      
      <div class="bremse">
          <div class="bremse-background" @click=" onBremseContainerClick"></div>
          <b class="bremse-value"><BremseAnzeige/></b>
          <div class="bremsetitel">Bremsdruck</div>
          <div @click="onBremseContainerClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
      
      <div class="geschwindigkeit">
        <div class="geschwindigkeit-background" @click="onSpeedContainerClick"></div>
        <b class="geschwindigkeit-value"><GeschwindigkeitAnzeige/></b>
        <div class="geschwindigkeittitel">Geschwindigkeit</div>
        <div @click="onSpeedContainerClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>

      
      
      <div class="oel-wasser">
        <div class="oelwasser-background" @click="onWasserContainerClick"></div>
        <img class="png-wasser-icon"  src="/png-wasser-icon@2x.png" />
        <img class="png-oel-icon"  src="/png-l-icon@2x.png" />
        <b class="wasser-value"><WasserTemperaturAnzeige/></b>
        <b class="oel-value"><OelTemperaturAnzeige/></b>
        <div @click="onWasserContainerClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>


      <div class="drehzahl">
        <div class="drehzahl-background" @click="onDrehzahlContainerClick"></div>
        <b class="drehzahl-value"><DrehzahlAnzeige/></b>
        <div class="drehlzahltitel">Drehzahl</div>
        <div @click="onDrehzahlContainerClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
   
    
    

  
    <div class="motorhaube-text">Motorhaube</div>
    <div class="spoiler-closed"><SpoilerAnzeige/></div>
    <div class="motorhaube-closed" v-if="currentLocale === 'de'" :style="{ left: '71%' }">
      Geschlossen'
    </div>

    <div class="motorhaube-closed" v-else :style="{ left: '71%' }">
      Closed
    </div>
    <div class="spoiler-text">Spoiler</div>
    <div class="hupe-text">Hupe</div>
    <div class="hupe-aktiv"><HupeAnzeige/></div>
    <div class="abs-aktiv"><ABS/></div>
    <div class="abs-text">ABS</div>
    <div class="bremse-text">Bremse</div>
    <div class="bremse-aktiv"><BremseJaNein/></div>
  


    
    <div class="batterie-Wert-Hybrid">75%</div>
    <img
      class="png-batterie-icon"
      alt=""
      src="/png-batterie-icon-elektrisch@2x.png"
    />
    <img
      class="batterie-balken-hintergrund-hybrid"
      alt=""
      src="/batterie-balken-hintergrund-hybrid.svg"
    />
    <img
      class="batterie-balken-aktuell-hybrid"
      alt=""
      src="/batterie-balken-aktuell-hybrid.svg"
    />
    <div><TankAnzeige/></div>
    <div><TankvolumenAnzeige/></div>
    <div class="png-tank-icon-hybrid"><i class='bx bxs-gas-pump'></i></div>
    <img
      class="tank-balken-hintergrund-hybrid"
      alt=""
      src="/batterie-balken-hintergrund-elektrisch.svg"
    />
    <img
      class="tank-balken-aktuell-hybrid"
      alt=""
      src="/batterie-balken-aktuell-elektisch.svg"
    />
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    <div class="auto-titel">Porsche 911</div>

    </div>
  
  
</template>







<script>
  import { defineComponent } from "vue";
  import Navigation from '../components/Navigation.vue';
  import GangAnzeige from "../components/GangAnzeige.vue"
  import DrehzahlAnzeige from "../components/DrehzahlAnzeige.vue"
  import TankAnzeige from "../components/TankAnzeige.vue"
  import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue"
  import OelTemperaturAnzeige from "../components/OelTemperaturAnzeige.vue"
  import BremseAnzeige from "../components/BremseAnzeige.vue"
  import WasserTemperaturAnzeige from "../components/WasserTemperaturAnzeige.vue"
  import SpoilerAnzeige from "../components/SpoilerAnzeige.vue"
  import HupeAnzeige from "../components/HupeAnzeige.vue"
  import ABS from "../components/ABS.vue"
  import BremseJaNein from "../components/BremseJaNein.vue"
  import TankvolumenAnzeige from "../components/TankvolumenAnzeige.vue"




  export default defineComponent({
    name: "HomeDashboardHybrid",
    data() {
      return {
       
      };
    },
    components: { GangAnzeige, DrehzahlAnzeige, TankAnzeige, GeschwindigkeitAnzeige, OelTemperaturAnzeige, BremseAnzeige, WasserTemperaturAnzeige, SpoilerAnzeige, HupeAnzeige,ABS, BremseJaNein, TankvolumenAnzeige, Navigation},
    methods: {
      
      onGangContainerClick() {
        this.$router.push("/gang");
      },
      onBremseContainerClick() {
        this.$router.push("/bremsen");
      },
      onSpeedContainerClick() {
        this.$router.push("/geschwindigkeit");
      },
      onWasserContainerClick() {
        this.$router.push("/temperaturen");
      },
      onDrehzahlContainerClick() {
        this.$router.push("/drehzahl");
      },
      openSideBoardMenu() {
        this.isSideBoardMenuOpen = true;
      },
      closeSideBoardMenu() {
        this.isSideBoardMenuOpen = false;
      },
      onProfilIconClick() {
        this.$router.push("/profil");
      },
      async fetchDataForComponents() {
        try {
          const fetchPromises = [];

          if (this.$refs.GangAnzeige) {
            fetchPromises.push(this.$refs.GangAnzeige.fetchGearValue());
          }

          if (this.$refs.BremseAnzeige) {
            fetchPromises.push(this.$refs.BremseAnzeige.fetchBrakeInputValue());
          }

          if (this.$refs.WasserTemperaturAnzeige) {
            fetchPromises.push(this.$refs.WasserTemperaturAnzeige.fetchWaterTemperature());
          }

          if (this.$refs.OelTemperaturAnzeige) {
            fetchPromises.push(this.$refs.OelTemperaturAnzeige.fetchOilTemperatureValue());
          }

          if (this.$refs.TankAnzeige) {
            fetchPromises.push(this.$refs.TankAnzeige.fetchFuelVolume());
          }

          if (this.$refs.GeschwindigkeitAnzeige) {
            fetchPromises.push(this.$refs.GeschwindigkeitAnzeige.fetchAirflowspeedValue());
          }

          await Promise.all(fetchPromises);

         
        } catch (error) {
          console.error("Fehler beim Laden der Daten:", error);

          
        }
      },
    },
    mounted() {
      this.fetchDataForComponents();
    },
  });
</script>







<style scoped>



  @media (max-width: 1920px) {


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






.gang {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
}

.gangtitel {
  position: absolute;
  top: 61vh; /* Oben: 55% der Fensterhöhe */
  left: 81vw; /* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
}

.gang-value {
  position: absolute;
  top: 34.5vh; /* Oben: 55% der Fensterhöhe */
  left: 40.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  /* Weitere Stile nach Bedarf */
}

.gang-background {
  position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 10vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}




.bremse {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .bremsetitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
  left: 63.5vw; /* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .bremse-value {
    position: absolute;
  top: 69.1vh; /* Oben: 55% der Fensterhöhe */
  left: 63.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .bremse-background {
    position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 62.5vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}





.geschwindigkeit {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .geschwindigkeittitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
    left: 45.6vw;/* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .geschwindigkeit-value {
    position: absolute;
  top: 69.1vh; /* Oben: 55% der Fensterhöhe */
  left: 45.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .geschwindigkeit-background {
    position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 44.6vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}



.drehzahl {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .drehlzahltitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
    left: 11.0vw;/* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .drehzahl-value {
    position: absolute;
  top: 34.5vh; /* Oben: 55% der Fensterhöhe */
  left: 5.5vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
.drehzahl-background {
  position: absolute;
  width: 187.3px;
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}





  
.wasser-value {
  position: absolute;
  top: 69.4vh; /* Oben: 55% der Fensterhöhe */
  left: 28.4vw;
  font-size: 0.7vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .oel-value {
  position: absolute;
  top: 34.5vh; /* Oben: 55% der Fensterhöhe */
  left: 17.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .png-wasser-icon {
    position: absolute;
    top: 60.7vh; /* Oben: 55% der Fensterhöhe */
    left: 34.7vw;/* Links: 120% der Fensterbreite */
  display: inline-block;
  width: 1.8vw; /* Breite: 15% der Fensterbreite */
  height: 4vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .png-oel-icon {
    position: absolute;
    top: 60.5vh; /* Oben: 55% der Fensterhöhe */
    left: 27.8vw;/* Links: 120% der Fensterbreite */
  display: inline-block;
  width: 3vw; /* Breite: 15% der Fensterbreite */
  height: 4vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .oel-wasser {
    position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
.oelwasser-background {
  position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 27.3vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}

  
.batterie-Wert-Hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 74vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 2vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.png-batterie-icon {
  position: absolute;
  top: 49vh; /* Top-Position relativ zur Fensterhöhe */
  left: 77vw; /* Left-Position relativ zur Fensterbreite */
  width: 2vw; /* Breite relativ zur Fensterbreite */
  height: 2vh; /* Höhe relativ zur Fensterhöhe */
  object-fit: cover;
  user-select: none;
}

.batterie-balken-hintergrund-hybrid {
  position: absolute;
  top: 48.6vh; /* Top-Position relativ zur Fensterhöhe */
  left: 78.5vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 13vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

.batterie-balken-aktuell-hybrid {
  position: absolute;
  top: 48.8vh; /* Top-Position relativ zur Fensterhöhe */
  left: 78.6vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 10.8vw; /* Breite relativ zur Fensterbreite */
  height: 2.5vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

 
 

  
.tank-wert-hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 11.8vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.tank-volumen {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 14.9vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.png-tank-icon-hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 10vw; /* Left-Position relativ zur Fensterbreite */
  width: 4vw; /* Breite relativ zur Fensterbreite */
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-fit: cover;
  user-select: none;
  color: #426b1f;
}

.tank-balken-hintergrund-hybrid {
  position: absolute;
  top: 41.4vh; /* Top-Position relativ zur Fensterhöhe */
  left: 18vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 62vw; /* Breite relativ zur Fensterbreite */
  height: 4vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

.tank-balken-aktuell-hybrid {
  position: absolute;
  top: 41.8vh; /* Top-Position relativ zur Fensterhöhe */
  left: 18.5vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  transform-origin: top left;
  transform: scaleX(0);
  transition: transform 1s ease;
  width: 60.5vw; /* Breite relativ zur Fensterbreite */
  height: 3.3vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}








.motorhaube-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 82%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}

.motorhaube-closed {
  position: absolute;
  height: 10px; 
  width: 7.1vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 70%;
  font-weight: 300;
  color: #426b1f;
  text-align: center;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.spoiler-closed {
  position: absolute;
  height: 10px; 
  width: 7.1vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 70%;
  font-weight: 300;
  color: #426b1f;
  text-align: center;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}

.spoiler-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 82%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.hupe-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.hupe-aktiv {
    position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.abs-aktiv {
  position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.abs-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.bremse-aktiv {
  position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 30%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.bremse-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 30%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}




.element-background:hover {
    background-color: #2b3f00;
  }

  /* Du kannst dies für andere Container wiederholen, indem du die entsprechenden Klassen hinzufügst */
  .bremse:hover .element-background,
  .speed:hover .element-background,
  .oel-wasser:hover .element-background,
  .gang:hover .element-background,
  .drehzahl:hover .element-background {
    background-color: #2b3f00;
  }

  .home-dashboard-hybrid {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: left;
    font-size:  21px;
    color: #fff;
    font-family: 'Poppins';
  }
  }


  @media (max-width: 768px) {




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






.gang {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
}

.gangtitel {
  position: absolute;
  top: 61vh; /* Oben: 55% der Fensterhöhe */
  left: 81vw; /* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
}

.gang-value {
  position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 20vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  /* Weitere Stile nach Bedarf */
}

.gang-background {
  position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 10vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}




.bremse {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .bremsetitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
  left: 63.5vw; /* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .bremse-value {
    position: absolute;
  top: 69.1vh; /* Oben: 55% der Fensterhöhe */
  left: 63.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .bremse-background {
    position: absolute;
  top: 80vh; /* Oben: 55% der Fensterhöhe */
  left: 40vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}





.geschwindigkeit {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .geschwindigkeittitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
    left: 45.6vw;/* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .geschwindigkeit-value {
    position: absolute;
  top: 69.1vh; /* Oben: 55% der Fensterhöhe */
  left: 45.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .geschwindigkeit-background {
    position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 44.6vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}



.drehzahl {
  position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
  .drehlzahltitel {
    position: absolute;
    top: 60.9vh; /* Oben: 55% der Fensterhöhe */
    left: 11.0vw;/* Links: 120% der Fensterbreite */
  font-size: 0.8vw; /* Schriftgröße relativ zur Fensterbreite */
  font-weight: 800;
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .drehzahl-value {
    position: absolute;
  top: 34.5vh; /* Oben: 55% der Fensterhöhe */
  left: 5.5vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
.drehzahl-background {
  position: absolute;
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}





  
.wasser-value {
  position: absolute;
  top: 69.4vh; /* Oben: 55% der Fensterhöhe */
  left: 28.4vw;
  font-size: 0.7vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .oel-value {
  position: absolute;
  top: 34.5vh; /* Oben: 55% der Fensterhöhe */
  left: 17.6vw;
  font-size: 0.8vw;
  font-weight: 800; 
  display: inline-block;
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh;/* Links: 125% der Fensterbreite */
  }
  .png-wasser-icon {
    position: absolute;
    top: 60.7vh; /* Oben: 55% der Fensterhöhe */
    left: 34.7vw;/* Links: 120% der Fensterbreite */
  display: inline-block;
  width: 1.8vw; /* Breite: 15% der Fensterbreite */
  height: 4vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .png-oel-icon {
    position: absolute;
    top: 60.5vh; /* Oben: 55% der Fensterhöhe */
    left: 27.8vw;/* Links: 120% der Fensterbreite */
  display: inline-block;
  width: 3vw; /* Breite: 15% der Fensterbreite */
  height: 4vh; /* Höhe: 10% der Fensterhöhe */
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  }
  .oel-wasser {
    position: absolute;
  top: 0vh; /* Oben: 5% der Fensterhöhe */
  left: 0vw; /* Links: 70% der Fensterbreite */
  width: 15vw; /* Breite: 15% der Fensterbreite */
  height: 10vh; /* Höhe: 10% der Fensterhöhe */
  cursor: pointer;
  user-select: none;
  }
.oelwasser-background {
  position: absolute;
  top: 60vh; /* Oben: 55% der Fensterhöhe */
  left: 27.3vw; /* Links: 110% der Fensterbreite */
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: #426b1f;
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}

  
.batterie-Wert-Hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 74vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 2vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.png-batterie-icon {
  position: absolute;
  top: 49vh; /* Top-Position relativ zur Fensterhöhe */
  left: 77vw; /* Left-Position relativ zur Fensterbreite */
  width: 2vw; /* Breite relativ zur Fensterbreite */
  height: 2vh; /* Höhe relativ zur Fensterhöhe */
  object-fit: cover;
  user-select: none;
}

.batterie-balken-hintergrund-hybrid {
  position: absolute;
  top: 48.6vh; /* Top-Position relativ zur Fensterhöhe */
  left: 78.5vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 13vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

.batterie-balken-aktuell-hybrid {
  position: absolute;
  top: 48.8vh; /* Top-Position relativ zur Fensterhöhe */
  left: 78.6vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 10.8vw; /* Breite relativ zur Fensterbreite */
  height: 2.5vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

 
 

  
.tank-wert-hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 11.8vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.tank-volumen {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 14.9vw; /* Left-Position relativ zur Fensterbreite */
  background-color: rgba(255, 255, 255, 0);
  width: 10vw; /* Breite relativ zur Fensterbreite */
  height: 3vh; /* Höhe relativ zur Fensterhöhe */
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

.png-tank-icon-hybrid {
  position: absolute;
  top: 48.3vh; /* Top-Position relativ zur Fensterhöhe */
  left: 10vw; /* Left-Position relativ zur Fensterbreite */
  width: 4vw; /* Breite relativ zur Fensterbreite */
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-fit: cover;
  user-select: none;
  color: #426b1f;
}

.tank-balken-hintergrund-hybrid {
  position: absolute;
  top: 41.4vh; /* Top-Position relativ zur Fensterhöhe */
  left: 18vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  width: 62vw; /* Breite relativ zur Fensterbreite */
  height: 4vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}

.tank-balken-aktuell-hybrid {
  position: absolute;
  top: 41.8vh; /* Top-Position relativ zur Fensterhöhe */
  left: 18.5vw; /* Left-Position relativ zur Fensterbreite */
  border-radius: 5vw; /* Border-Radius relativ zur Fensterbreite */
  transform-origin: top left;
  transform: scaleX(0);
  transition: transform 1s ease;
  width: 60.5vw; /* Breite relativ zur Fensterbreite */
  height: 3.3vh; /* Höhe relativ zur Fensterhöhe */
  user-select: none;
}








.motorhaube-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 82%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}

.motorhaube-closed {
  position: absolute;
  height: 10px; 
  width: 7.1vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 70%;
  font-weight: 300;
  color: #426b1f;
  text-align: center;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.spoiler-closed {
  position: absolute;
  height: 10px; 
  width: 7.1vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 70%;
  font-weight: 300;
  color: #426b1f;
  text-align: center;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}

.spoiler-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 82%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.hupe-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.hupe-aktiv {
    position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 24%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.abs-aktiv {
  position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.abs-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 27%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}
.bremse-aktiv {
  position: absolute;
    height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 30%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
    color: #426b1f;
    text-align: center;
    display: inline-block;
    user-select: none;
}
.bremse-text {
  position: absolute;
  height: 1px; 
  width: 15vw; /* Breite relativ zur Fensterbreite */
  top: 30%; 
  left: 10%; 
  font-weight: 300;
  font-size: 1.4vw; /* Schriftgröße relativ zur Fensterbreite */
  display: inline-block;
  user-select: none;
}




.element-background:hover {
    background-color: #2b3f00;
  }

  /* Du kannst dies für andere Container wiederholen, indem du die entsprechenden Klassen hinzufügst */
  .bremse:hover .element-background,
  .speed:hover .element-background,
  .oel-wasser:hover .element-background,
  .gang:hover .element-background,
  .drehzahl:hover .element-background {
    background-color: #2b3f00;
  }

  .home-dashboard-hybrid {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: left;
    font-size:  21px;
    color: #fff;
    font-family: 'Poppins';
  }
  }
 
</style>