<template>
  <main>
    <div>
      <h1>Perfil</h1>
      <h2>Informações Pessoais</h2>
      <div>
        <ul>
          <ol>
            <h2>
            {{ userName }}
            </h2>
          </ol>
          <ol>
              <h2>
                {{ userEmail }}
              </h2>
          </ol>
          </ul>
      </div>
      <h2>Pedidos Feitos</h2>
      <button @click="findUserPurchases">Procurar</button>
      <h2>Endereços</h2>
    </div>
  </main>
</template>
<script setup lang="ts">
import { definePurchaseStore } from '@/stores/purchase.store';
import { defineUserStore } from '@/stores/user.store';
import { computed } from 'vue';

const userStore = defineUserStore();
const purchaseStore = definePurchaseStore();
const userName = computed(()=> userStore.user?.name)

const userEmail = computed(()=> userStore.user?.email)
const findUserPurchases = async () => {
  try{
    const token = userStore?.token;
    const response = await purchaseStore.findUserPurchases(token as string);
    return response;
  }catch(err:any){
    console.error(err.message)
  }
}

</script>
<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: white
}
main div{
  display: flex;
  flex-direction: column;
  width: 960px;
}
</style>