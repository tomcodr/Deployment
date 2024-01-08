<template>
    <div class="tank-balken">
      <!-- Verwende ein Bild für den Tankbalken -->
      <img class="tank-aktuell-leiste" :style="{ width: fuelVolumePercentage + '%' }" src="/tankbalken-aktuell.svg" alt="" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fuelVolumePercentage: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  

  