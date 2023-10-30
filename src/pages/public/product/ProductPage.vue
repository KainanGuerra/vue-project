<template>
  <q-layout class="text-white row column full-width items-center q-gutter-y-md">
    <h2>Product Page</h2>
    <section class="row items-center q-gutter-x-md full-width justify-center">
      <div class="row items-center" style="width: 350px;">
        <img class="image fit" style="border-radius: 15pt;" v-if="productPage?.photo" :src="productPage.photo">
        <img class="image fit" style="border-radius: 15pt;" v-else src="@/assets/images/tenis.ex.jpg">
      </div>
      <div>
        <label v-for="key in keys" :key="key" class="row fit">
          <div class="q-pa-md text-h5 fit row items-center" style="border: 2px solid white; border-radius: 5pt;">
            {{ labelTranslated[key as keyof typeof labelTranslated] }}
            {{ productPage[key] }}
            <div 
              v-if="key === 'color'" 
              :style="{ width: '20px',height: '20px', backgroundColor: productPage[key] }"
              class="q-ml-md"
            />
          </div>
        </label>
      </div>
    </section>
    <div class="row column items-center q-gutter-y-md" style="width: 350px;">
      <q-btn 
        @click="goToCheckout" 
        class="text-black text-h6 text-weight-bold fit" 
        color="white"
        label="COMPRAR AGORA"
        :disable="isLoading"
      />
      <q-btn 
        @click="addToShopCar"
        class="text-black text-h6 text-weight-bold fit"
        color="white"
        label="ADICIONAR AO CARRINHO"
        :disable="isLoading"
      />
      <q-btn @click="redirect" class="text-black text-h6 text-weight-bold fit" color="white" label="CONTINUAR COMPRANDO" />
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { defineProductsStore } from '@/stores/products.store';
import { definePurchaseStore } from '@/stores/purchase.store';
import { defineUserStore } from '@/stores/user.store';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useProductsStore = defineProductsStore();
const usePurchaseStore = definePurchaseStore();
const useUserStore = defineUserStore();

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const userToken = useUserStore.token;


useProductsStore.findById(+route.params.id)

const productPage = useProductsStore.productPage;

const keys = Object.keys(productPage).filter((key) => key !== 'photo' && key !== 'id');

const labelTranslated = {
  value: 'Valor: ',
  name: 'Nome: ',
  brand: 'Marca: ',
  type: 'Tipo: ',  
  color: 'Cor: ',
  size: 'Tamanho: '
}

const addToShopCar = async () => {
  isLoading.value = true;
  try{

    await usePurchaseStore.updateShopCar(+route.params.id, userToken);
    await useUserStore.getShopCar();
    $q.notify({color: 'positive', message: 'Product added to shop car successfully'});
  }catch(err:any){
    $q.notify({color: 'negative', message: 'Error while trying to add product', caption: err.message});
  }finally{
    isLoading.value = false;
  }
};
const goToCheckout = async() =>{
  await usePurchaseStore.updateShopCar(+route.params.id, userToken);
  await useUserStore.getProductsFromShopCar();
  return router.push({name: 'checkout'});
} 
const redirect = () => router.push({name: 'home'})

</script>
