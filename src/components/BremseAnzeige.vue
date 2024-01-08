<template>
  <!-- Container für Bremsinformationen -->
  <div class="brake-container">
    <!-- Anzeige des Bremswerts, zeigt den Wert an oder 'N/A', wenn nicht verfügbar -->
    <b class="brake-value">{{ brakeInputValue !== null ? brakeInputValue : 'N/A' }}</b>
  </div>
</template>

<script>
export default {
  data() {
    // Daten für die Komponente: brakeInputValue für den Bremseneingangswert
    return {
      brakeInputValue: null,
    };
  },
  methods: {
    // Funktion zum Abrufen der Bremsendaten von der API
    async fetchData() {
      try {
        // API-Anfrage für die Bremsendaten
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte");
        const data = await response.json();

        // Überprüfe, ob die erhaltenen Daten gültige Bremsendaten enthalten
        if (data.messwerte && data.messwerte.length > 0) {
          // Extrahiere den Bremseneingangswert aus den Daten
          const brakeInput = data.messwerte.find(item => item.hasOwnProperty('brake_input'))?.brake_input;

          // Überprüfe, ob der Bremseneingangswert gültig ist
          if (brakeInput !== undefined && brakeInput !== null) {
            // Runde auf 3 Nachkommastellen und konvertiere zu String
            this.brakeInputValue = brakeInput.toFixed(3).toString();
          } else {
            // Gib eine Fehlermeldung aus, wenn der Bremseneingangswert ungültig ist
            console.error("Ungültiger oder fehlender Wert für brake_input:", brakeInput);
            // Setze brakeInputValue auf null, um "N/A" anzuzeigen
            this.brakeInputValue = null;
          }
        } else {
          // Gib eine Fehlermeldung aus, wenn die Bremsendaten leer oder ungültig sind
          console.error("Leere oder ungültige Daten für brake_input:", data.messwerte);
          // Setze brakeInputValue auf null, um "N/A" anzuzeigen
          this.brakeInputValue = null;
        }
      } catch (error) {
        // Gib eine Fehlermeldung aus, wenn beim Laden der Bremsendaten ein Fehler auftritt
        console.error("Fehler beim Laden der Messwerte:", error);
        // Setze brakeInputValue auf null, um "N/A" anzuzeigen
        this.brakeInputValue = null;
      }
    },
  },
  mounted() {
    // Beim Laden der Komponente, rufe die Funktion zum Abrufen der Bremsendaten auf
    this.fetchData();

    // Setze ein Intervall, um die Funktion alle 2 Sekunden aufzurufen
    setInterval(() => {
      this.fetchData();
    }, 2000);
  },
};
</script>
