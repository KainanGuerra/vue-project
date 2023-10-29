<template>
  <main class="defineProductPage">
    <h1>Product Page</h1>
  </main>
</template>

<script setup lang="ts">
import { defineProductsStore } from '../../../stores/products.store';
const useProductsStore = defineProductsStore();


const productPage = useProductsStore.productPage;

</script>
<style scoped>
.defineProductPage{
  color:white
}
</style>