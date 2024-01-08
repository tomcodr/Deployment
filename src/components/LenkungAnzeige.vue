<template>
    <div class="steering-value">{{ steeringValue !== null ? steeringValue + "°" : $t('N/A') }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steeringValue: null,
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=steering");
  
          // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
          if (!response.ok) {
            console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
            return;
          }
  
          const data = await response.json();
  
          const steeringValue = Math.round(parseFloat(data.messwerte[0]?.steering));
  
          if (!isNaN(steeringValue)) {
            this.steeringValue = steeringValue;
          } else {
            console.error("Ungültiger Wert für Lenkwinkel:", data.messwerte[0]?.steering);
            // Setze steeringValue auf null, um "N/A" anzuzeigen
            this.steeringValue = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Lenkwinkel-Daten:", error);
          // Setze steeringValue auf null, um "N/A" anzuzeigen
          this.steeringValue = null;
        }
      },
    },
    mounted() {
      // Setze die Aktualisierung alle 5 Sekunden (5000 Millisekunden)
      setInterval(() => {
        this.fetchData();
      }, 5000);
  
      // Führe fetchData einmal bei der Initialisierung aus
      this.fetchData();
    },
  };
  </script>
  