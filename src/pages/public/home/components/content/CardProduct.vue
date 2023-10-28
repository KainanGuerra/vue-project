<template>
    <section class="defineCardProduct row column">
        <div class="row items-center" style="height: 290px;">
            <img style="width: 100%;" v-if="props.productInfo?.photo" :src="props.productInfo.photo" alt="">
            <img v-else src="@/assets/images/tenis.ex.jpg">
        </div>
        <span class="promotionPrice">R$ {{ promotionPrice }}</span >
        <span class="productPrice">R$ {{ productPriceFormatted }}</span >
        <div>
            <p class="productName">{{ props.productInfo?.name }}</p>
        </div>
        <div class="sectionBtnBuyOrAdd row column full-width">
            <button @click="redirect('product', props.productInfo?.id)">COMPRAR</button>
            <button @click="addToShopCar(props.productInfo?.id)">ADICIONAR AO CARRINHO</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { NumberFormatter } from '../../../../../shared/utils/helpers/number-functions.helper';
type TProductsInfoToCard = {
    productInfo?: {
        id?: number;
        name?: string;
        value?: number;
        photo?: string;
    }
}

const props = defineProps<TProductsInfoToCard>();
const promotionPrice = computed(()=> NumberFormatter.roundDecimal(props.productInfo?.value ? props.productInfo.value * 1.17 : 0));
const productPriceFormatted = computed(()=> NumberFormatter.formatToDecimal(props.productInfo?.value));
const router = useRouter();
const redirect = (page: string, id: any)=>{    
    try{
        router.push({name: page, params: { id } })
    }catch(err){
        console.error(err)
    }
} 
const addToShopCar = (id:any)=>{
    console.log(id);
}
</script>

<style scoped>

.defineCardProduct{
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 4px solid white;
    text-align: left;
    font-weight: 500;
}
.defineCardProduct img{
    width: 100%;
    border-radius: 10px;
}
.promotionPrice{
    text-decoration: line-through;
    font-size: x-large;
}
.productPrice{
    font-size: 40px;
}
.productName{
    max-width: 300px;
    white-space: normal;
    word-wrap: break-word;
    font-size: xx-large;
}
.sectionBtnBuyOrAdd{
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 10px
}
.sectionBtnBuyOrAdd button{
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10pt;
    background: white;
    cursor: pointer;
    color: black;
    padding: 10px 0px 10px 0px;
    height: 45px;
    font-weight: bold;
    font-size: large;
    transition: 0.2s;
}
.sectionBtnBuyOrAdd button:hover{
    transform: scale(1.03);
}
</style>