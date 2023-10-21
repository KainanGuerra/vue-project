


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
  display: flex;
  flex-direction: column;
  background-color: #151515;
}
.imgLogo{
  border-radius: 10px;
}
.defineHomeContent{
margin: 50px auto;
width: 960px;
color: white
}

.sectionProduct{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 80px 0px;
}
</style>
