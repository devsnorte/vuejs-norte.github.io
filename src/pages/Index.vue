<template>
  <q-page class="flex flex-center column">
    <img alt="Quasar logo" src="~assets/logo-256x256.png">
    <h1 class="text-h1 title text-center">
      Vue.js Norte
    </h1>
    <p class="text-h6 subtitle text-center">
      Comunidade de desenvolvedores Vue.js do Norte do Brasil
    </p>
    <q-btn color="primary" to="/comunidade" icon-right="arrow_right_alt" size="xl">
      Comunidade
    </q-btn>
  </q-page>
</template>

<style scoped>
</style>

<script>
import { QBtn } from 'quasar'
export default {
  name: 'PageIndex',
  components: { QBtn }
}
</script>
