<template>
  <q-page class="flex column content">
    <h1 class="text-h1 title">Links</h1>
    <p>
      Material de Apoio para Desenvolvedores.
    </p>
    <h2 class="title text-h2">
      📃 Blogs e Artigos
    </h2>
    <q-markup-table class="table" wrap-cells flat bordered>
      <thead>
        <tr>
        <th>Link</th>
        <th>Assunto</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item, k) in blogs" :key="`blog-${k}`">
          <td>
            <a :href="item.url"
              target="_blank"
              rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </q-markup-table>
    <h2 class="title text-h2">
      🎓 Cursos
    </h2>
    <q-markup-table class="table" wrap-cells flat bordered>
      <thead>
        <tr>
          <th>Link</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, k) in cursos" :key="`curso-${k}`">
          <td>
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </q-markup-table>
    <h2 class="title text-h2">
      🌇 Comunidades Locais
    </h2>
    <q-markup-table class="table" wrap-cells flat bordered>
      <thead>
        <tr>
          <th>Comunidade</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comu, k) in comunidades" :key="`comu-${k}`">
          <td>{{ comu.name }}</td>
          <td>
            <a
              v-for="service in Object.keys(comu.links)"
              :key="`comu-${k}-${service}`"
              :href="comu.links[service]"
              target="_blank" rel="noopener noreferrer">
              {{ service }}
            </a>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <h2 class="title text-h2">
      🎥 Vídeos Youtube
    </h2>
    <q-markup-table class="table" wrap-cells flat bordered>
      <thead>
        <tr>
          <th>Link</th>
          <th>Assunto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, k) in videos" :key="`video-${k}`">
          <td>
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
import { QMarkupTable } from 'quasar'

const blogs = [
  { description: 'Facilitando a manutenção, reuso e escala de projetos Vue.js com Domain Driven Design.', title: 'Arquitetura de projetos Vue.js com DDD', url: 'https://blog.codecasts.com.br/arquitetura-de-projetos-vue-js-com-ddd-a2bc26817793' },
  { description: 'Blog com artigos em Português', title: 'Vila do Silício', url: 'http://viladosilicio.com.br' },
  { description: 'Artigos em Português sobre Vue.js', title: 'Vue.js Brasil', url: 'https://vuejs-brasil.com.br' },
  { description: 'Artigos em Inglês sobre Vue.js', title: 'Vue.js Developers', url: 'https://vuejsdevelopers.com' },
  { description: 'Guia de estudos com lista selecionada  de artigos e vídeos sobre Javascript', title: 'Guia de estudos Javascript', url: 'https://gist.github.com/vinicius73/60027329a3855345e15b2eeaa3fd588d' }
]

const cursos = [
  { description: 'Curso de Vue na Alura', title: 'Alura - Vue.js', url: 'https://www.alura.com.br/curso-online-vue-parte1' },
  { description: 'Curso de Vue.js no Devmedia', title: 'Devmedia - Vue.js: Como criar sua primeira aplicação', url: 'https://www.devmedia.com.br/curso/curso-de-vue-js-como-criar-sua-primeira-aplicacao/2071' },
  { description: 'Curso Free de Vue.js', title: 'School of Net - Iniciando com Vue.js 2', url: 'https://www.schoolofnet.com/curso/frontend/vuejs/iniciando-com-vuejs-2-rev3/' },
  { description: 'Curso do Fernando Daciuk', title: 'Udemy - Curso Javascript Ninja', url: 'https://www.udemy.com/curso-javascript-ninja/' },
  { description: 'Curso completo de Vue.js na Udemy', title: 'Udemy - Vue JS 2 - The Complete Guide (incl. Vue Router &amp; Vuex)', url: 'https://www.udemy.com/vuejs-2-the-complete-guide/' },
  { description: 'Cursos da introdução ao avançado(Introdução é free)', title: 'Vue Mastery', url: 'https://www.vuemastery.com/courses' }
]

