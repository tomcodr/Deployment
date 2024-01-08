<template>
  <b class="airflowspeed-value">{{ airflowspeedValue !== null ? airflowspeedValue : 'N/A' }}</b>
</template>

<script>
export default {
  data() {
    return {
      airflowspeedValue: null,
      updateInterval: null, // Variable für das Aktualisierungsintervall
    };
  },
  methods: {
    async fetchAirflowspeedValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=airflowspeed");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const airflowspeed = data.messwerte[0]?.airflowspeed;

          if (airflowspeed !== undefined && airflowspeed !== null) {
            const airflowspeedValue = Math.round(airflowspeed);
            if (!isNaN(airflowspeedValue)) {
              this.airflowspeedValue = airflowspeedValue;
            } else {
              console.error("Ungültiger oder fehlender numerischer Wert für airflowspeed:", airflowspeed);
              // Setze airflowspeedValue auf null, um "N/A" anzuzeigen
              this.airflowspeedValue = null;
            }
          } else {
            console.error("Ungültiger oder fehlender Wert für airflowspeed:", airflowspeed);
            // Setze airflowspeedValue auf null, um "N/A" anzuzeigen
            this.airflowspeedValue = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für Luftstromgeschwindigkeitsdaten:", data.messwerte);
          // Setze airflowspeedValue auf null, um "N/A" anzuzeigen
          this.airflowspeedValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Luftstromgeschwindigkeitsdaten:", error);
        // Setze airflowspeedValue auf null, um "N/A" anzuzeigen
        this.airflowspeedValue = null;
      }
    },
  },
  mounted() {
    this.fetchAirflowspeedValue();
    // Starte das Aktualisierungsintervall
    this.updateInterval = setInterval(this.fetchAirflowspeedValue, 2000);
  },
  beforeDestroy() {
    // Beende das Aktualisierungsintervall, um Speicherlecks zu vermeiden
    clearInterval(this.updateInterval);
  },
};
</script>
