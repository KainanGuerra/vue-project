<script setup lang="ts">
import MainHeader from './components/header/MainHeader.vue';
</script>

<template>
  <div class="body">

    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.body{
  width: 100vw;
  height: 100vh;
}
</style>
