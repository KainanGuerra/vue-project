<template>
  <main class="defineLoginPage">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <section>
        <label>Email</label>
        <input v-model="form.email" placeholder="Digite seu email" type="text" />
      </section>
      <section>
        <label>Senha</label>
        <input v-model="form.password" placeholder="Digite sua senha" type="text" />
      </section>
      <section>
        <button type="submit">Acessar</button>
      </section>
        <button @click="redirect('register')">Cadastrar</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

import { defineUserStore } from '@/stores/user.store';
const $q = useQuasar()
const userStore = defineUserStore();


const form = reactive({
  email: 'outlook@hotmail.com',
  password: 'Bana@123'
})

const router = useRouter();
const login = async () => {
  try {
    const payload = {
      email: form.email,
      password: form.password
    }
    await userStore.login(payload)
    $q.notify({color: 'positive', message: 'User logged in successfully'});
    return router.push({name: 'home'})
  } catch (err: any) {
    return $q.notify({color: 'negative', message: `Erro: ${err.response.data.message}`});
  }
}

const redirect = (page: string)=> router.push({name: page})


</script>

<style scoped>
.defineLoginPage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background: white;
}

form{
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-bottom: 100px;
}
section{
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 15px 0px;
}
input{
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
}
button{
  font-size: 20px;
  cursor: pointer;
}
</style>
