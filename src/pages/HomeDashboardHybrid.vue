
<template>
  <Navigation/>
  <div class="home-dashboard-hybrid">
    
    
    <div class="home-otto-elemente">
      
      <div class="gang">
    <div class="element-background" @click="onGangContainerClick"></div>
    <b class="gang-value"><GangAnzeige/></b>
    <div class="element-titel">Gang</div>
    <div @click="onGangClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
  </div>
      
      <div class="bremse">
          <div class="element-background" @click=" onBremseContainerClick"></div>
          <b class="bremse-value"><BremseAnzeige/></b>
          <div class="element-titel">Bremsdruck</div>
          <div @click="onBremseClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
      
      <div class="speed">
        <div class="element-background" @click="onSpeedContainerClick"></div>
        <b class="speed-value"><GeschwindigkeitAnzeige/></b>
        <div class="element-titel">Geschwindigkeit</div>
        <div @click="onGeschwindigkeitClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
      
      <div class="oel-wasser">
        <div class="element-background" @click="onLWasserContainerClick"></div>
        <img class="png-wasser-icon"  src="/png-wasser-icon@2x.png" />
        <img class="png-oel-icon"  src="/png-l-icon@2x.png" />
        <b class="wasser-value"><WasserTemperaturAnzeige/></b>
        <b class="oel-value"><OelTemperaturAnzeige/></b>
        <div @click="onWasserClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
      <div class="drehzahl">
        <div class="element-background" @click="onDrehzahlContainerClick"></div>
        <b class="drehzahl-value"><DrehzahlAnzeige/></b>
        <div class="element-titel">Drehzahl</div>
        <div @click="onDrehzahlClick" class="arrow"><i class='bx bxs-right-arrow-circle'></i></div>
      </div>
   
    </div>
    

  
    <div class="motorhaube-text">Motorhaube</div>
    <div class="spoiler-closed"><SpoilerAnzeige/></div>
    <div class="motorhaube-closed" >GESCHLOSSEN</div>

   
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
    :src="getLatestCarPath"
    alt=""
    />


    
    <div class="auto-titel"></div>

    </div>
  
  
</template>







