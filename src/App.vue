<template>
  <main class="content-container">
    <RouterView />
  </main>

</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  font-family: Inter,serif;
}

</style>
