<template>
  <q-table
      v-model:selected="selected"
      :rows="props.tableInfo.data"
      :columns="props.tableInfo.columns"
      :hide-pagination="props.tableInfo.paginationHidden"
      selection="single"
      class="fit"
  >  
    <template v-slot:body-selection="scope">
        <q-icon
        name="delete"
        size="24px"
        v-model="scope.selected"
        @click="exclude(scope.row.id, props.tableInfo.resource as string )"
    />
    </template>
  </q-table>

</template>

<script lang="ts" setup>
import { defineProductsStore } from '@/stores/products.store';
import { defineUserStore } from '@/stores/user.store';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

type TListProduct = {
  columns: Array<any>,
  data: Array<any>
  paginationHidden?: boolean,
  resource?: string,
}
const $q = useQuasar();
const selected = ref([] as any);
const useProductsStore = defineProductsStore();
const useUserStore = defineUserStore();


const exclude = async (id: any, resource: string) => {
  if(resource === 'products'){
    try{
      await useProductsStore.deleteProduct(id, useUserStore.token as string);
      await useProductsStore.find();
      return $q.notify({color:'positive', message: 'Product excluded successfully'})
    }catch(err){
      return $q.notify({color:'negative', message: 'Something went wrong', caption: `${err}`})
    }
  }
  if(resource === 'shop-car'){
    try{
      await useUserStore.deleteItem(id);
      await useUserStore.getProductsFromShopCar();
      return $q.notify({color:'positive', message: 'Product removed from shop-car'})
    }catch(err){
      return $q.notify({color:'negative', message: 'Something went wrong', caption: `${err}`})
    }
  }
  if(resource === 'clients'){
    try{
        await useUserStore.deleteClient(id);
        await useUserStore.fetchClients();
        return $q.notify({color:'positive', message: 'Client deleted successfully'})
      }catch(err){
        return $q.notify({color:'negative', message: 'Something went wrong', caption: `${err}`})
      }
  }
}
const props = defineProps<{tableInfo: TListProduct}>();

</script>