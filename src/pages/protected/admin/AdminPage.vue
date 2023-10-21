<template>
  <main class="cropper-component">
    <section class="cropper-section">
      Admin Page
    </section>
  </main>
</template>

<script setup lang="ts">


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
