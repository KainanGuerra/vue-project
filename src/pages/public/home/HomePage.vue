<template>
  <HomeHeader />
  <HomeContent />
  <HomeFooter />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomeContent from './components/HomeContent.vue'
import HomeFooter from './components/HomeFooter.vue'

const state = reactive({
  outro: ''
})


</script>
