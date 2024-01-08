<template>
  <div>
    <h1>Profilseite</h1>
    <div v-if="user">
     <div class="icon"><i class='bx bxs-user'></i></div>
      <p class="text"><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth();
const user = ref(null);
const userData = ref(null);


onMounted(() => {
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      user.value = authUser;

      // Hier ein beispielhafter Code, um weitere Benutzerdaten zu laden
      // Beachten Sie, dass Sie dies an Ihre tatsächliche Datenstruktur anpassen müssen
      userData.value = {
        name: "John", // Laden Sie den Namen während des Registrierungsprozesses
        surname: "Doe", // Laden Sie den Nachnamen während des Registrierungsprozesses
        phoneNumber: "+123456789" // Laden Sie die Telefonnummer während des Registrierungsprozesses
      };
    }
  });
});
</script>

<style scoped>
.text {
  position: absolute;
  font-size: 24px;
  font-family: Manrope;
  top: 50%;
  left: 30%;
  color: #fff;
}

.icon{
  position: absolute;
  top: 8%;
  left: 30%;
  font-size: 300px;
  color: #fff;
}
</style>
