<template>

<h1>User Profile</h1>
  <div class="profile-container">
    <div class="user-info">
      
      <div class="user-details">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script setup>
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
.profile-container {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.user-details {
  flex-grow: 1;
}

/* Add more styling as needed */
</style>
