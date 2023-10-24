


<script setup lang="ts">
import HomeHeader from './pages/public/home/components/HomeHeader.vue';
import HomeFooter from './pages/public/home/components/HomeFooter.vue';
import { defineUserStore } from './stores/user.store';
import { computed } from 'vue';

const userStore = defineUserStore();

const userRole = computed(()=> userStore.user?.role)

</script>

<template>
  <HomeHeader />
  <router-view />
  <HomeFooter v-if="userRole === 'CLIENT'"/>
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
  justify-content: space-between;
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
.inputText {
  color: #fff;
  font-size: 1.15rem;
  width: 250px;
  height: 45px;
  padding: 1rem;
  background-color: #4f4f4f;
  border-radius: 5pt;
  transition: 0.1s;
}
</style>
