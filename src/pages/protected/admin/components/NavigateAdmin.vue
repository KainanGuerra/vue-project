<template>
    <section class="containerList">
      <div class="redirectBtn" @click="redirect('addProduct')">Adicionar Produto</div>
      <div class="redirectBtn" @click="redirect('listProduct')">Listar Produtos</div>
      <div class="redirectBtn" @click="redirect('listClients')">Listar Clientes</div>
    </section>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';
  
const router = useRouter();
const redirect = (page: string)=> router.push({name: page})

</script>
  
<style>
.containerList{
  margin: 50px 0px;
  display: flex;
  gap: 3rem;
}
.redirectBtn{
  list-style-type: none;
  padding: 10px 20px;
  font-size: 25px;
  border-radius: 5pt;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: 0.2s;
}
.redirectBtn:hover{
  color: white;
  background-color: black;
}

</style>
  