<template>
  <div class="home-header">
    <div class="user-block">Привет, <b>{{store.state.userName}}</b></div>
    <button class="logout-btn" @click="logout">Выйти</button>
  </div>
  <section class="cities-block">
    <div class="select-block">
      <cities-select />
    </div>

    <template v-if="store.state.selectedCity">
      <div class="city-title">{{store.state.selectedCity.name}}</div>
      <img-slider/>
      <div class="city-text">
        {{store.state.text}}
      </div>

    </template>
    <div v-else class="city-text">Город не выбран</div>

  </section>
</template>

<script setup>
import {store} from "../stores/store.js";
import router from "../router/router.js";
import CitiesSelect from "../components/CitiesSelect.vue";
import ImgSlider from "../components/ImgSlider.vue";

function logout() {
  store.commit('logout')
  router.push({path: '/'})
}

</script>

<style scoped>
.home-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 25px;
  font-size: 12px;
  margin-bottom: 80px;

}
.cities-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  .select-block {
    margin-bottom: 112px;
  }
  .city-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .city-text {
    margin-top: 20px;
  }

}



</style>