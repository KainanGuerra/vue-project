<script setup lang="ts">
const login = ()=> {
  console.log('Funcionando');
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Email</label>
      <input placeholder="Digite seu email" type="text">
      <label>Senha</label>
      <input placeholder="Digite sua senha" type="text">
      <button type="submit">Acessar</button>
    </form>
</main>
</template>
