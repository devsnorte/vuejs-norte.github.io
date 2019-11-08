<template>
  <div class="row q-col-gutter-md">
    <div class="col-4" v-for="(membro, index) in organizadores" :key="index">
      <q-card class="my-card">
        <q-img :src="membro.img" :ratio="1" />
        <div class="text-h6 text-center">{{ membro.nome }}</div>
        <q-card-actions align="around">
          <q-btn flat round icon="fab fa-github" type="a" :href="membro.github" target="_blank" />
          <q-btn flat round icon="fab fa-linkedin-in" type="a" :href="membro.linkedin" target="_blank" />
        </q-card-actions>
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
