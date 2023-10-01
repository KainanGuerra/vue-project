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
import { reactive, ref } from 'vue'

import { defineUserStore } from '../../../stores/user.store';
const userStore = defineUserStore();


const form = reactive({
  email: 'kainanguerra@hotmail.com',
  password: 'P@lmeiras2022'
})

const errorMessage = ref('')


const login = async () => {
  try {
    const payload = {
      email: form.email,
      password: form.password
    }
    await userStore.login(payload)
  } catch (err: any) {
    console.error(err.message)
  }
}

</script>
