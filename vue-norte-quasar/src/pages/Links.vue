<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <img
          alt="Quasar logo"
          src="logo-512x512.png"
          style="width: 150px; height: 150px"
        >
      </div>
      <div class="col-12 text-center">
        <q-btn
          v-for="(item, index) in social"
          :key="index"
          flat
          round
          size="lg"
          color="secondary"
          outline
          type="a"
          target="_blank"
          :icon="item.icon"
          :href="item.link"
        />
      </div>
    </div>
    <div class="row justify-center q-mt-lg text-center">
      <div class="col-md-4 col-sm-10 col-xs-12 q-gutter-y-lg">
        <q-btn
          v-for="(item, index) in others"
          :key="index"
          color="secondary"
          outline
          rounded
          class="full-width"
          type="a"
          target="_blank"
          :label="item.label"
          :icon="item.icon"
          :href="item.link"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLinks',
  data () {
    return {
      social: [
        { icon: 'mdi-github', link: 'https://github.com/vuejs-norte' },
        { icon: 'mdi-twitter', link: 'https://twitter.com/vuejsnorte' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/vuejsnorte/' },
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/vuejsnorte/' },
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/vuejsnorte' },
        { icon: 'mdi-telegram', link: 'https://t.me/vuejsnorte' }
      ],
      others: [
        { icon: 'mdi-youtube', link: 'https://www.youtube.com/VueJSNorte', label: 'Canal Youtube Vue.js Norte' },
        { icon: 'mdi-account-multiple', link: 'https://www.meetup.com/pt-BR/Vue-js-Norte/', label: 'Plataforma Meetup Vue.js Norte' },
        { icon: 'mdi-discord', link: 'https://discord.com/invite/wdVDzkUh4x', label: 'Discord' }
      ]
    }
  }
}
</script>
