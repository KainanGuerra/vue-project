<template>
    <main class="defineAddProducts">
        <h3>Add Products</h3>
        <q-form class="q-my-md">
            <section class="defineBoxes">
            <div class="leftBox">
                <q-input
                    v-model="form.productName"
                    bg-color="white"
                    class="text-h5 q-mb-md"
                    color="black"
                    outlined
                    label="Nome" 
                />
                
                 <q-select
                        v-model="form.productColor"
                        color="black"
                        bg-color="white"
                        outlined
                        label="Cor do Produto"
                        placeholder="Selecione a cor do produto"
                        :options="colorOptions"
                    > 
                    <template #append>
                        <div v-if="form.productColor.value" class="color-square" :style="{ backgroundColor: form.productColor.value }"></div>
                    </template>
                    </q-select>
                <q-slider
                    v-model="form.productValue"
                    color="black"
                    :min="0"
                    :max="1000"
                    :step="10"
                />
                 <label 
                        class="text-h5"
                    for="rangeInput">Valor: R$: {{ form.productValue }}</label>

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
                <section v-if="!croppedImage" class="row items-center column">
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

                    <cropper
                        ref="cropperComponentRef"
                        class="cropper-instance q-my-md"
                        :src="form.selectedFile"
                        :stencil-props="{
                            aspectRatio: 12/12
                        }"
                    />
                    <q-btn 
                        label="RECORTAR"
                        class="text-weight-bold"
                        @click="crop"
                    />           
                </section>
                <section class="row column" v-if="croppedImage">
                    <img style="width: 250px;height: 250px;" :src="croppedImage">
                    <q-btn 
                        class="q-mt-md text-weight-bold"
                        label="VOLTAR"
                        @click="croppedImage = ''"/>
                </section>
            </section>
        </section>
            <div style="display: flex; flex-direction: column; margin-top: 20px;">
                <q-btn color="white" class="text-black text-weight-bold" @click="submit" label="CRIAR PRODUTO" :disable="isLoading" />
                <q-btn color="black" class="text-weight-bold" @click="redirect" label="VOLTAR" />
            </div>
        </q-form>
    </main>
</template>

<script lang="ts" setup>
import { ESneakersBrands } from '@/shared/enums/products-brands.enum';
import { EProductsTypes } from '@/shared/enums/produtcs-types.enum';
import { TCreateProduct } from '@/shared/types/products/create-product-type';
import { defineProductsStore } from '@/stores/products.store';
import { defineUserStore } from '@/stores/user.store';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { base64ToFile } from '@/shared/utils/helpers/base64-converter.helper';
import { useQuasar } from 'quasar';
const productsStore = defineProductsStore();
const userStore = defineUserStore();

type TProductColor = {
    label: string,
    value: string,
}
const $q = useQuasar();
const isLoading = ref(false);
const cropperComponentRef = ref<typeof Cropper | null>(null);
const croppedImage = ref('');
const crop = async () => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { canvas } = cropperComponentRef?.value?.getResult();
    if (canvas) {
        croppedImage.value = canvas.toDataURL();
        const fileConverted = base64ToFile(croppedImage.value, 'file');
        form.value.imageToBeSent = fileConverted;
    }
}

const form = ref({
    productName: '',
    productValue: 0,
    sizeType: '',
    productSize: 0,
    productType: '',
    productBrand: '',
    productColor: {
        label: 'Selecione uma cor:',
        value: '' ,
    } as TProductColor,
    selectedFile: '' as any,
    imageToBeSent: '' as any,
    croppedImage: ''
})

const colorOptions = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Yellow',
    value: 'yellow',
  },
  {
    label: 'Black',
    value: 'black',
  },
  {
    label: 'White',
    value: 'white',
  },
];

const handleFileChange = async (event: any) =>{
    const inputElement = await event.target;
    const file = inputElement.files[0];
    form.value.imageToBeSent = file;
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
        isLoading.value = true;
        const body: TCreateProduct = {
            name: form.value.productName,
            value: +form.value.productValue,
            type: form.value.productType as EProductsTypes,
            brand: form.value.productBrand as ESneakersBrands,
            color: form.value.productColor.value,
            size: form.value.productSize.toString(),
        }
        const token = userStore.token;
        const response = await productsStore.createProduct(body, token);
        const productId = response.id;
        await productsStore.uploadImage(productId, form.value.imageToBeSent, token);
        $q.notify({color: 'positive', message: 'Product has been created successfully'});
        return redirect(); 
    }catch(err: any){
        console.error(err);
        $q.notify({color: 'negative', message: 'An Error Has Been Occurred', caption: err.message});
    }finally{
        isLoading.value = false;
    }
}
const router = useRouter();
const redirect = () => router.push({name: 'navigate'});

</script>
<style scoped>
.defineAddProducts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.color-square {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: inline-block;
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
