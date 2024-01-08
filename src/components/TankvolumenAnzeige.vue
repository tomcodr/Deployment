<template>
    <div class="tank-volumen">{{ fuelCapacity !== null ? `/ ${fuelCapacity} L` : 'N/A' }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fuelCapacity: null,
      };
    },
    methods: {
      async fetchFuelCapacity() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=fuel_capacity");
          const data = await response.json();
  
          const fuelCapacity = parseFloat(data.messwerte[0]?.fuel_capacity);
  
          if (!isNaN(fuelCapacity)) {
            this.fuelCapacity = fuelCapacity;
          } else {
            console.error("Ungültiger Wert für Kraftstoffkapazität:", data.messwerte[0]?.fuel_capacity);
            // Set fuelCapacity to null to display "N/A"
            this.fuelCapacity = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Kraftstoffkapazität-Daten:", error);
          // Set fuelCapacity to null to display "N/A"
          this.fuelCapacity = null;
        }
      },
    },
    mounted() {
      this.fetchFuelCapacity();
    },
  };
  </script>
  