<template>
  <b class="drehzahl-value">{{ rpmValue !== null ? rpmValue : 'N/A' }}</b>
</template>

<script>
export default {
  data() {
    return {
      rpmValue: null,
    };
  },
  methods: {
    async fetchrpmValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=rpm");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const rpm = data.messwerte[0]?.rpm;

          if (rpm !== undefined && rpm !== null) {
            const roundedRpm = Math.round(rpm);
            this.rpmValue = roundedRpm.toString();
          } else {
            console.error("Ungültiger oder fehlender Wert für rpm:", rpm);
            // Setze rpmValue auf null, um "N/A" anzuzeigen
            this.rpmValue = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für rpm Daten:", data.messwerte);
          // Setze rpmValue auf null, um "N/A" anzuzeigen
          this.rpmValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der rpm Daten:", error);
        // Setze rpmValue auf null, um "N/A" anzuzeigen
        this.rpmValue = null;
      }
    },
  },
  mounted() {
    // Setze die Aktualisierung alle 5 Sekunden (5000 Millisekunden)
    setInterval(() => {
      this.fetchrpmValue();
    }, 2000);

    // Führe fetchData einmal bei der Initialisierung aus
    this.fetchrpmValue();
  },
};
</script>
