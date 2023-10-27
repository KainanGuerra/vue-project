<template>
    <main class="defineAddProducts">
        <h3>Add Products</h3>
        <form>
            <section class="defineBoxes">
            <div class="leftBox">
                <q-input
                    v-model="form.productName"
                    outlined
                    label="Nome" 
                />
                <label class="label" for="rangeInput">Valor:</label>

                <input
                    type="range"
                    v-model="form.productValue"
                    min="0"
                    max="1000"
                    step="10"
                    />

                <span id="valueDisplay"> R$: {{ form.productValue }}</span>

                <label class="label">Cor do Produto:</label>
                <select v-model="form.productColor" class="select-input" placeholder="Cor do produto">
                    <option value="blank"></option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black </option>
                    <option value="white">White</option>
                </select>
                <div class="sizeSection">
                    <label class="label">Tamanho:</label>
                    <div>
                        <label>
                            <input 
                            v-model="form.sizeType" 
                            type="radio" 
                            name="productSizeType" 
                            value="number"
                            >
                            Number
                        </label>
                    <label>
                        <input 
                        v-model="form.sizeType" 
                        type="radio" 
                        name="productSizeType" 
                        value="letter">
                        Letter
                    </label>
                    <select 
                    v-if="form.sizeType === 'letter'" 
                        v-model="form.productSize" 
                        id="sizeSelect"
                        >
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                    </select>

                    <section v-if="form.sizeType === 'number'"
                    >
                        <input
                        type="range"
                        v-model="form.productSize"
                        min="30"
                        max="48"
                        step="1"
                        />
                        <br>
                        <span id="valueDisplay">Tamanho selecionado: {{ form.productSize }}</span>
                    </section>
                </div>

                </div>

                <label class="label">Tipo:</label>
                <div class="radio-options">
                    <section>
                        <input v-model="form.productType" type="radio" name="productType" :value="EProductsTypes.SNEAKER"> 
                        <label>
                            Sneaker
                        </label>
                    </section>
                    <section>
                        <input v-model="form.productType" type="radio" name="productType" :value="EProductsTypes.CAP"> 
                        <label>
                            Headgears
                        </label>
                    </section>
                    <section>
                        <input v-model="form.productType" type="radio" name="productType" :value="EProductsTypes.ACCESSORIES">
                        <label>
                            Accessórios
                        </label>


                    </section>
                </div>
                <section
                    v-if="form.productType === 'SNEAKER'"
                >
                    <label for="brandSelect" class="label">Marca</label>
                    <select v-model="form.productBrand" id="brandSelect">
                        <option value="NIKE">NIKE</option>
                        <option value="ADIDAS">ADIDAS</option>
                        <option value="ALLSTAR">ALLSTAR</option>
                        <option value="DC">DC</option>
                        <option value="FILA">FILA</option>
                    </select>
                </section>
            </div>
            <section class="cropper-section">
                <label 
                    class="inputFile" 
                    for="productImage"
                    >
                    Selecionar Foto
                </label>
                <input 
                    id="productImage" 
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    style="display: none;"
                    @change="handleFileChange" 
                >
                <section
                    style="display: flex;
                    flex-direction: column;
                    align-items: center;"
                    v-if="!form.selectedFile"
                    >
                    
                    <div class="cropper-instance"></div>
                </section>
                <img v-if="form.selectedFile" style="width: 250px;" :src="form.selectedFile">
            </section>
        </section>
            <div style="display: flex; flex-direction: column; margin-top: 20px;">
                <input class="inputFile" @click="submit" type="button" value="CRIAR PRODUTO">
                <input class="btnSubmit" type="button" @click="redirect" value="VOLTAR">
            </div>
        </form>
    </main>
</template>

<script lang="ts" setup>
import { ESneakersBrands } from '@/shared/enums/products-brands.enum';
import { EProductsTypes } from '@/shared/enums/produtcs-types.enum';
import { TCreateProduct } from '@/shared/types/products/create-product-type';
import { defineProductsStore } from '@/stores/products.store';
import { defineUserStore } from '@/stores/user.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const productsStore = defineProductsStore();
const userStore = defineUserStore();


const form = ref({
    productName: '',
    productValue: '',
    sizeType: '',
    productSize: '',
    productType: '',
    productBrand: '',
    productColor: '',
    selectedFile: '' as any,
    fileAsFile: '' as any,
})
const handleFileChange = async (event: any) =>{
    const inputElement = await event.target;
    const file = inputElement.files[0];
    form.value.fileAsFile = file;
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e: any) => {
            const fileData = e.target.result;
            form.value.selectedFile = fileData;
        };
        fileReader.readAsDataURL(file);
    }
}

const submit = async()=>{
    try{
        const body: TCreateProduct = {
            name: form.value.productName,
            value: +form.value.productValue,
            type: form.value.productType as EProductsTypes,
            brand: form.value.productBrand as ESneakersBrands,
            color: form.value.productColor,
            size: form.value.productSize,
        }
        const token = userStore.token;
        const response = await productsStore.createProduct(body, token);
        const productId = response.id;
        await productsStore.uploadImage(productId, form.value.fileAsFile, token);
        alert('Produto criado com sucesso');
        return redirect(); 
    }catch(err: any){
        alert(`Um erro aconteceu: ${err.message}`);
        console.error(err);
    }
}
const router = useRouter();
const redirect = () => router.push({name: 'admin'});

</script>
<style scoped>
.defineAddProducts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.defineBoxes{
    display: flex;
}
.inputText{
    width: 100%;
    background-color: white;
    color: black;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sizeSection{
    margin-top: 15px;
}
.radio-options{
    display: flex;
    justify-content: center;
    align-items: center;
}
.radio-options section{
    display: flex;
    align-items: start;
    justify-content: space-around;
    width: 110px;
}
.label{
    font-size: 20px;
    margin-top: 15px;
}
.leftBox{
    width: 500px;
    display: flex;
    flex-direction: column;
}
.inputFile{
  cursor: pointer;
  display: flex;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: black;
  border: none;
  border-radius: 5pt;
  width: 150px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  margin: 0px;
}
.cropper-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.btnSubmit{
    background: rgb(233, 233, 233);
    padding: 6px 15px;
    color: rgb(43, 43, 43);
    border: none;
    cursor: pointer;
    border-radius: 5pt;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
    transition: 0.15s
}

.cropper-instance{
    height: 250px;
    width: 250px;
    background: #DDD;
}
</style>
