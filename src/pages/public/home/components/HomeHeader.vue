<template>
  <header class="homeHeader">
    <section class="containerHeader">
      <img @click="redirect('home')" class="imgLogo" src="../../../../assets/images/supply-logo.jpg">
      <ul class="containerList">
        <li @click="redirect('sneakers')"><a class="redirectBtn">SNEAKERS</a></li>
        <li @click="redirect('headgears')"><a class="redirectBtn">HEADGEARS</a></li>
        <li @click="redirect('acessorios')"><a class="redirectBtn">ACESSORIOS</a></li>
      </ul>
      <form>
        <input class="inputText" name="name" autocomplete="off" required placeholder="Pesquisar" />
      </form>
      <img v-if="userEmail" class="profileIcon" src="../../../../assets/icons/profile.jpg" alt="" @click="redirect('login')">
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { defineUserStore } from '../../../../stores/user.store';

const router = useRouter();

const userStore = defineUserStore();
const userEmail = computed(()=>userStore.user?.email)

const redirect = (page: string)=>{
    if(page === 'login'){
      if(!userEmail.value) return router.push({name: page})
      return router.push({name: 'admin'})
    }
    return router.push({name: page})
} 

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
  height: 15vh;
  flex-wrap: wrap;
}
.imgLogo{
  cursor: pointer;
}


li {
  list-style-type: none;
}

a{
  color: white;
  text-decoration: none;
  font-size: 22px;
  width: 100px;
  background-color:#25252554;
  height: 50px;
  border-radius: 5pt;
  padding: 10pt;
  transition: 0.2s;
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
input, .inputText {
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
