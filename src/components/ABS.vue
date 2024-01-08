<template>
  <!-- Anzeige des ABS-Status, zeigt den Status an oder 'N/A', wenn nicht verfügbar -->
  <div class="abs-status">{{ absStatus !== null ? absStatus : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    // Daten für die Komponente: absValue für den Rohwert, absStatus für den interpretierten Status
    return {
      absValue: null,
      absStatus: null,
    };
  },
  methods: {
    // Funktion zum Abrufen des ABS-Status von der API
    async fetchAbsStatus() {
      try {
        // API-Anfrage für den ABS-Status
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=isABSBrakeActive");

        // Überprüfe, ob die API-Anfrage erfolgreich war (Statuscode 200)
        if (!response.ok) {
          console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
          return;
        }

        // Extrahiere die JSON-Daten aus der API-Antwort
        const data = await response.json();

        // Extrahiere den ABS-Wert aus den Daten und konvertiere ihn in eine Gleitkommazahl
        const absValue = parseFloat(data.messwerte[0]?.isABSBrakeActive);

        // Überprüfe, ob der ABS-Wert eine gültige Zahl ist
        if (!isNaN(absValue)) {
          // Aktualisiere die Daten in der Komponente basierend auf dem ABS-Wert
          this.absValue = absValue;
          this.absStatus = absValue === 1.0 ? "ACTIV" : "AUS";
        } else {
          // Gib eine Fehlermeldung aus, wenn der ABS-Wert ungültig ist
          console.error("Ungültiger Wert für ABS:", data.messwerte[0]?.isABSBrakeActive);
          // Setze absStatus auf null, um "N/A" anzuzeigen
          this.absStatus = null;
        }
      } catch (error) {
        // Gib eine Fehlermeldung aus, wenn beim Laden der ABS-Daten ein Fehler auftritt
        console.error("Fehler beim Laden der ABS-Daten:", error);
        // Setze absStatus auf null, um "N/A" anzuzeigen
        this.absStatus = null;
      }
    },
  },
  mounted() {
    // Beim Laden der Komponente, rufe die Funktion zum Abrufen des ABS-Status auf
    this.fetchAbsStatus();

    // Setze ein Intervall, um die Funktion alle 2 Sekunden aufzurufen
    setInterval(() => {
      this.fetchAbsStatus();
    }, 2000);
  },
};
</script>
