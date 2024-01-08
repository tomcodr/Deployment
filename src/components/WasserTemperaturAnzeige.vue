<template>
  <div>
    <b class="water-temperature">{{ waterTemperature !== null ? waterTemperature : $t('N/A') }}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterTemperature: null,
    };
  },
  methods: {
    async fetchWaterTemperature() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=water_temperature");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const temperatureValue = data.messwerte[0]?.water_temperature;

          if (!isNaN(temperatureValue)) {
            const waterTemperature = Math.round(temperatureValue) + "°";
            this.waterTemperature = waterTemperature.toString();
          } else {
            console.error("Ungültiger Wert für water_temperature:", temperatureValue);
            // Setze waterTemperature auf null, um "N/A" anzuzeigen
            this.waterTemperature = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für Water Temperature:", data.messwerte);
          // Setze waterTemperature auf null, um "N/A" anzuzeigen
          this.waterTemperature = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Water Temperature-Daten:", error);
        // Setze waterTemperature auf null, um "N/A" anzuzeigen
        this.waterTemperature = null;
      }
    },
  },
  mounted() {
    this.fetchWaterTemperature();
  },
};
</script>
