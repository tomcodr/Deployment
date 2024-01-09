<template>
  <Navigation/>
  <div>
    <body>
      <div class="container">
        <div class="card">
          <h1 class="text">Login Details</h1>
          <div class="user"><i class='bx bx-user-circle'></i></div>
          <div class="imgBx">
            <img src="/logocar.png">
          </div>
          <div class="user-details">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue';
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../main';

const auth = getAuth();
const user = ref({
  name: '',
  email: '',
  photoURL: '', // Add a property for the user's photo URL
});

onMounted(() => {
  onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        user.value = userDocSnap.data();
      }
    }
  });
});

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Manrope';
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    position: relative;
}

.container .card {
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
}

.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
}

.container .card .imgBx {
    top: 0%;
    transform: translateY(0%);
}

.container .card .imgBx img {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-5deg);
    width: 270px;
}

.container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
}
.text{
  position: absolute;
  top: 20px;
  left: 50px;
  color: #fff;

}


.user-details {
  position: absolute;
  top: 350px;
  left: 20px;
  flex-grow: 1;
  color: #fff;
  font-size: 18px;
}

.user{
  position: absolute;
  top: 200px;
  left: 110px;
  font-size: 100px;
  color: #fff;
}

</style>
