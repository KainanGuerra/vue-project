<template>
    <q-layout class="row column items-center text-white q-gutter-y-md q-pa-lg">
        <h2>PaymentPage</h2> 
        <img src="../../../assets/images/qrcode-pix.png" alt="">
        <div class="row column items-center">
            <label>Purely Illustrative Image</label>
            <label>Do not expect that this is a real website </label>
        </div>
        <q-btn color="white" class="text-black text-weight-bold" @click="redirect" label="VOLTAR"></q-btn>
    </q-layout>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirect = () => router.push({name: 'home'})
</script>