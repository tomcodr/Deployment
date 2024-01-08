<template>
    <div>
      <div id="map" style="height: 400px; width: 100%;"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        coordinates: null,
        map: null
      };
    },
    mounted() {
      // Fetch-Koordinaten von der API
      this.fetchCoordinatesFromAPI()
        .then(coordinates => {
          this.coordinates = coordinates;
          this.initMap();
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Koordinaten:', error);
        });
    },
    methods: {
      fetchCoordinatesFromAPI() {
        // Hier simulieren wir den API-Aufruf mit den bereitgestellten Daten
        return Promise.resolve({
          lon: 8.8182387975216,
          lat: 53.073424929396
        });
      },
      initMap() {
        if (!this.coordinates) return;
  
        // Kartenoptionen
        const mapOptions = {
          center: { lat: this.coordinates.lat, lng: this.coordinates.lon },
          zoom: 15
        };
  
        // Karte erstellen
        this.map = new window.google.maps.Map(this.$el.querySelector('#map'), mapOptions);
  
        // Marker hinzufügen
        const marker = new window.google.maps.Marker({
          position: { lat: this.coordinates.lat, lng: this.coordinates.lon },
          map: this.map,
          title: 'Fahrzeug Standort'
        });
      }
    }
  };
  </script>
  
  <style scoped>
  #map {
    height: 400px;
    width: 100%;
  }
  </style>
  