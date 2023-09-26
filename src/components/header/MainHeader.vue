
<template>
    <section class="header">
        <div>
            logo
        </div>
        <div>
            <button
                @click="redirectToRoute(ERoutesNames.sneakers)">SNEAKERS
            </button>
            <button 
                @click="redirectToRoute(ERoutesNames.headgears)">HEADGEARS
            </button>
            <button
                @click="redirectToRoute(ERoutesNames.headgears)">ACESSÓRIOS
            </button>
            <input type="text" placeholder="search">
            

        </div>
    </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
enum ERoutesNames {
    sneakers = 'sneakers',
    headgears = 'headgears',
    acessorios = 'acessorios',
}
const redirectToRoute = (route: ERoutesNames) => {
    router.push({name: ERoutesNames.sneakers})
}
</script>
<style lang="css" scoped>
.header{
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    width: 100vw;
}
</style>