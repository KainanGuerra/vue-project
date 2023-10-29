<template>
    <div  class="q-py-md row column text-white full-width items-center justify-center">
        <h2>Add Address</h2>
        <q-form class="row column items-center q-gutter-md" style="width: 960;" @submit="addAddress">
            <q-input outlined color="black" v-model="city" label="City" />
            <q-input outlined color="black" v-model="country" label="Country" />
            <q-input outlined color="black" v-model="state" label="State" />
            <q-input outlined color="black" v-model="street" label="Street" />
            <q-input outlined color="black" 
            type="number"
            v-model="number" label="Number" />
            <q-input outlined color="black"
            mask="#####-###" v-model="zipCode" label="Zip Code" />
            <q-input outlined color="black" v-model="complement" label="Complement" />
            <q-input outlined color="black" v-model="nickname" label="Nickname (ex: Casa, trabalho...)" />
            <q-btn label="SALVAR" type="submit" color="white" class="text-black" />
        </q-form>
    </div>
</template>
  
<script setup lang="ts">
import { defineUserStore } from '@/stores/user.store';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const userStore = defineUserStore();
const $q = useQuasar()
const city = ref('');
const country = ref('');
const state = ref('');
const street = ref('');
const number = ref('');
const zipCode = ref('');
const complement = ref('');
const nickname = ref('');

const addAddress = async () => {
  try{
      const address = {
          city: city.value,
          country: country.value,
          state: state.value,
          street: street.value,
          number: number.value,
          zipCode: zipCode.value,
          complement: complement.value,
          nickname: nickname.value,
      };

      await userStore.addDeliveryAddress(address);
      $q.notify({color: 'positive', message: 'Delivery Address has been created successfully'})
      return 
    }catch(err: any){
        $q.notify({color: 'negative', 
        message: 'Delivery Address has been created successfully',
        caption: err.message})
        }
};




</script>