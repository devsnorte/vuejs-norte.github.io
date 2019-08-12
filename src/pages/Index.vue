<template>
  <q-page class="flex flex-center column">
    <q-img class="logo" alt="Quasar logo" src="assets/logo-256x256.png" ratio="1"/>
    <h1 class="text-h1 title text-center">
      Vue.js Norte
    </h1>
    <p class="text-h6 subtitle text-center">
      Comunidade de desenvolvedores Vue.js do Norte do Brasil
    </p>
    <q-btn color="primary" class="q-mt-lg" to="/comunidade" icon-right="arrow_right_alt" size="xl">
      Comunidade
    </q-btn>
  </q-page>
</template>

<style scoped>
.logo {
  width: 50%;
  max-width: 256px;
}
</style>

<script>
import { QBtn, QImg } from 'quasar'
export default {
  name: 'PageIndex',
  components: { QBtn, QImg }
}
</script>
