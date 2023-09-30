<template>
  <HomeHeader />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HomeHeader from './components/HomeHeader.vue'

const state = reactive({
  outro: ''
})


</script>
