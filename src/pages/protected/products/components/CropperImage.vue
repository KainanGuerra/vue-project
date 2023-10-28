<template>
    <div>

        <cropper
            class="cropper-instance q-my-md"
            :src="imageSource"
            :stencil-props="{
                aspectRatio: 10/12
            }"
        />
        <q-btn 
            label="RECORTAR"
            @click="$emit('onCrop')"
        />    
    </div>
</template>
<script lang="ts" setup>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { ref, watch } from 'vue'
defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  imageSize: {
    type: Object,
  },
})
const imageRef = ref('parentImageRef')
const emit = defineEmits(['onImageChange', 'onCrop'])
watch(imageRef, () => {
  emit('onImageChange', imageRef.value)
})
</script>