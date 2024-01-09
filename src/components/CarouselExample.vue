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
      cars: [
        { image: '/M4 Front.png', title: 'BMW M4' },
        { image: '/S Class Front.png', title: 'Mercedes S400' },
        { image: '/Porsche Front.png', title: 'Porsche 911' },
        { image: '/RS5 Front.png', title: 'Audi RS5' },
        { image: '/Mustang Front.png', title: 'Ford Mustang' },
        { image: '/GTI Front.png', title: 'Volkswagen Golf 7 GTI' },
      ],
      selectedStar: null,
    };
  },
  methods: {
    onSwiperInit(swiper) {
      this.swiper = swiper;
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
  font-size: 48px; /* Ändern Sie die Größe des Sterns hier */
  margin-top: 5px; /* Fügen Sie einen Abstand oben hinzu */
  cursor: pointer;
  color: #fff;
}

.filled {
  color: gold;
}
</style>