<script>
  import { defineComponent } from "vue";
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
  import store from '../store/store';
  import Navigation from '../components/Navigation.vue';




  export default defineComponent({
    name: "HomeDashboardHybrid",
    data() {
      return {
       
      };
    },
    components: { GangAnzeige, DrehzahlAnzeige, TankAnzeige, GeschwindigkeitAnzeige, OelTemperaturAnzeige, BremseAnzeige, WasserTemperaturAnzeige, SpoilerAnzeige, HupeAnzeige,ABS, BremseJaNein, TankvolumenAnzeige, Navigation},
    computed: {
    getLatestCarPath() {
      const carPaths = store.getters.getCarPaths;

      // Wenn das Array carPaths nicht leer ist, gib den neuesten Wert zurück
      if (carPaths.length > 0) {
        const latestPath = carPaths[carPaths.length - 1];
        return latestPath;
      } else {
        // Wenn das Array leer ist, gib einen leeren String zurück oder einen Standardpfad
        return '/default-car-image.png'; // Passen wir entsprechend an
      }
    
    },
  },

    methods: {

      onGangClick() {
        this.$router.push("gang");
      },
      onBremseClick() {
        this.$router.push("bremsen");
      },
      onGeschwindigkeitClick() {
        this.$router.push("geschwindigkeit");
      },
      onWasserClick() {
        this.$router.push("temperaturen");
      },
      onDrehzahlClick() {
        this.$router.push("drehzahl");
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
.arrow{
  position: absolute;
  top: 82px;
  left: 150px;
}
.arrow:hover{
  color: var(--secondary-color); 
}


  .element-titel {
    position: absolute;
    top: 20.3px;
    left: 25.7px;
    font-size: 16px;
    font-weight: 800;
    display: inline-block;
    width: 136px;
    height: 15.4px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  .gang {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 880px;
  color: var(--text-color); 
  cursor: pointer;
  user-select: none;
  } 

  .gang-value {
    position: absolute;
    top: 40px;
    left: 15px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  
  
.element-background {
  width: 187.3px;
  height: 122.6px;
  border-radius: 20px;
  background-color: var(--secondary-color); 
  opacity: 0.1;
  cursor:pointer;
  user-select: none;
}


  .bremse {
    position: absolute;
    top: 0px;
    left: 660px;
    width: 187.3px;
    height: 122.6px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  

.bremse-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }

  .speed {
    position: absolute;
    top: 0px;
    left: 440px;
    width: 187.3px;
    height: 122.6px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }

  .speed-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 130px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  .png-wasser-icon {
    position: absolute;
    top: 8px;
    left: 90px;
    width: 28px;
    height: 37px;
    object-fit: cover;
    cursor: pointer;
    user-select: none;
  }
  .png-oel-icon {
    position: absolute;
    top: 7px;
    left: 10px;
    width: 52px;
    height: 37px;
    object-fit: cover;
    cursor: pointer;
    user-select: none;
  }
  .wasser-value {
    position: absolute;
    top: 81px;
    left: 90px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  .oel-value {
    position: absolute;
    top: 40px;
    left: 10px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  .oel-wasser {
    position: absolute;
    top: 0px;
    left: 220px;
    width: 187.3px;
    height: 122.6px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }

  .drehzahl {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 193px;
    height: 125px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }

  .drehzahl-value {
    position: absolute;
    top: 40px;
    left: 15px;
    display: inline-block;
    width: 150px;
    height: 37.5px;
    color: var(--text-color); 
    cursor: pointer;
    user-select: none;
  }
  .home-otto-elemente {
    position: absolute;
    top: 550px;
    left: 186px;
    width: 1067.3px;
    height: 125px;
    font-size: 20px;
    font-family: 'Manrope';
    user-select: none;
  }
  .batterie-Wert-Hybrid {
    position: absolute;
    top: 480px;
    left: 1271px;
    background-color: rgba(255, 255, 255, 0);
    width: 118px;
    height: 32px;
    color: var(--text-color); 
    user-select: none;
  }
  .png-batterie-icon {
    position: absolute;
    top: 485px;
    left: 1226px;
    width: 34px;
    height: 27px;
    object-fit: cover;
    user-select: none;
  }
  .batterie-balken-hintergrund-hybrid {
    position: absolute;
    top: 480px;
    left: 1008px;
    border-radius: 56px;
    width: 207px;
    height: 32px;
    user-select: none;
  }
  .batterie-balken-aktuell-hybrid {
    position: absolute;
    top: 482px;
    left: 1011px;
    border-radius: 56px;
    width: 168px;
    height: 28px;
    user-select: none;
  }
  
  .tank-wert-hybrid{
    position: absolute;
    top: 461px;
    left: 164px;
    background-color: rgba(255, 255, 255, 0);
    width: 118px;
    height: 32px;
    color: var(--text-color); 
    user-select: none;
  }

  .tank-volumen{
    position: absolute;
    top: 461px;
    left: 220px;
    background-color: rgba(255, 255, 255, 0);
    width: 118px;
    height: 32px;
    color: var(--text-color); 
    user-select: none;
  }


  .png-tank-icon-hybrid {
    position: absolute;
    top: 462px;
    left: 140px;
    width: 29px;
    height: 25px;
    object-fit: cover;
    user-select: none;
    color:#426b1f;
  }
  .tank-balken-hintergrund-hybrid {
    position: absolute;
    top: 411px;
    left: 120px;
    border-radius: 56px;
    width: 1193px;
    height: 46px;
    user-select: none;
  }
  .tank-balken-aktuell-hybrid{
    position: absolute;
    top: 415px;
    left: 124px;
    border-radius: 56px;
    transform-origin: top left;
    transform: scaleX(0);
    transition: transform 1s ease;
    width: 1183px;
    height: 39px;
    user-select: none;
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


.auto-titel {
  position: absolute;
  top: 15%; /* Zentrieren vertikal */
  left: 50%; /* Zentrieren horizontal */
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: var(--text-color); 
  white-space: nowrap; /* Verhindert, dass der Text umbrochen wird */
}
  .motorhaube-text {
    position: absolute;
    height: 10px; 
    width: 150px; 
    top: 244px; 
    left: 1229px; 
    font-weight: 300;
    color: var(--text-color); 
    display: inline-block;
    user-select: none;
}

.spoiler-closed {
    position: absolute;
    height: 10px; 
    width: 65px; 
    top: 270px; 
    left: 1062px; 
    font-weight: 300;
    color: var(--secondary-color); 
    text-align: center;
    display: inline-block;
    user-select: none;
}

.motorhaube-closed {
    position: absolute;
    height: 10px; 
    width: 71px; 
    top: 244px; 
    left: 1062px; 
    font-weight: 300;
    color: var(--secondary-color); 
    text-align: center;
    display: inline-block;
    user-select: none;
}

.spoiler-text {
    position: absolute;
    height: 10px; 
    width: 57px; 
    top: 270px; 
    left: 1229px; 
    font-weight: 300;
    color: var(--text-color); 
    display: inline-block;
    user-select: none;
}

.hupe-text {
    position: absolute;
    height: 10px; 
    width: 50px; 
    top: 244px; 
    left: 124px; 
    font-weight: 300;
    color: var(--text-color); 
    display: inline-block;
    user-select: none;
}

.hupe-aktiv {
    position: absolute;
    height: 10px; 
    width: 43px; 
    top: 244px; 
    left: 210px; 
    font-weight: 300;
    color: var(--secondary-color); 
    text-align: center;
    display: inline-block;
    user-select: none;
}

.abs-aktiv {
    position: absolute;
    height: 10px;
    width: 43px; 
    top: 270px; 
    left: 210px; 
    font-weight: 300;
    color: var(--secondary-color); 
    text-align: center;
    display: inline-block;
    user-select: none;
}

.abs-text {
    position: absolute;
    height: 10px; 
    width: 32px; 
    top: 270px; 
    left: 124px; 
    font-weight: 300;
    color: var(--text-color); 
    display: inline-block;
    user-select: none;
}
.bremse-aktiv {
    position: absolute;
    height: 10px;
    width: 43px; 
    top: 296px; 
    left: 210px; 
    font-weight: 300;
    color: var(--secondary-color); 
    text-align: center;
    display: inline-block;
    user-select: none;
}

.bremse-text {
    position: absolute;
    height: 10px; 
    width: 32px; 
    top: 296px; 
    left: 124px; 
    font-weight: 300;
    color: var(--text-color); 
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
  .drehzahl:hover .element-background,
  .gang:hover .element-background {
    background-color: #000;
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

 
 
</style>