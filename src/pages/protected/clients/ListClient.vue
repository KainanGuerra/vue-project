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
                        resource: 'clients'
                    }"
                />
                <q-btn color="black" @click="redirect" label="VOLTAR" />
            </q-page>
</q-page-container>
</q-layout>
</template>

<script lang="ts" setup>

import { defineUserStore } from '@/stores/user.store';
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import ListComponent from '../products/components/ListComponent.vue';
import { date } from 'quasar';

const userStore = defineUserStore();
const data = computed(()=> userStore.clients);

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
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
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
];
const router = useRouter();

const redirect = () => router.push({name: 'navigate'});

onBeforeMount(()=> userStore.fetchClients());

</script>