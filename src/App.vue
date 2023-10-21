


<script setup lang="ts">
import HomeHeader from './pages/public/home/components/HomeHeader.vue';
import HomeFooter from './pages/public/home/components/HomeFooter.vue';
</script>

<template>
  <HomeHeader />
  <router-view />
  <HomeFooter />
</template>
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: Helvetica, sans-serif
}
body {
  height: 100vh;
  background-color: #151515;
}
.imgLogo{
  border-radius: 10px;
}
</style>
