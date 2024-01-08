<template>
  <div>{{ altitude !== null ? Math.round(altitude) + 'm' : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    return {
      altitude: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
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
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(this.fetchAltitude, 2000);
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
