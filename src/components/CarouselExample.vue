<template> 
  <div style="text-align: center; margin-top: 150px;">
    <swiper :options="swiperOptions" v-on:init="onSwiperInit" ref="mySwiper">
      <swiper-slide v-for="(car, index) in cars" :key="index">
        <img :src="car.image" :alt="car.title">
        <p>{{ car.title }}</p>
        <i
          class="star-icon"
          :class="{ filled: index === selectedStar }"
          @click="toggleStar(index)"
        >&#9733;</i>
      </swiper-slide>
    </swiper>

    <img class="pfeil-rechts-icon" @click="goToNext" alt="" src="/pfeil-rechts.svg" />
    <img class="pfeil-links-icon" @click="goToPrev" src="/pfeil-links.svg" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import store from '../store/store';  // Pfade anpassen, wenn notwendig

export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {},
      swiper: null,
      cars: [],
      selectedStar: null,
    };
  },
  methods: {
    onSwiperInit(swiper) {
      this.swiper = swiper;
      this.fetchCarsFromStore();  // Daten beim Initialisieren abrufen
    },
    goToPrev() {
      if (this.swiper) {
        this.swiper.slidePrev();
      }
    },
    goToNext() {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    },
    toggleStar(index) {
      if (this.selectedStar === null) {
        this.selectedStar = index;
      } else if (this.selectedStar === index) {
        this.selectedStar = null;
      } else {
        if (confirm('Möchten Sie Ihre Auswahl ändern?')) {
          this.selectedStar = index;
        }
      }
    },
    fetchCarsFromStore() {
      try {
        const carData = store.getters.getCarPaths;  // Ändere dies entsprechend dem Namen deiner Getter-Methode

        if (carData && carData.length > 0) {
          this.cars = carData.map(path => ({ image: path, title: '' }));  // Titel kann angepasst werden
        } else {
          console.error('No car data found in the store.');
        }
      } catch (error) {
        console.error('Error fetching car data from the store:', error);
      }
    },
  },
};
</script>

<style scoped>
.pfeil-rechts-icon,
.pfeil-links-icon {
  position: absolute;
  top: 421px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 1;
}

.pfeil-rechts-icon {
  left: 1359px;
}

.pfeil-links-icon {
  left: 52px;
}

.star-icon {
  font-size: 48px;
  margin-top: 5px;
  cursor: pointer;
}

.filled {
  color: gold;
}
</style>