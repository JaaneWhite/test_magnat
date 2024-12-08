<template>
    <select class="city-select" v-model="store.state.selectedCity">
      <option
          v-for="city in cities" :key="city.id"
          :value="city"
          :label="city.name"
          class="city-select-option"
      ></option>
    </select>
</template>

<script setup>
import {store} from "../stores/store.js";
import {ref} from "vue";

const cities = store.state.cities

let selected = ref('')
</script>

<style scoped>
.city-select {
  width: 230px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 12px;
  .city-select-option {
    font-family: Inter,serif;

  }
}
</style>