<template>
  <q-table
      :rows="props.tableInfo.data"
      :columns="props.tableInfo.columns"
  >
  </q-table>
</template>

<script lang="ts" setup>

type TListProduct = {
  columns: Array<any>,
  data: Array<any>
}

const props = defineProps<{tableInfo: TListProduct}>();

</script>