<template>
  <div class="defineRegisterPage">
    <section class="sectionRegisterForm">
      <h1 class="titlePage">Register Page</h1>
    <div>
      <input type="text" v-model="state.name" placeholder="Nome">
    </div>
    <div>
      <input type="text" v-model="state.document" placeholder="CPF/CNPJ">
    </div>
    <div>
      <input type="text" v-model="state.email" placeholder="Email">
    </div>
    <div>
      <input type="password" v-model="state.password" placeholder="Senha">
    </div>

  </section>    
  <button class="btnForm" @click="register">CADASTRAR</button>
  <button class="btnForm" @click="router.push({name: 'home'})">VOLTAR</button>
  </div>
</template>

<script setup lang="ts">
import { defineUserStore } from '@/stores/user.store';
import type { TCreateUserBodyRequest } from '../../../shared/types/user/create-user-body.type';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const state = reactive<TCreateUserBodyRequest>({
  name: 'Kainan Guerra',
  password: 'Zrp@1234',
  email: 'asddsoaijds@gmail.com',
  document: '385.753.620-97',
});

const userStore = defineUserStore();

const register = async () => {

try{
  const body = {
    name: state.name,
    password: state.password,
    email: state.email,
    document: state.document
  }
    await userStore.createUser(body);  
    alert('Cadastro feito com sucesso')
    router.push({name: 'home'})
  }catch(err: any){
    alert(`Um erro aconteceu: ${err.response.data.message}`)
    console.error(err.response)
  }
}


</script>

<style scoped>
.defineRegisterPage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  color: black;
  background-color: white;
  height: 100vh;
}
.sectionRegisterForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 450px;
  gap: 10px;
}
.sectionRegisterForm div{
  width: 100%;
}
.sectionRegisterForm div input{
  width: 100%;
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  padding: 10px;
  border: solid black 2px;
}
.titlePage{
  margin: 20px 0px 0px 0px;
  font-size: 30px;
  text-transform: uppercase;
}
.btnForm{
  width: 200px;
  text-align: center;
  padding: 10px 0px 5px 0px;
  cursor: pointer;
  border-radius: 5pt;
  border: none;
  font-size: 20px;
  margin-top: 20px;
  border: 2px solid black;
  background-color: white;
  font-weight: bold;
  transition: 0.1s
}
.btnForm:hover{
  background-color: rgb(230, 230, 230);
  transform: scale(1.03);
}
</style>
