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
        field: 'createdAt',
        sortable: true,
      },
      {
        name: 'email',
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true,
      },
      {
        name: 'document',
        label: 'Document',
        align: 'left',
        field: 'document',
        sortable: true,
      },
      {
        name: 'role',
        label: 'Role',
        align: 'left',
        field: 'role',
        sortable: true,
      },
      {
        name: 'sales_count',
        label: 'Sales Count',
        align: 'left',
        field: 'sales_count',
        sortable: true,
      },
      {
        name: 'delivery_addresses',
        label: 'Delivery Addresses',
        align: 'left',
        field: 'delivery_addresses',
        sortable: true,
      },
    ]
const router = useRouter();
const redirect = () => router.push({name: 'navigate'});

onBeforeMount(()=> userStore.fetchClients())

</script>