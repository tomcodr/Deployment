// Annahme: Dies ist ein Vue-Komponenten-Script, z.B., "MeinKomponente.vue"

<template>
  <!-- Deine Vue-Komponenten-Templateteile hier -->
  <button @click="datenSpeichern">Daten speichern</button>
</template>

<script>
// Importiere die benötigten Firebase-Funktionen
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  methods: {
    async datenSpeichern() {
      // Hole die Firestore-Referenz
      const db = getFirestore(this.$firebaseApp);
      const beispielSammlung = collection(db, 'Beispiel');

      // Daten, die du speichern möchtest
      const daten = {
        name: 'Beispielname',
        wert: 42,
        // Weitere Felder hier...
      };

      // Füge die Daten zur Sammlung hinzu
      const dokumentReferenz = await addDoc(beispielSammlung, daten);

      console.log('Daten erfolgreich hinzugefügt mit der ID:', dokumentReferenz.id);
    }
  }
}
</script>

<style>
/* Deine Vue-Komponenten-Stilregeln hier */
</style>
