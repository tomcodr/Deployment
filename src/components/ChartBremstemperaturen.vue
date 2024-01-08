<template>
  <div>
    <!-- Ladeanzeige -->
    <div class="loading" v-if="loading">Lädt...</div>

    <canvas ref="myChart" width="800" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, zoomPlugin);

export default {
  data() {
    return {
      brakeTemperatureData: [],
      loading: false, // Flag für die Ladeanzeige
    };
  },
  mounted() {
    this.fetchBrakeTemperatureData();

    // Setze ein Intervall, um die Funktion alle 2 Sekunden aufzurufen
    setInterval(() => {
      this.fetchBrakeTemperatureData();
    }, 2000);
  },
  methods: {
    async fetchBrakeTemperatureData() {
      try {
        this.loading = true; // Ladeanzeige aktivieren
        const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte');
        const data = await response.json();

        this.brakeTemperatureData = data.messwerte
          .filter(entry => entry.hasOwnProperty('brakeSurfaceTemperaturefl') && entry.hasOwnProperty('brakeSurfaceTemperaturefr') && entry.hasOwnProperty('brakeSurfaceTemperaturerl') && entry.hasOwnProperty('brakesurfacetemperaturerr'))
          .map(entry => {
            return {
              timestamp: entry.timestamp,
              brakeSurfaceTemperaturefr: entry.brakeSurfaceTemperaturefr,
              brakeSurfaceTemperaturefl: entry.brakeSurfaceTemperaturefl,
              brakeSurfaceTemperaturerl: entry.brakeSurfaceTemperaturerl,
              brakeSurfaceTemperaturerr: entry.brakeSurfaceTemperaturerr,
            };
          });

        this.renderChart(this.brakeTemperatureData);
      } catch (error) {
        console.error('Error fetching brake temperature data:', error);
      } finally {
        this.loading = false; // Ladeanzeige deaktivieren
      }
    },
    renderChart(data) {
      const ctx = this.$refs.myChart.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(entry => entry.timestamp),
          datasets: [
            {
              label: 'VL',
              data: data.map(entry => entry.brakeSurfaceTemperaturefl),
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'VR',
              data: data.map(entry => entry.brakeSurfaceTemperaturefr),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'HL',
              data: data.map(entry => entry.brakeSurfaceTemperaturerl),
              borderColor: 'rgba(255, 205, 86, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'HR',
              data: data.map(entry => entry.brakeSurfaceTemperaturerr),
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: data.map(entry => entry.timestamp),
            },
            y: {
              beginAtZero: false,
              suggestedMin: 0,
              suggestedMax: 120,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.loading {
    position: absolute;
    top: 150px;
    left: 350px;
    font-weight: 100;
  }
  input[type="date"] {
  height: 30px; /* Passen Sie die gewünschte Höhe an */
  margin-right: 100px;
  background-color: #4BC0C0; /* Ändern Sie die Hintergrundfarbe nach Bedarf */
  color: #FFFFFF; /* Ändern Sie die Textfarbe nach Bedarf */
  border: 1px solid #4BC0C0; /* Ändern Sie die Randfarbe nach Bedarf */
  border-radius: 5px; /* Ändern Sie die Randradius nach Bedarf */
  user-select: none; /* Deaktivieren Sie die Textauswahl */
}
</style>
