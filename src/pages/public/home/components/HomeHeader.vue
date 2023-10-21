<template>
  <header class="homeHeader">
    <section class="containerHeader">
      <img class="imgLogo" src="../../../../assets/images/supply-logo.jpg">
      <ul class="containerList">
        <li><a class="redirectBtn" href="#">Sobre</a></li>
        <li><a class="redirectBtn" href="#">Contato</a></li>
        <li><a class="redirectBtn" href="#">Fotos</a></li>
      </ul>
      <form>
        <input name="name" autocomplete="off" required placeholder="Pesquisar" />
      </form>
      <img class="profileIcon" src="../../../../assets/icons/profile.jpg" alt="">
    </section>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { defineUserStore } from '../../../../stores/user.store'

const router = useRouter();

const userStore = defineUserStore();
const input = ref('')
console.log(userStore.isUserAutheticated());

</script>
<style scoped>
.homeHeader{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}
.containerHeader{
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
  min-height: 100px;
  flex-wrap: wrap;
}

input{
  height: 30px;
}

li {
  list-style-type: none;
}

a{
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  width: 100px;
  background-color:#25252554;
  height: 50px;
  border-radius: 10px;
  padding: 0.75rem 1rem 0rem 1rem;
}

a:hover{
  background-color: white;
  color: #151515;
}

.containerList{
  display: flex;
  gap: 1rem;
}

/*Pesquisar*/
input {
  color: #fff;
  font-size: 1.15rem;
  width: 250px;
  height: 45px;
  padding: 1rem;
  background-color: #4f4f4f;
  border-radius: 5pt;
  transition: 0.1s;
}
input:focus {
  border: 2px solid white;
  outline: none;
}
span {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

/*button*/
button {
  border-radius: 4px;
  background-color: #5ca1e1;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.842);
}

.redirectBtn{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.redirectBtn:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

.redirectBtn:hover{
  padding-right: 24px;
  padding-left:8px;
}

.redirectBtn:hover:after {
  opacity: 1;
  right: 10px;
}
.profileIcon{
  width: 50px;
  height: 50px;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.profileIcon:hover{
  transform: scale(1.08);
}
</style>
