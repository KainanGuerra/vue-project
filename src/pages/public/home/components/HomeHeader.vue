<template>
  <header class="containerHeader">
    <img class="imgLogo" src="../../../../img/logo4.jpg" alt="">
    <ul class="containerList">
      <li><a class="bbutton" href="#">Sobre</a></li>
      <li><a class="bbutton" href="#">Contato</a></li>
      <li><a class="bbutton" href="#">Fotos</a></li>
    </ul>
    <form>
  <input name="name" autocomplete="off" required />
  <label for="name">
    <span>Pesquisar</span>
  </label>
</form>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style scoped>

.imgLogo{
  border-radius: 10px;
}
.containerHeader{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0e0e0e;
  color: white;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  min-height: 100px;
  flex-wrap: wrap;
}

input{
  height: 30px;
}

li {
  list-style-type: none;
}

a{
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  width: 100px;
  background-color:#25252554;
  height: 50px;
  border-radius: 10px;
  padding: 0.75rem 1rem 0rem 1rem;
}

a:hover{
  background-color: white;
  color: #151515;
}

.containerList{
  display: flex;
  gap: 1rem;
  
}

form {
  overflow: hidden;
  position: relative;
}

/*Pesquisar*/
input {
  color: #fff;
  font-size: 1.15rem;
  width: 250px;
  padding: 1rem;
  background-color: #4f4f4f;
  border: none;
  border-radius: 4px;
}

label {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

span {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

label::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #e08713;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

input:focus + label span,
input:valid + label span {
  transform: translateY(-150%);
  font-size: 14px;
  bottom: 10px;
  color: #e08713;
}

input:focus + label::after,
input:valid + label::after {
  transform: translateX(0%);
}

/*button*/
button {
  border-radius: 4px;
  background-color: #5ca1e1;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.842);
}

.bbutton{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.bbutton:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

.bbutton:hover{
  padding-right: 24px;
  padding-left:8px;
}

.bbutton:hover:after {
  opacity: 1;
  right: 10px;
}

</style>
