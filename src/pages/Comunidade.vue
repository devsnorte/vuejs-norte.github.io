<template>
  <q-page class="flex column content">
    <h1 class="text-h1 title">Comunidade</h1>
    <p>
      Nossa comunidade surgiu junto com a popularização do Vue.js. Decidimos buscar outros
      desenvolvedores não só desse framework, mas qualquer um que quisesse estimular a comunidade
      de TI da nossa região a crescer.
    </p>
    <p>
      Hoje possuímos um
      <a href="https://www.meetup.com/pt-BR/Vue-js-Norte/">meetup <q-icon name="launch" size="0.8em"/></a>,
      onde temos encontros para discutir sobre todo tipo de assunto.
    </p>
    <p>
      <a href="https://www.meetup.com/pt-BR/Vue-js-Norte/">
        Meetup Vue.js Norte
        <q-icon name="launch" size="0.8em"/>
      </a>
    </p>
    <div class="row">
      <div class="col-xs-12 col-lg-6 q-pa-sm">
        <q-img src="https://secure.meetupstatic.com/photos/event/9/b/5/2/600_476199762.jpeg"/>
      </div>
      <div class="col-xs-12 col-lg-6 q-pa-sm">
        <q-img src="https://secure.meetupstatic.com/photos/event/9/b/6/4/600_476199780.jpeg"/>
      </div>
      <div class="col-xs-12 col-lg-6 q-pa-sm">
        <q-img src="https://secure.meetupstatic.com/photos/event/9/c/b/8/600_473500120.jpeg"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { QImg } from 'quasar'
export default {
  name: 'PageComunidade',
  components: { QImg }
}
</script>

<style>
</style>
