<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Email</label>
      <input placeholder="Digite seu email" type="text" />
      <label>Senha</label>
      <input placeholder="Digite sua senha" type="text" />
      <button type="submit">Acessar</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { AxiosInstance } from '@/services/Axios'

const login = async () => {
  try {
    const { data } = AxiosInstance.post()
  } catch (err: any) {
    console.log(err.message)
  }
}
</script>
