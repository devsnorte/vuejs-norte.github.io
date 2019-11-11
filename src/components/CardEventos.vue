<template>
  <div class="row q-col-gutter-md">
    <div class="col-xs-6 col-sm-4 col-md-6 q-mb-md" v-for="(membro, index) in organizadores" :key="index">
      <q-card class="my-card">
        <q-img :src="membro.img" :ratio="16/9" />
        <div class="text-h6 text-center">{{ membro.nome }}</div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    organizadores: {
      type: Array,
      required: true
    }
  }
}
</script>
