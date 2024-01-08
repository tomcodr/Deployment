<template>
  <div>
    <h1>Profilseite</h1>
    <div v-if="userData">
      <div class="icon"><i class='bx bxs-user'></i></div>
      <p class="text-name"><strong>Name:</strong> {{ user.value }}</p>
      <p class="text-email"><strong>Email:</strong> {{ user.email }}</p>
      <p class="text-number"><strong>Telefonnummer:</strong> {{ userData.phoneNumber }}</p>
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
       
      };
    }
  });
});
</script>

<style scoped>
.icon {
  position: absolute;
  top: 8%;
  left: 30%;
  font-size: 100px;
  color: #fff;
}
.text-name {
  position: absolute;
  font-size: 24px;
  font-family: Manrope;
  top: 30%;
  left: 30%;
  color: #fff;
}

.text-email {
  position: absolute;
  font-size: 24px;
  font-family: Manrope;
  top: 50%;
  left: 30%;
  color: #fff;
}
.text-number {
  position: absolute;
  font-size: 24px;
  font-family: Manrope;
  top: 60%;
  left: 30%;
  color: #fff;
}


</style>
