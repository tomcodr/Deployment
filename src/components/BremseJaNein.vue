<template>
  <!-- Anzeige des Bremslichtstatus, zeigt den Status an oder 'N/A', wenn nicht verfügbar -->
  <div class="brake-light-status">{{ brakeLightStatus !== null ? brakeLightStatus : 'N/A' }}</div>
</template>

<script>
export default {
  data() {
    // Daten für die Komponente: brakeLightValue für den Rohwert, brakeLightStatus für den interpretierten Status
    return {
      brakeLightValue: null,
      brakeLightStatus: null,
    };
  },
  methods: {
    // Funktion zum Abrufen des Bremslichtstatus von der API
    async fetchBrakeLightStatus() {
      try {
        // API-Anfrage für den Bremslichtstatus
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=brakelight_signal_R");
  
        // Überprüfe, ob die API-Anfrage erfolgreich war (Statuscode 200)
        if (!response.ok) {
          console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
          return;
        }
  
        // Extrahiere die JSON-Daten aus der API-Antwort
        const data = await response.json();
  
        // Extrahiere den Bremslichtwert aus den Daten und konvertiere ihn in eine Gleitkommazahl
        const brakeLightValue = parseFloat(data.messwerte[0]?.brakelight_signal_R);
  
        // Überprüfe, ob der Bremslichtwert eine gültige Zahl ist
        if (!isNaN(brakeLightValue)) {
          // Aktualisiere die Daten in der Komponente basierend auf dem Bremslichtwert
          this.brakeLightValue = brakeLightValue;
          this.brakeLightStatus = brakeLightValue === 1.0 ? "AN" : "AUS";
        } else {
          // Gib eine Fehlermeldung aus, wenn der Bremslichtwert ungültig ist
          console.error("Ungültiger Wert für Bremslicht:", data.messwerte[0]?.brakelight_signal_R);
          // Setze brakeLightStatus auf null, um "N/A" anzuzeigen
          this.brakeLightStatus = null;
        }
      } catch (error) {
        // Gib eine Fehlermeldung aus, wenn beim Laden der Bremslichtdaten ein Fehler auftritt
        console.error("Fehler beim Laden der Bremslicht-Daten:", error);
        // Setze brakeLightStatus auf null, um "N/A" anzuzeigen
        this.brakeLightStatus = null;
      }
    },
  },
  mounted() {
    // Beim Laden der Komponente, rufe die Funktion zum Abrufen des Bremslichtstatus auf
    this.fetchBrakeLightStatus();

    // Setze ein Intervall, um die Funktion alle 2 Sekunden aufzurufen
    setInterval(() => {
      this.fetchBrakeLightStatus();
    }, 2000);
  },
};
</script>
