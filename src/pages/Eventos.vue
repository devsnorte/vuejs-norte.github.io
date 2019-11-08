<template>
  <q-page class="flex column content">
    <h1 class="text-h1 title">Eventos</h1>
     <p>
      Confira alguns eventos que já realizamos.
    </p>
    <card-eventos :organizadores="organizadores"></card-eventos>
  </q-page>
</template>

<script>
import CardEventos from 'components/CardEventos'
export default {
  name: 'Organizacao',
  components: {
    CardEventos
  },
  data () {
    return {
      organizadores: [{
        img: 'statics/eventos/meetup8.jpeg',
        nome: '8º Meetup'
      },
      {
        img: 'statics/eventos/meetup7.jpeg',
        nome: '7º Meetup'
      },
      {
        img: 'statics/eventos/meetup6.jpeg',
        nome: '6º Meetup'
      },
      {
        img: 'statics/eventos/meetup5.jpeg',
        nome: '5º Meetup'
      }]
    }
  }
}
</script>
