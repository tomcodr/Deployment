<template>
  <div>
    <div class="date-inputs">
      <label for="startDate" class="date-label">{{ $t('Start') }}</label>
      <input type="date" v-model="startDate" @change="updateChart" id="startDate">

      <label for="endDate" class="date-label">{{ $t('Ende') }}</label>
      <input type="date" v-model="endDate" @change="updateChart" id="endDate">
    </div>

    <!-- Ladeanzeige -->
    <div class="loading" v-if="loading">Lädt...</div>

    <canvas ref="myChart" width="800" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js/auto';
import 'chartjs-plugin-zoom';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, zoomPlugin)

export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      tripData: [],
      chartInstance: null,
      loading: false, // Flag für die Ladeanzeige
    };
  },
  mounted() {
    this.fetchTripData();
  },
  methods: {
    async fetchTripData() {
      try {
        this.loading = true; // Ladeanzeige aktivieren
        const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=trip');
        const data = await response.json();
        this.tripData = data.messwerte;

        // Initialize the chart with the full dataset
        this.renderChart(this.tripData);
      } catch (error) {
        console.error('Error fetching trip data:', error);
      } finally {
        this.loading = false; // Ladeanzeige deaktivieren
      }
    },
    updateChart() {
      // Filter the data based on the selected date range
      const filteredData = this.tripData.filter(entry => {
        const timestamp = new Date(entry.timestamp);
        return timestamp >= new Date(this.startDate) && timestamp <= new Date(this.endDate);
      });

      // Destroy the previous chart instance
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      // Render the chart with the filtered data
      this.renderChart(filteredData);
    },
    renderChart(data) {
      const ctx = this.$refs.myChart.getContext('2d');
      this.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(entry => this.getDayOfWeek(entry.timestamp)),
          datasets: [
            {
              label: 'Trips',
              data: data.map(entry => entry.trip),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: data.map(entry => this.getDayOfWeek(entry.timestamp)),
            },
            y: {
              beginAtZero: true,
              suggestedMax: 50000, // Setzen Sie den maximalen Wert für die y-Achse
            },
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                threshold: 10,
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
                speed: 0.1,
              },
            },
          },
        },
      });
    },
    getDayOfWeek(timestamp) {
      const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
      const date = new Date(timestamp);
      return daysOfWeek[date.getUTCDay()];
    },
  },
};
</script>

<style scoped>
.date-inputs {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  user-select: none;
}

.date-label {
  font-size: 20px; /* Passen Sie die gewünschte Schriftgröße an */
  user-select: none;
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

.loading {
  position: absolute;
  top: 200px; /* Passen Sie die gewünschte Position an */
  left: 350px;
  font-size: 30px; /* Passen Sie die gewünschte Schriftgröße an */
  font-weight: 100;
}
</style>
