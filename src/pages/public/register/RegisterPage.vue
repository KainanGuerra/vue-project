<template>
  <div class="defineRegisterPage">
    <img class="imgLogo" src="../../../assets/images/supply-logo.jpg" alt="">
  <section class="sectionRegisterForm">
    <h1 class="titlePage">Register Page</h1>
    <div>
      <input type="text" v-model="state.name" placeholder="Nome">
      <span v-if="!$v.name.required">Nome é obrigatório</span>
    </div>
    <div>
      <input type="text" v-model="state.email" placeholder="Email">
      <span v-if="!$v.email.required">Email é obrigatório</span>
    </div>
    <div>
    <input type="text" v-model="confirmEmail" placeholder="Confirmar Email">
    <span v-if="!emailConfirmationValid">Os emails não coincidem</span>
    </div>
    <div>
      <input type="password" v-model="state.password" placeholder="Senha">
      <span v-if="!$v.password.required">Senha é obrigatória</span>
    </div>
    <div>
      <input type="password" v-model="confirmPassword" placeholder="Confirmar Senha">
      <span v-if="!passwordConfirmationValid">As senhas não coincidem</span>
    </div>
    <div>
      <input type="text" v-model="state.document" placeholder="CPF/CNPJ">
      <span v-if="!$v.document.required">CPF/CNPJ é obrigatório</span>
    </div>
  </section>    
  <button class="btnForm" @click="register">CADASTRAR</button>
  <button class="btnForm" @click="router.push({name: 'home'})">VOLTAR</button>
  </div>
</template>

<script setup lang="ts">
import type { TCreateUserBodyRequest } from '../../../shared/types/user/create-user-body.type';
import useVuelidate from '@vuelidate/core';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { defineUserStore } from '../../../stores/user.store';

const router = useRouter();
const state = reactive<TCreateUserBodyRequest>({
  name: '',
  password: '',
  email: '',
  document: '',
});

const rules = {
  name: { required: true },
  password: { required: true },
  email: { required: true },
  document: { required: true },
};

const $v = useVuelidate(rules, state);

console.log($v.value)

let confirmEmail = '';
let confirmPassword = '';

const emailConfirmationValid = ref(true);
const passwordConfirmationValid = ref(true);

watch([() => state.email, () => confirmEmail], ([newEmail, newConfirmEmail]) => {
  emailConfirmationValid.value = newEmail === newConfirmEmail;
});

watch([() => state.password, () => confirmPassword], ([newPassword, newConfirmPassword]) => {
  passwordConfirmationValid.value = newPassword === newConfirmPassword;
});


const userStore = defineUserStore()
const register = async () => {

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
