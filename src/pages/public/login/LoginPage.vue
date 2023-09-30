<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Email</label>
      <input v-model="form.email" placeholder="Digite seu email" type="text" />
      <label>Senha</label>
      <input v-model="form.password" placeholder="Digite sua senha" type="text" />
      <button type="submit">Acessar</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue'

const form = reactive({
  email: 'kainanguerra@hotmail.com',
  password: 'P@lmeiras2022'
})

async function login() {
  try {

    const response = await axios.create({
      headers: {}
    }).post('http://localhost:3000/api/v1/auth', {
      email: form.email, 
      password: form.password,
    })
    console.log(response)
  } catch (err: any) {
    console.log(err.message)
  }
}
</script>
