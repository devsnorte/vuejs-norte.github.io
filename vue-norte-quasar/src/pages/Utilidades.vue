<template>
  <q-page padding>
    <q-markdown :src="markdown" />
  </q-page>
</template>

<script>
import utilidades from 'assets/mds/UTILIDADES.md'
export default {
  name: 'PageUtilidades',
  data () {
    return {
      markdown: utilidades
    }
  }
}
</script>

<style>
tr:nth-child(2n+1){
  background-color: rgb(247, 255, 247) !important;
}
tr:nth-child(2n+0){
  background-color: rgba(188, 203, 197, 0.495);
}
</style>
