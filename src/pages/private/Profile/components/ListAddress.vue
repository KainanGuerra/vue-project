<template>
    <q-page>
      <q-page-container>
        <q-card>
          <q-card-section>
            <h1 class="q-mb-md">User Delivery Address</h1>
            <q-item v-for="(prop, index) in props" :key="index">
              <q-item-section>
                <q-item-label>{{ prop }}:</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-page-container>
    </q-page>
  </template>
  
<script setup lang="ts">
import { TAddress } from '@/shared/types/user/address-definition-type'
const props = defineProps<{addresses: TAddress[]}>();

// const addAddress = () => {
//   // addresses.value.push('New Address');
// };
// const excludeAddress = (index: number) => {
//   // addresses.value.splice(index, 1);
// };
</script>