<template>
  <b class="gang-value">{{ gearValue !== null ? gearValue : 'N/A' }}</b>
</template>

<script>
export default {
  data() {
    return {
      gearValue: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchGearValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=gear_index");
        const data = await response.json();

        if (data.messwerte && data.messwerte.length > 0) {
          const gearValue = data.messwerte[0]?.gear_index;
          if (gearValue !== undefined && gearValue !== null) {
            this.gearValue = gearValue;
          } else {
            console.error("Ungültiger oder fehlender Wert für gear_index:", gearValue);
            // Setze gearValue auf null, um "N/A" anzuzeigen
            this.gearValue = null;
          }
        } else {
          console.error("Leere oder ungültige Daten für gear_index:", data.messwerte);
          // Setze gearValue auf null, um "N/A" anzuzeigen
          this.gearValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Gangdaten:", error);
        // Setze gearValue auf null, um "N/A" anzuzeigen
        this.gearValue = null;
      }
    },
  },
  mounted() {
    this.fetchGearValue();
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(this.fetchGearValue, 2000);
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
