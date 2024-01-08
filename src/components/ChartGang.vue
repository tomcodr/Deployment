<template>
  <div>
    <label for="startDate">Start</label>
    <input type="date" v-model="startDate" @change="updateChart" id="startDate">

    <label for="endDate">Ende</label>
    <input type="date" v-model="endDate" @change="updateChart" id="endDate">

    <!-- Ladeanzeige -->
    <div class="" v-if="loading">Lädt...</div>

    <canvas ref="myChart" width="850" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, zoomPlugin);

export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      gearIndexData: [],
      chartInstance: null,
      loading: false, // Flag für die Ladeanzeige
    };
  },
  mounted() {
    this.fetchGearIndexData();

    // Setze ein Intervall, um die Funktion alle 2 Sekunden aufzurufen
    setInterval(() => {
      this.fetchGearIndexData();
    }, 2000);
  },
  methods: {
    async fetchGearIndexData() {
      try {
        this.loading = true; // Ladeanzeige aktivieren
        const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=gear_index');
        const data = await response.json();

        this.gearIndexData = data.messwerte;

        // Initialize the chart with the full dataset
        this.renderChart(this.gearIndexData);
      } catch (error) {
        console.error('Error fetching gear index data:', error);
      } finally {
        this.loading = false; // Ladeanzeige deaktivieren
      }
    },
    updateChart() {
      // Filter the data based on the selected date range
      const filteredData = this.gearIndexData.filter(entry => {
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
              label: 'Gear Index',
              data: data.map(entry => entry.gear_index),
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
              max: 10, // Set the maximum value for the Y-axis (adjust as needed)
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
                  enabled: true,
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
  height: 30px;
  margin-right: 100px;
  background-color: #4BC0C0;
  color: #FFFFFF;
  border: 1px solid #4BC0C0;
  border-radius: 5px;
  user-select: none;
}
</style>
