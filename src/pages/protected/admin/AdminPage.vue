<template>
  <main class="defineAdminPage">
      <h2>
        Admin Page
      </h2>
      <router-view />
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.defineAdminPage{
  display: flex;
  padding: 50px 0px;
  height: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>
