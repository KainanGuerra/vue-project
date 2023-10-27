<template>
  <main class="defineAdminPage">
      <h1>
        Admin Page
      </h1>
      <router-view />
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.defineAdminPage{
  display: flex;
  padding: 50px 0px;
  height: auto;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>
