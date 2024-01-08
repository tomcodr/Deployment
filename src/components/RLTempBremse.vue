<template>
  <b :class="{ 'brake-temperature-value': true, 'yellow-text': brakeTemperatureValue >= 300 && brakeTemperatureValue < 400, 'red-text': brakeTemperatureValue >= 400 }">{{ brakeTemperatureValue !== null ? `${brakeTemperatureValue}°` : 'N/A' }}</b>
</template>

<style>
.yellow-text {
  color: yellow;
}

.red-text {
  color: red;
}
</style>

<script>
export default {
  data() {
    return {
      brakeTemperatureValue: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchBrakeTemperatureValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=brakeSurfaceTemperaturerl");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const brakeTemperature = Math.round(data.messwerte[0]?.brakeSurfaceTemperaturerl);

          if (brakeTemperature !== undefined && brakeTemperature !== null) {
            this.brakeTemperatureValue = brakeTemperature.toString();
          } else {
            console.error("Ungültiger oder fehlender Wert für Bremsflächentemperatur:", brakeTemperature);
            this.brakeTemperatureValue = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für Bremsflächentemperatur Daten:", data.messwerte);
          this.brakeTemperatureValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Bremsflächentemperatur Daten:", error);
        this.brakeTemperatureValue = null;
      }
    },
  },
  mounted() {
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(() => {
      this.fetchBrakeTemperatureValue();
    }, 2000);

    // Führe fetchBrakeTemperatureValue einmal bei der Initialisierung aus
    this.fetchBrakeTemperatureValue();
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
