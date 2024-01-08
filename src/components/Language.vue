<template>
  
  <div class="language">
    <div class="background-green" />
    <div class="text-espanol">
      <p class="espanol" @click.prevent = "setLocale('es')">Español</p>
    </div>
    <div class="text-english" @click.prevent = "setLocale('en')">English</div>
    <div class="text-deutsch" @click.prevent = "setLocale('de')">Deutsch</div>
    <img class="png-es-flagge-icon" alt="" src="/png-es-flagge@2x.png" 
    @click.prevent = "setLocale('es')"/>
    <img class="png-en-flagge-icon" alt="" src="/png-en-flagge@2x.png" 
    @click.prevent = "setLocale('en')"/>
    <img class="png-de-flagge-icon2" alt="" src="/png-de-flagge1@2x.png" 
    @click.prevent = "setLocale('de')"/>
    <img
      class="x-schliefunktion-sprachen-icon"
      alt=""
      src="/x-schliefunktion-sprachen.svg"
      @click="schließeLanguage"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Language",
  methods: {
    schließeLanguage() {
      this.$emit("close");
    },
    setLocale(locale) {
      this.$i18n.locale = locale;

      // Überprüfe, ob die aktuelle Route Parameter hat
      const params = this.$route.params;

      switch (locale) {
        case "en":
          this.$router.push({ name: this.$route.name, params: { ...params, lang: "en" } });
          break;
        case "de":
          this.$router.push({ name: this.$route.name, params: { ...params, lang: "de" } });
          break;
        case "es":
          this.$router.push({ name: this.$route.name, params: { ...params, lang: "es" } });
          break;
      }
    },
  },
});
</script>
<style scoped>
  .background-green {
    position: absolute;
    top: 0px;
    left: 18px;
    border-radius: 26px;
    background-color: var(--color-darkolivegreen-200);
    backdrop-filter: blur(370px);
    width: 313px;
    height: 173px;
  }
  .espanol {
    margin: 0;
  }
  .text-espanol {
    position: absolute;
    height: 6.18%;
    width: 17.54%;
    top: 49.16%;
    left: 36.45%;
    display: inline-block;
    cursor: pointer;
  }
  .text-english {
    position: absolute;
    height: 6.95%;
    width: 15.67%;
    top: 30.24%;
    left: 36.39%;
    display: inline-block;
    cursor: pointer;
  }
  .text-deutsch {
    position: absolute;
    height: 6.95%;
    width: 15.67%;
    top: 12.45%;
    left: 36.39%;
    display: inline-block;
    cursor: pointer;
  }
  .png-es-flagge-icon {
    position: absolute;
    top: 128px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
    cursor: pointer;
  }
  .png-en-flagge-icon {
    position: absolute;
    top: 82px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
    cursor: pointer;
  }
  .png-de-flagge-icon2 {
    position: absolute;
    top: 37px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
    cursor: pointer;
  }
  .x-schliefunktion-sprachen-icon {
    position: absolute;
    top: 36px;
    left: 294px;
    width: 14px;
    height: 13.6px;
    overflow: hidden;
    cursor: pointer;
  }
  .language {
    position: absolute;
    top: 520px;
    right: 150px;
    width: 349px;
    height: 249px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--text-caption-caption1-roboto-regular-size);
    color: var(--color-gray-300);
    font-family: var(--font-poppins);
  }
</style>