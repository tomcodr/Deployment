<template>
  <div>{{ spoilerStatus !== null ? spoilerStatus : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    return {
      spoilerValue: null,
      spoilerStatus: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchSpoilerStatus() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=spoilerR");
        const data = await response.json();

        const spoilerValue = parseFloat(data.messwerte[0]?.spoilerR);

        if (!isNaN(spoilerValue)) {
          this.spoilerValue = spoilerValue;
          this.spoilerStatus = spoilerValue === 0.0 ? "EINGEFAHREN" : "AUSGEFAHREN";
        } else {
          console.error("Ungültiger Wert für Spoiler:", data.messwerte[0]?.spoilerR);
          // Setze spoilerStatus auf null, um "N/A" anzuzeigen
          this.spoilerStatus = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Spoiler-Daten:", error);
        // Setze spoilerStatus auf null, um "N/A" anzuzeigen
        this.spoilerStatus = null;
      }
    },
  },
  mounted() {
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(() => {
      this.fetchSpoilerStatus();
    }, 2000);

    // Führe fetchSpoilerStatus einmal bei der Initialisierung aus
    this.fetchSpoilerStatus();
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
