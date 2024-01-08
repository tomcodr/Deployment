<template>
    <div>{{ altitude !== null ? Math.round(altitude) + 'm' : $t('N/A') }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        altitude: null,
      };
    },
    methods: {
      async fetchAltitude() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=altitude");
          const data = await response.json();
  
          const altitudeValue = parseFloat(data.messwerte[0]?.altitude);
  
          if (!isNaN(altitudeValue)) {
            this.altitude = altitudeValue;
          } else {
            console.error("Ungültiger Wert für Höhe:", data.messwerte[0]?.altitude);
            // Setze altitude auf null, um "N/A" anzuzeigen
            this.altitude = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Höhendaten:", error);
          // Setze altitude auf null, um "N/A" anzuzeigen
          this.altitude = null;
        }
      },
    },
    mounted() {
      this.fetchAltitude();
    },
  };
  </script>
  