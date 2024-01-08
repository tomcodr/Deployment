<template>
  <b class="oel-value">{{ oilTemperatureValue !== null ? oilTemperatureValue : 'N/A' }}</b>
</template>

<script>
export default {
  data() {
    return {
      oilTemperatureValue: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchOilTemperatureValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=oil_temperature");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const temperatureValue = data.messwerte[0]?.oil_temperature;

          if (!isNaN(temperatureValue)) {
            const oilTemperatureValue = Math.round(temperatureValue) + "°";
            this.oilTemperatureValue = oilTemperatureValue.toString();
          } else {
            console.error("Ungültiger Wert für oil_temperature:", temperatureValue);
            // Setze oilTemperatureValue auf null, um "N/A" anzuzeigen
            this.oilTemperatureValue = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für Oil Temperature:", data.messwerte);
          // Setze oilTemperatureValue auf null, um "N/A" anzuzeigen
          this.oilTemperatureValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Oil Temperature-Daten:", error);
        // Setze oilTemperatureValue auf null, um "N/A" anzuzeigen
        this.oilTemperatureValue = null;
      }
    },
  },
  mounted() {
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(() => {
      this.fetchOilTemperatureValue();
    }, 2000);

    // Führe fetchOilTemperatureValue einmal bei der Initialisierung aus
    this.fetchOilTemperatureValue();
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
