<template>
  <body>
  <div class="wrapper">
    <form @submit.prevent="login">
      <h1>Login {{ firstName }}</h1>
      <div class="input-box">
        <input v-model="email" type="email" placeholder="Email" required>
      </div>
      <div class="input-box">
        <input v-model="password" type="password" placeholder="Password" required>
      </div>
      <div><p v-if="errMsg">{{ errMsg }}</p></div>
      <div class="remember-forgot">
        <label><input type="checkbox" v-model="rememberMe"> Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register-link">
        <p>Don't have an account? <a @click="register" href="#">Register</a></p>
      </div>
    </form>
  </div>
</body>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'


const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref();

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Succesfully signed in!");
      router.push('/fahrzeughinzufuegen')
    })
    .catch((error) => {
      handleAuthError(error);
    });
};


const handleAuthError = (error) => {
  console.log(error.code);
  switch (error.code) {
    case "auth/invalid-email":
      errMsg.value = "Invalid email";
      break;
    case "auth/user-not-found":
      errMsg.value = "No account with that email was found";
      break;
    case "auth/wrong-password":
      errMsg.value = "Incorrect password";
      break;
    case "auth/email-already-in-use":
      errMsg.value = "Email is already in use";
      break;
    default:
      errMsg.value = "Email or password was incorrect";
      break;
  }
};

const register = () =>{
  router.push('/register')
}
const signInWithGoogle = () => {
  // Implement Google sign-in logic here
};
</script>


<style scoped>




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;

}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('/login-hintergrund.png') no-repeat;
    background-size: cover;
    background-position: center;
}

.wrapper {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
}

.wrapper h1 {
    font-size: 36px;
    text-align: center;
}

.wrapper .input-box {
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
    color: #fff;
}

.input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remember-forgot label input {
    accent-color: #fff;
    margin-right: 3px;
}

.remember-forgot a {
    color: #fff;
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.wrapper .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;

}

.wrapper .register-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;

}

.register-link p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register-link p a:hover {
    text-decoration: underline;
}
</style>
