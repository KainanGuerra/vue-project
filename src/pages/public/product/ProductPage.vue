<template>
  <h1>Product Page</h1>
  <button @click="useProductsStore.find()">Achar Produtos</button>
</template>
<script setup lang="ts">
import { defineProductsStore } from '../../../stores/products.store';


const useProductsStore = defineProductsStore()


</script>
