<template>
  <div class="tank-wert-hybrid">{{ fuelVolumePercentage !== null ? fuelVolumePercentage : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    return {
      fuelVolume: 0,
      fuelVolumePercentage: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchFuelVolume() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=fuel_volume");
        const data = await response.json();

        const fuelVolume = parseFloat(data.messwerte[0]?.fuel_volume);

        if (!isNaN(fuelVolume)) {
          const wholeNumberPart = parseInt(fuelVolume);
          this.fuelVolume = fuelVolume;
          this.fuelVolumePercentage = `${wholeNumberPart}%`;

          const tankBalkenAktuell = document.querySelector(".tank-balken-aktuell-hybrid");
          if (tankBalkenAktuell) {
            tankBalkenAktuell.style.transform = `scaleX(${fuelVolume / 100})`;
          }
        } else {
          console.error("Ungültiger Wert für Kraftstoffvolumen:", data.messwerte[0]?.fuel_volume);
          // Setze fuelVolumePercentage auf null, um "N/A" anzuzeigen
          this.fuelVolumePercentage = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Kraftstoffvolumen-Daten:", error);
        // Setze fuelVolumePercentage auf null, um "N/A" anzuzeigen
        this.fuelVolumePercentage = null;
      }
    },
  },
  mounted() {
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(() => {
      this.fetchFuelVolume();
    }, 2000);

    // Führe fetchFuelVolume einmal bei der Initialisierung aus
    this.fetchFuelVolume();
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
