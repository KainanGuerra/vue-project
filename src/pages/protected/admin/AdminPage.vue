<template>
  <main class="cropper-component">
    <section v-if="!croppedImage" class="cropper-section">
      <input
        id="file"
        type="file"
        class="cropper-input"
        accept="image/png, image/jpeg, image/jpg"
        @change="onFileChange"
      >
      <label for="file">
        <div class="cropper-div">ESCOLHER FOTO</div>
      </label>
      <span class="text-center cropper-alt">
        Formatos de arquivos aceitos: png, jpg ou jpeg. <br> Tamanho máximo suportado: 5mb.
      </span>
      <cropper
        ref="cropper"
        class="cropper"
        :src="uploadedImage"
        :stencil-component="CircleStencil"
      />
      <div class="sectionForButtons">
        <button class="btn-go-back" @click="returnToSettingsPage">CANCELAR</button>
        <button class="form_confirm-btn" :disabled="!selectedFile" @click="crop">ALTERAR</button>
      </div>
    </section>
    <CircleStencil />
    <section v-if="croppedImage" class="croppedSection">
      <div style="text-align: center; margin-bottom: 20px;">
        <img :src="croppedImage" class="image-preview">
      </div>
      <div class="sectionForButtons">
        <button class="btn-go-back" @click="croppedImage = null">VOLTAR</button>
        <button class="form_confirm-btn" :disabled="isSubmitting" @click="onSubmit">SALVAR</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Cropper, CircleStencil } from 'vue-advanced-cropper';

const router = useRouter();

const isSubmitting = ref(false);
const croppedImage = ref(null);
const uploadedImage = ref(null);
const selectedFile = ref(null);

const onFileChange = (event: any) => {
  const input = event.target;
  selectedFile.value = { ...input.files };
  console.log(selectedFile)
  // if (!selectedFile.value[0].type.startsWith('image/')) {
  //   selectedFile.value = null;
  //   // Handle error
  //   return;
  // }

  // if (selectedFile.value[0].size > 5242880) {
  //   selectedFile.value = null;
  //   // Handle error
  //   return;
  // }

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      uploadedImage.value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

const crop = () => {
  // const { coordinates, canvas } = refs.cropper.getResult();
  // Your crop logic here
};

const returnToSettingsPage = () => {
  router.push({ name: 'settings' });
};

const onSubmit = async () => {
  try {
    isSubmitting.value = true;
    // Your submit logic here

    // Assuming you have async actions in your user store
    // await userStore.uploadUserImage(compressedImage.value);
    // await userStore.getUserInfo(userStore.userInfo.id);
    
    // Handle success
    isSubmitting.value = false;
    setTimeout(() => {
      router.push({ name: 'settings' });
    }, 1000);
  } catch (err) {
    // Handle error
  }
};

</script>

<style scoped>
.cropper-component{
  display: flex;
  justify-content: center;
  align-items: center;
}
.cropper-section{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cropper {
  height: 300px;
  width: 300px;
  background: #DDD;
  margin-bottom: 16px;
}

.image-preview {
  display: inline-block;
  border-radius: 50%;
  height: 386px;
  width: 386px;
}

button {
  display: block;
}
.form_confirm-btn{
  color: white;
  background-color: #0098A4;
  border: none;
  border-radius: 5px;
  width: 110px;
  height: 40px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
.btn-go-back{
  cursor: pointer;
  color: #0098A4;
  background-color: white;
  border: 2px solid #0098A4;
  border-radius: 5pt;
  width: 110px;
  height: 40px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
}
.cropper-input{
  display: none;
}
.cropper-div{
  cursor: pointer;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: #0C4873;
  border: none;
  border-radius: 5pt;
  width: 150px;
  height: 40px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 5pt;
}
.sectionForButtons{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.croppedSection{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.cropper-alt{
  font-size: 12px;
  margin: 10px 0px 10px 0px;
  color: grey;
}
</style>
