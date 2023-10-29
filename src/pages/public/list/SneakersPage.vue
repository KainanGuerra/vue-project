<template>
  <div class="defineHomeContent">
    <div class="sectionProduct">
      <h2>SNEAKERS</h2> 
      <section class="listProducts">
        <div v-for="product in sneakersFound" :key="product.name" class="cardWrapper">
          <card-product
          :product-info="product"
          />
        </div>
      </section> 
      <h4 v-if="!sneakersFound">Nenhum produto cadastrado</h4>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { defineProductsStore } from '@/stores/products.store';
import CardProduct from '../home/components//content/CardProduct.vue';
const useProductsStore = defineProductsStore();
const sneakersFound =  computed<any>(() => {
  return useProductsStore.sneakers;
});

onMounted(async () => {
try{
  console.log();
  await useProductsStore.find();
}catch(err){
  console.log(err);
  throw err;
}
});
</script>

<style scoped>
.listProducts{
display: grid;
grid-template-columns: repeat(3, 1fr); /* Three columns in each row */
gap: 20px; /* Adjust the gap as needed */
}

.cardWrapper{
display: flex;
justify-content: center; 
transition: 0.2s;
}
.cardWrapper:hover{
transform: scale(1.02);
}
.sectionProduct{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 25px;
}
</style>