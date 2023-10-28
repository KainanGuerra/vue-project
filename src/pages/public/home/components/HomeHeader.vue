<template>
  <header class="homeHeader">
    <section class="containerHeader">
      <img @click="redirect('home')" class="imgLogo" src="../../../../assets/images/supply-logo.jpg">
      <ul class="containerList">
        <li @click="redirect('sneakers')"><a class="redirectBtn">SNEAKERS</a></li>
        <li @click="redirect('headgears')"><a class="redirectBtn">HEADGEARS</a></li>
        <li @click="redirect('acessorios')"><a class="redirectBtn">ACESSORIOS</a></li>
      </ul>
      <div style="display: flex; align-items: center;">
        <q-input
          v-model="input"
          label-color="black"
          color="white"
          class="text-primary text-h6"
          bg-color="grey-5"
          label="Pesquisar"
          outlined
          style="flex: 1; margin-right: 8px;"
        ></q-input>
        <q-icon
          color="white"
          name="search"
          size="30px"
        ></q-icon>
      </div>

      <div class="row justify-between items-center q-gutter-lg">
        <q-icon
        color="white"
        name="account_circle"
        size="60px"
        
        @click="redirect('login')"
        />
        <q-icon
        color="white"
        name="logout"
        size="50px"
        v-if="userStore.token"
        @click="logout"
        />
      </div>
        

    </section>
  </header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineUserStore } from '../../../../stores/user.store';

const $q = useQuasar();
const router = useRouter();

const userStore = defineUserStore();
const userEmail = computed(()=>userStore.user?.email)
const input = ref('');
const redirect = (page: string)=>{
    if(page === 'login'){
      if(!userEmail.value) return router.push({name: page})
      return router.push({name: 'navigate'})
    }
    return router.push({name: page})
} 
const logout = async ()=>{
  try{
    await userStore.logout()
    $q.notify({color: 'positive', message: 'You have been logged out'})
    redirect('home');
  }catch(err){
    console.error(err)
  }
}
</script>
<style scoped>
.homeHeader{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
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
