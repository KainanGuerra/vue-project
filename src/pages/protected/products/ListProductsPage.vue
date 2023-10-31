<template>
    <q-layout>
        <q-page-container class="row column items-center">
            <h2>
                List Products
            </h2>
            
            <q-page class="q-px-xl row column full-width items-center q-gutter-md">
                <list-component 
                :table-info="{
                    data: products,
                    columns: tableColumns,
                    resource: 'products'
                }"
              />
            <q-btn 
                label="VOLTAR"
                color="black"
                @click="redirect"
            />
          </q-page>
    </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { defineProductsStore } from '@/stores/products.store';
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import ListComponent from './components/ListComponent.vue';
import { date } from 'quasar';

const productsStore = defineProductsStore();
const router = useRouter();

const products = computed(()=> productsStore.allProducts);
const tableColumns = [
    {
      name: 'id',
      required: true,
      label: 'ID',
      align: 'left',
      field: 'id',
      sortable: true,
    },
    {
      name: 'name',
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'createdAt',
      label: 'Created At',
      align: 'left',
      field: (row: any) => date.formatDate(
      new Date(row.createdAt),
      'YYYY-MM-DD HH:mm:ss'
    ),
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
    {
      name: 'photo',
      label: 'Photo',
      align: 'left',
      field: 'photo',
      sortable: false,
},
]


const redirect = () => router.push({name: 'navigate'});

onBeforeMount(()=> productsStore.find());
</script>