<template>
    <div v-for="product in props.products" :key="product.id">

        {{ product }}
        <q-toggle
            v-model="value"
            color="primary"
            keep-color
        />
    </div>
</template>
<script lang="ts" setup>

type TProductsOnShopCar = {
    products:Array<any>
}
type TEmits = {
  (e: 'update:active-product', id: any): void;
  (e: 'update:disable-product', id: any): void;
};
const props = defineProps<TProductsOnShopCar>();
  
const emit = defineEmits<TEmits>();
</script>