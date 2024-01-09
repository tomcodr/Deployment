<template>
    <div>
      <label class="date-label" for="startDate">Start</label>
      <input type="date" v-model="startDate" @change="updateChart" id="startDate">
  
      <label class="date-label" for="endDate">Ende</label>
      <input type="date" v-model="endDate" @change="updateChart" id="endDate">
  
      <!-- Ladeanzeige -->
      <div class="loading" v-if="loading">Lädt...</div>
  
      <canvas ref="myChart" width="550" height="300"></canvas>
    </div>
  </template>
  
  <script>
  import 'chartjs-plugin-zoom';
  import { Chart, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js/auto';
  import zoomPlugin from 'chartjs-plugin-zoom';
  
  Chart.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, zoomPlugin);
  
  export default {
    data() {
      return {
        startDate: '',
        endDate: '',
        waterTemperatureData: [],
        chartInstance: null,
        loading: false,
      };
    },
    mounted() {
      this.fetchWaterTemperatureData();
    },
    methods: {
      async fetchWaterTemperatureData() {
        try {
          this.loading = true;
          const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=water_temperature');
          const data = await response.json();
  
          this.waterTemperatureData = data.messwerte;
  
          // Initialize the chart with the full dataset
          this.renderChart(this.waterTemperatureData);
        } catch (error) {
          console.error('Error fetching water temperature data:', error);
        } finally {
          this.loading = false;
        }
      },
      updateChart() {
        // Filter the data based on the selected date range
        const filteredData = this.waterTemperatureData.filter(entry => {
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
                label: 'Water Temperature',
                data: data.map(entry => entry.water_temperature),
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
  .date-label {
    font-size: 25px;
  }
  
  .loading {
    font-size: 25px;
    top: 200px;
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
  