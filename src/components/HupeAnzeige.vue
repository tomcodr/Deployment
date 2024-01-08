<template>
  <div class="horn-status">{{ hornStatus !== null ? hornStatus : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    return {
      hornValue: null,
      hornStatus: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchHornStatus() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=horn");
        const data = await response.json();

        const hornValue = parseFloat(data.messwerte[0]?.horn);

        if (!isNaN(hornValue)) {
          this.hornValue = hornValue;
          this.hornStatus = hornValue === 0.0 ? "AUS" : "ACTIV";
        } else {
          console.error("Ungültiger Wert für Horn:", data.messwerte[0]?.horn);
          // Setze hornStatus auf null, um "N/A" anzuzeigen
          this.hornStatus = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Horn-Daten:", error);
        // Setze hornStatus auf null, um "N/A" anzuzeigen
        this.hornStatus = null;
      }
    },
  },
  mounted() {
    this.fetchHornStatus();
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(this.fetchHornStatus, 2000);
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
