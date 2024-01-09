<template>


  <body>
<div class="wrapper">
  <form @submit.prevent="submitForm">
    <h1>Fahrzeug Hinzufügen</h1>

    <div class="input-box">
      <div class="input-field">
        <input type="text" v-model="brand" placeholder="Marke" required list="brandList">
        <datalist id="brandList">
          <option value="BMW"></option>
          <option value="Mercedes-Benz"></option>
          <option value="Volkswagen"></option>
          <option value="Ford"></option>
          <option value="Audi"></option>
          <option value="Porsche"></option>
        </datalist>
        <i class='bx bx-copyright'></i>
      
      </div>
      <div class="input-field">
        <input type="text" v-model="username" placeholder="Modell" required>
        <i class='bx bxs-car' ></i>
      </div>
    </div>

    <div class="input-box">
      <div class="input-field">
        <input type="text" v-model="VINNumber" placeholder="VIN Nummer" title="17 Ziffern" required pattern="[A-HJ-NPR-Z0-9]{17}">
        <i class='bx bxs-key'></i>
      </div>
      
      <div class="input-field">
        <input type="text" v-model="color" placeholder="Farbe" required list="colorList">
        <datalist id="colorList">
          <option value="schwarz"></option>
          <option value="weiss"></option>
          <option value="blau"></option>
          <option value="rot"></option>
          <option value="grün"></option>
          <option value="pink"></option>
        </datalist>
        <i class='bx bx-palette'></i>
      </div>
      </div>

   

    <div class="input-box">
      <div class="input-field">
        <input type="text" v-model="phoneNumber" placeholder="Erstzulassung" title="TT.MM.YYYY" required pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$">

        <i class='bx bxs-calendar' ></i>
      </div>
      <div class="input-field">
        <input type="text" v-model="name" placeholder="Name Inhaber" pattern="[A-Za-z\s]+" title="Nur Buchstaben und Leerzeichen erlaubt" required>

        <i class='bx bxs-user' ></i>
      </div>
    </div>

    <label>
      <input type="checkbox" v-model="declaration">Is your vehicle favorite?
    </label>

   
    <button type="submit" class="btn">Hinzufügen</button>
  </form>

</div>
</body>
</template>

<script>
import store from '../store/store';

export default {
data() {
  return {
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    declaration: false,
    brand:'',
    
  };
},

methods: {

//DIE METHODE HINZUFÜGEN
  checkBrand() {
    console.log("1. Check Brand wurde aufgerufen");


let checkedBrand = this.brand;
console.log("2. Aktuelle Brand:", checkedBrand);
let imagePath;

switch (checkedBrand) {
  case 'BMW':
    imagePath = '/BMW.png';
    break;
  case 'Mercedes-Benz':
    imagePath = '/Mercedes.png';
    break;
  case 'Volkswagen':
    imagePath = '/Volkswagen.jpg';
    break;
  case 'Ford':
    imagePath = '/Ford.jpg';
    break;
  case 'Audi':
    imagePath = '/audi-a6-schwarz-vorne.png'; 
    break;
  case 'Porsche':
    imagePath = '/Porsche.png';
    break;
  default:
    console.error("Kein Bild konnte geladen werden. Unbekannte Marke:", checkedBrand);
    imagePath = null;
}
console.log("3. Image Path:", imagePath);

if (imagePath && !store.getters.getCarPaths.includes(imagePath)) {
  console.log("4. Dispatching addCarPath");
  console.log("Image Path:", imagePath);
  store.dispatch('addCarPath', imagePath);
  console.log("5. Car Paths im Store nach Dispatch:", store.getters.getCarPaths);
  return imagePath;
} else if (store.getters.getCarPaths.includes(imagePath)) {
  console.error("Dieses Auto wurde bereits gespeichert!");
  return null;
} else {
  return null;
}
},



  




translateBrand(brandName) {
  const brandTranslations = {
    "Mercedes-Benz": "MB",
    "BMW": "BMW",
    "Volkswagen": "VW",
    "Porsche": "PO",
    "Ford": "FO",
    "Audi": "AU"
  };

  return brandTranslations[brandName] || brandName;
},
async submitForm() {
  
  const translatedBrand = this.translateBrand(this.brand);
  this.checkBrand();
  const queryParams = new URLSearchParams({
    modell: this.username,
    farbe: this.color,
    erstzulassung: this.phoneNumber,
    isFavorit: this.declaration.toString(),
    vin: this.VINNumber,
    nameInhaber: this.name,
    marke_markenID: translatedBrand,
  });

  const apiUrl = `https://cartrackerapi.onrender.com/api/v1/fahrzeuge?${queryParams.toString()}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
    });

    if (response.ok) {
      //HIER WIRD DAS GELÖSCHT!!
      this.$router.push("/");
      console.log('Fahrzeug erfolgreich gepostet!');
    } else {
      console.error('Fehler beim Posten des Fahrzeugs.');
    }
  } catch (error) {
    console.error('Fehler beim Fetch-Aufruf:', error);
  }
},
}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap");



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
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
  width: 750px;
  background: rgba(255, 255, 255, .1);
  border: 2px solid rgba(255, 255, 255, .2);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  color: #fff;
  padding: 40px 35px 55px;
  margin: 0 10px;
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper .input-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.input-box .input-field {
  position: relative;
  width: 48%;
  width: 50%;
  margin: 13px 0;
}


.input-box .input-field input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  outline: none;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  padding: 15px 15px 15px 40px;
}

.input-box .input-field input::placeholder {
  color: #fff;
}

.input-box .input-field i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapper label {
  display: inline-block;
  font-size: 14.5px;
  margin: 10px 0 23px;
}

.wrapper label input {
  accent-color: #fff;
  margin-right: 5px;
}


.wrapper .btn {
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  color: #333;
  font-weight: 600;
}


@media(max-width: 576px) {
  .input-box .input-field {
      width: 100%;
      margin: 10px 0;
  }
}
</style>