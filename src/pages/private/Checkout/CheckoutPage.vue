<template>
  <q-layout class="q-pa-lg bg-white row column items-center full-width">
    <q-page-container>

      <div class="text-center">
        <h2>Checkout Page</h2>
        <h3>Produtos no carrinho</h3>
        <div>            
          <list-component
            :table-info="{
              data:productsOnShopCar,
              columns:tableColumns,
              paginationHiden: true,
            }"
          />
      </div>
    </div>
    <div>
      <h3>Enreços</h3>
      <div class="text-h5">Select com as opções de endereço</div>
      <div class="text-h5">Opção de retirar em loja</div>
      <div class="text-h5">Opção adicionar ou remover endereço</div>
    </div>
    <div>
      <h4>Forma de Pagamento</h4  >
        <q-select
          v-model="selectedPaymentMethod"
          :options="paymentMethodOptions"
          outlined
          label="Selecione o método de pagamento:"
        />
    </div>
  </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
// import { definePurchaseStore } from '@/stores/purchase.store';
import { defineUserStore } from '@/stores/user.store';
import ListComponent from '@/pages/protected/products/components/ListComponent.vue';
import { computed, onBeforeMount, ref } from 'vue';
import { definePurchaseStore } from '@/stores/purchase.store';


const useUserStore = defineUserStore();

const selectedPaymentMethod = ref('')
const paymentMethodOptions = [
  {value:'DYNAMIC PIX', label: 'PIX'}
]
const productsOnShopCar = computed(()=> useUserStore.productsOnShopCar);
const tableColumns = [
    {
      name: 'name',
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'value',
      label: 'Value',
      align: 'left',
      field: 'value',
      format: (row: any)  => 'R$ ' + row,
      sortable: true,
    },
    {
      name: 'type',
      label: 'Type',
      align: 'left',
      field: 'type',
      sortable: true,
    },
    {
      name: 'brand',
      label: 'Brand',
      align: 'left',
      field: 'brand',
      sortable: true,
    },
    {
      name: 'color',
      label: 'Color',
      align: 'left',
      field: 'color',
      sortable: true,
    },
    {
      name: 'size',
      label: 'Size',
      align: 'left',
      field: 'size',
      sortable: true,
    },
]

const usePurchaseStore = definePurchaseStore();
onBeforeMount(()=>{

})
</script>
