<template>
  <main>
    <h1>Perfil</h1>
    <div class="containerPerfil">
      <div class="containerPhotoPerfil">
        <img src="../../../assets/images/fototest.jpg" alt="">
      </div>
      <div class="containerInfoPessoal">
        <p>Nome: Cristiana Ronalda</p>
        <p>Data: 13/11/1982</p>
        <p>E-mail: criscris@cr7.com.br</p>
      </div>
    </div>
    <div>
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
      <button @click="findUserPurchases">PROCURAR</button>
      <div class="address-container">
        <h2>Endereço</h2>
        <input class="address-field" type="text" placeholder="Rua">
        <input class="address-field" type="text" placeholder="Cidade">
        <input class="address-field" type="text" placeholder="Estado">
        <input class="address-field" type="text" placeholder="Código Postal">
    </div>

      <list-address-vue 
      :addresses="[]"
      />
      {{ 'Encontrado' + addressesFound }}
    </div>
  </main>
</template>
<script setup lang="ts">
import { definePurchaseStore } from '@/stores/purchase.store';
import { defineUserStore } from '@/stores/user.store';
import { computed } from 'vue';
import ListAddressVue from './components/ListAddress.vue';

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

const addressesFound = computed(()=> userStore.listDeliveryAddress());

</script>
<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}
main div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
}


button{
  color: white;
  background-color:#070707c4;
  font-size: 1.25rem;
  padding: 0.25rem 3rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

button:hover{
  background-color: white;
  color: #151515;
}

h1{
  font-size: 3rem;
}

h2{
  font-size: 2rem;
}

.containerInfoPessoal{
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

}

.containerInfoPessoal p{
  font-weight: bold;
  font-size: 1.1rem;
}

.containerPhotoPerfil{
  width: 30%;
}

.containerPhotoPerfil img{
  width: 150px;
  border: 4px solid rgba(49, 48, 48, 0.644);
  border-radius: 5%;

}

   /* Estilo para o contêiner do endereço */
   .address-container {
            border: 1px solid #ffffff3a;
            padding: 20px;
            border-radius: 5px;
            background-color: #070707c4;
            width: 300px;
            margin: 0 auto;
            margin-top: 1rem;
        }

        /* Estilo para os campos de input */
        .address-field {
            margin: 10px 0;
            width: 100%;
            padding: 8px;
            border: 1px solid #f7f3f3;
            border-radius: 3px;
            background-color: #151515;
            color: white;
        }

        .containerPerfil{
          display: flex;
          flex-direction: row;
          width: 700px;
        }







      
</style>