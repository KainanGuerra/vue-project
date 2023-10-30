<template>
  <div class="defineHomeContent">

      <section class="display-sneakers">
        <img class="main-sneaker" src="../../../../assets/images/triple/tenis1.jpg" alt="">
        <img class="main-sneaker" src="../../../../assets/images/triple/tenis2.jpg" alt="">
        <img class="main-sneaker" src="../../../../assets/images/triple/tenis3.jpg" alt="">
      </section>
      <div class="sectionProduct">
        <h2>SNEAKERS</h2> 
        <section class="listProducts">
          <div v-for="product in sneakersFound" :key="product.name" class="cardWrapper">
            <card-product
            :product-info="product"
            />
          </div>
        </section> 
      </div>
      <div class="sectionProduct">
        <h2>HEADGEARS</h2> 
        <section class="listProducts">
          <div v-for="product in headFound" :key="product.name" class="cardWrapper">
            <card-product
              :product-info="product"
            />
          </div>
        </section> 
      </div>
      <div class="sectionProduct">
        <h2>ACESSORIOS</h2>
        <section class="listProducts">
          <div v-for="product in acessFound" :key="product.name" class="cardWrapper">
            <card-product
            :product-info="product"
            />
          </div>
        </section> 
      </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { defineProductsStore } from '@/stores/products.store';
import CardProduct from './content/CardProduct.vue';

const useProductsStore = defineProductsStore();
const sneakersFound =  computed<any>(() => {
  return useProductsStore.sneakers;
});
const headFound = computed<any>(()=>{
  return useProductsStore.headgears;
});
const acessFound = computed<any>(()=>{
  return useProductsStore.acessorios;
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
.defineHomeContent{
margin: 0px auto;
}
.main-sneaker{
  border-radius: 10%;
  height: 300px;
  transition: 0.3s;
}
.main-sneaker:hover{
  height: 320px;
}
.listProducts{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns in each row */
  gap: 20px; /* Adjust the gap as needed */
}
.display-sneakers{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  align-items: center;
}
.cardWrapper{
  display: flex;
  justify-content: center; 
  transition: 0.2s;
}
.cardWrapper:hover{
  transform: scale(1.02);
}

</style>