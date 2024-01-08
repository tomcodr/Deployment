<template>
  <div>{{ spoilerStatus !== null ? spoilerStatus : $t('N/A') }}</div>
</template>

<script>
export default {
  data() {
    return {
      spoilerValue: null,
      spoilerStatus: null,
    };
  },
  methods: {
    async fetchSpoilerStatus() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=spoilerR");
        const data = await response.json();

        const spoilerValue = parseFloat(data.messwerte[0]?.spoilerR);

        if (!isNaN(spoilerValue)) {
          this.spoilerValue = spoilerValue;
          this.spoilerStatus = spoilerValue === 0.0 ? "EINGEFAHREN" : "AUSGEFAHREN";
        } else {
          console.error("Invalid value for spoiler:", data.messwerte[0]?.spoilerR);
          // Set spoilerStatus to null to display "N/A"
          this.spoilerStatus = null;
        }
      } catch (error) {
        console.error("Error loading spoiler data:", error);
        // Set spoilerStatus to null to display "N/A"
        this.spoilerStatus = null;
      }
    },
  },
  mounted() {
    this.fetchSpoilerStatus();
  },
};
</script>
