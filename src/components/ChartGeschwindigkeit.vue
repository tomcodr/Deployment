<template>
  <div>
    <label for="startDate">Start</label>
    <input type="date" v-model="startDate" @change="updateChart" id="startDate">

    <label for="endDate">Ende</label>
    <input type="date" v-model="endDate" @change="updateChart" id="endDate">
    
    <!-- Ladeanzeige -->
    <div class = "loading" v-if="loading">Lädt...</div>

    <canvas ref="myChart" width="850" height="400"></canvas>
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
      airflowSpeedData: [],
      chartInstance: null,
      loading: false, // Flag für die Ladeanzeige
    };
  },
  mounted() {
    this.fetchAirflowSpeedData();
  },
  methods: {
    async fetchAirflowSpeedData() {
      try {
        this.loading = true; // Ladeanzeige aktivieren

        const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=airflowspeed');
        const data = await response.json();

        this.airflowSpeedData = data.messwerte;

        // Initialize the chart with the full dataset
        this.renderChart(this.airflowSpeedData);
      } catch (error) {
        console.error('Error fetching airflow speed data:', error);
      } finally {
        this.loading = false; // Ladeanzeige deaktivieren
      }
    },
    updateChart() {
      // Filter the data based on the selected date range
      const filteredData = this.airflowSpeedData.filter(entry => {
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
        type: 'line',
        data: {
          labels: data.map(entry => entry.timestamp),
          datasets: [
            {
              label: 'Geschwindigkeit',
              data: data.map(entry => entry.airflowspeed),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 270, // Set the maximum value for the Y-axis
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