const comunidades = [
  { name: `Acai Valley`, links: { Twitter: 'https://twitter.com/acaivalley' } },
  {
    name: `Beljogos`,
    links: {
      Facebook: 'https://www.facebook.com/BeljogosPA/',
      Twitter: 'https://twitter.com/beljogos',
      YouTube: 'https://www.youtube.com/channel/UCa0FvmBQz0JiActsGs5r5-A'
    }
  },
  {
    name: `Django Girls Belém`,
    links: {
      Facebook: 'https://www.facebook.com/DjangoGirlsBelem/',
      Site: 'https://djangogirls.org/belem'
    }
  },
  { name: `Enactus UFPA`, links: { Facebook: 'https://www.facebook.com/EnactusUFPA/' } },
  {
    name: `freeCodeCamp Belém`,
    links: {
      Facebook: 'https://www.facebook.com/groups/free.code.camp.belem/',
      GitHub: 'https://github.com/fcc-belem',
      Site: 'https://freecodecamp.org/'
    }
  },
  {
    name: `GDG Belém`,
    links: {
      Facebook: 'https://www.facebook.com/GDGBelem/',
      Twitter: 'https://twitter.com/gdgbelem',
      Meetup: 'https://www.meetup.com/pt-BR/gdgbelemio/',
      Site: 'https://gdgbelem.github.io/home/'
    }
  },
  { name: `Java Belém`, links: { WhatsApp: 'https://chat.whatsapp.com/KTfRmaqPRqJ4Oyn5jENfnn' } },
  {
    name: `Tá Safo!`,
    links: {
      Blog: 'https://tasafo.org/',
      Facebook: 'https://www.facebook.com/tasafo.comunidade/',
      Twitter: 'https://twitter.com/tasafo',
      Slack: 'https://slack.tasafo.org'
    }
  },
  {
    name: `ParaLivre`,
    links: {
      'Site': 'https://www.paralivre.org',
      'Telegram': 'https://t.me/paralivre',
      'Twitter': 'https://twitter.com/paralivre_'
    }
  },
  {
    name: `PyD'égua`,
    links: {
      Site: 'http://pydegua.python.org.br',
      GitHub: 'https://github.com/pydegua/site'
    }
  },
  {
    name: `PyLadies Belém`,
    links: {
      Facebook: 'https://www.facebook.com/pyladiesbelem/'
    }
  },
  {
    name: `SQL Norte`,
    links: {
      Facebook: 'https://www.facebook.com/sqlnorte/'
    }
  },
  {
    name: `Rails Girls Belém`,
    links: {
      Facebook: 'https://www.facebook.com/railsgirlsbelem/',
      Twitter: 'https://twitter.com/railsgirlsbelem'
    }
  },
  {
    name: `Vue Norte`,
    links: {
      Meetup: 'https://www.meetup.com/pt-BR/Vue-js-Norte/',
      WhatsApp: 'https://chat.whatsapp.com/7gXcqLOFdYaDmO7hgeGk6I',
      Site: 'https://github.com/vuejs-norte',
      Telegram: 'https://t.me/joinchat/KjIVwE5XY11h7evjXTwU0Az'
    }
  }
]

const videos = [
  { title: 'Curso Quasar Framework - Patrick Monteiro', description: 'Curso de Introdução ao framework Quasar', url: 'https://www.youtube.com/playlist?list=PLBjvYfV_TvwJlOctQ49KiOrxrFwJGqAdr' },
  { title: 'Vuex - Fábio Vedovelli', description: 'PlayList sobre Vuex', url: 'https://www.youtube.com/watch?v=Fn6pB3sYhn4&amp;list=PLFJmwzuHdBRTN93itG0UiZpqs8ZnBSeEF' },
  { title: 'Vue.js + Vuetify + Firebase Project - DevMeetup', description: 'Playlist do Maximilian Schwarzmüller', url: 'https://www.youtube.com/watch?v=FXY1UyQfSFw&amp;list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt' },
  { title: 'The Vue Tutorial for 2018 - Learn Vue 2 in 65 Minutes', description: 'DesignCourse', url: 'https://www.youtube.com/watch?v=78tNYZUS-ps' },
  { title: 'VuePress Tutorial - Learn how to use VuePress for Documentation Site (Beginner)', description: 'DesignCourse', url: 'https://www.youtube.com/watch?v=5Kqyhu_eIcw' },
  { title: 'Vue JS 2 Tutorial', description: 'Playlist The Net Ninja com 44 aulas', url: 'https://www.youtube.com/watch?v=5LYrN_cAJoA&amp;list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa' },
  { title: 'TDD com Javascript', description: 'Playlist com vídeo aulas sobre TDD', url: 'https://www.youtube.com/watch?v=6pYUzEduLyU' }
]

export default {
  name: 'PageLinks',
  components: { QMarkupTable },
  data () {
    return { blogs, cursos, comunidades, videos }
  }
}
</script>

<style>
.table {
  max-width: 100%;
}
td {
  word-wrap: break-word;
}
h2.title {
  font-size: 2em;
}
</style>
