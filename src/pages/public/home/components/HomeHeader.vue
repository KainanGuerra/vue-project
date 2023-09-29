<template>
  <nav class="home-header">
    <div>
      <img style="width: 120px" src="../../../../assets/favicon.ico" alt="" />
      <span>SUPPLY</span>
    </div>
    <div>
      <ul class="section-links">
        <li>
          <input value="SNEAKERS" type="btn" @click="router.push({ name: 'list' })" />
        </li>
        <li>
          <input value="HEADGEARS" type="btn" />
        </li>
        <li>
          <input value="ACESSÓRIOS" type="btn" />
        </li>
      </ul>
    </div>
    <div>
      <input type="text" />
      <img class="icon" src="../../../../assets/icons/search.png" alt="" />
    </div>
    <img class="icon" src="../../../../assets/icons/profile.png" alt="" />
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style>
ul {
  list-style-type: none;
}
nav div {
  display: flex;
  align-items: center;
}
li input {
  padding: 5px;
  text-align: center;
  width: 150px;
  font-size: 18px;
}
.home-header {
  display: flex;
  width: 960px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 2px solid red;
}
.section-links {
  border: 2px solid green;
  display: flex;
  gap: 10px;
}
.icon {
  width: 50px;
  height: 50px;
}
</style>
