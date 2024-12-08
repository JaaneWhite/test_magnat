<template>
  <form class="login-form" id="login-form">
    <div class="form-title">Войти в панель</div>
    <input class="form-input" type="text" placeholder="Введите логин" v-model="login" />
    <input class="form-input" type="password" placeholder="Введите пароль" v-model="password" />
    <button class="submit-btn" @click.stop="formSubmit">Войти</button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {store} from "../stores/store.js";
import router from "../router/router.js";

if (store.state.userName) {
  router.push({path: '/home'})
}

let login = ref('')
let password = ref('')

function formSubmit() {
  if (auth()) {
    store.commit('login', login.value)
    router.push({path: '/home'})
  }

}
function auth() {
  if (login.value.length >= 3 && password.value.length >= 1) {
    return true
  }

}


</script>

<style scoped>
.login-form {
  margin: auto;
  display: flex;
  flex-direction: column;
  .form-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
  }
  .form-input {
    width: 230px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #D7D7D7;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
    margin-bottom: 12px;
    &::placeholder {
      color: #D7D7D7
    }
  }
  .submit-btn {
    margin-top: 20px;
    width: 68px;
    height: 31px;
    color: white;
    background-color: black;
    border-radius: 8px;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>