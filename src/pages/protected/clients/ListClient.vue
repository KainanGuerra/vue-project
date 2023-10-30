<template> 
    <q-layout>
        <q-page-container class="row column items-center">
            <h2>
                List Clients
            </h2>
        
            <q-page class="q-px-xl row column full-width items-center q-gutter-md">
                <list-component 
                    :table-info="{
                        data: data,
                        columns: tableColumns,
                    }"
                />
                <q-btn color="black" @click="redirect" label="VOLTAR" />
            </q-page>
</q-page-container>
</q-layout>
</template>

<script lang="ts" setup>

import { defineUserStore } from '@/stores/user.store';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import ListComponent from '../products/components/ListComponent.vue';
const userStore = defineUserStore();
const data = userStore.clients;
const tableColumns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    format: (val: any) => (val ? String(val) : ''),
  },
  {
    name: 'status',
    required: true,
    label: 'Status',
    align: 'left',
    field: 'status',
  },
  {
    name: 'deliveryAddress',
    required: true,
    label: 'Delivery Address',
    align: 'left',
    field: 'deliveryAddress',
  },
  {
    name: 'discount',
    required: true,
    label: 'Discount',
    align: 'left',
    field: 'discount',
    format: (val) => (val ? `${Number(val).toFixed(2)}` : ''),
  },
  {
    name: 'finalValue',
    required: true,
    label: 'Final Value',
    align: 'left',
    field: 'finalValue',
    format: (val) => (val ? `${Number(val).toFixed(2)}` : ''),
  },
  {
    name: 'products',
    required: true,
    label: 'Products',
    align: 'left',
    field: 'products',
    format: (val) => (val ? val.join(', ') : ''),
  },
  {
    name: 'rawValue',
    required: true,
    label: 'Raw Value',
    align: 'left',
    field: 'rawValue',
    format: (val) => (val ? `${Number(val).toFixed(2)}` : ''),
  },
];
const router = useRouter();
const redirect = () => router.push({name: 'navigate'});

onBeforeMount(()=> userStore.fetchClients())

</script>