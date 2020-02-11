<template>
  <q-page class="flex column content q-mb-xl">
    <h1 class="text-h1 title">Comunidade</h1>
    <p>
      A comunidade Vuejs Norte surgiu com a popularização do framework Vue.js, a vontade
      de compartilhar conhecimento e ter contato com outros profissionais da área na região.
      A falta de grupos e comunidades na região, principalmente sobre tecnologias de front-end,
      nos levou a iniciar encontros conhecidos internacionalmente como <em>"meetups"</em>
      buscando estimular o contato, a curiosidade e o interesse regional através da formação
      de uma comunidade, apresentando novas tecnologias e, principalmente, gerando
      aproximação entre os participantes, estudantes, empresários e interessados.
    </p>
    <p>
      Com o tempo surgiu também o objetivo de aproximar empresas e a comunidade. A região
      sempre foi notoriamente fraca em mão de obra especializada e empresas de software,
      portanto sempre convidamos pessoas que representem as empresas da região para falar
      um pouco sobre sua área de atuação, metodologia de desenvolvimento, cultura,
      vivência, experiências, dificuldades e conquistas no mercado da região.
    </p>
    <p>
      Sempre mantivemos nossa comunidade aberta para todo tipo de pessoa, com maior foco em
      incentivar a participação de estudantes e fornecer um ambiente saudável e seguro para
      interação entre os participantes da comunidade. Nossa comunidade não tolera nenhum tipo
      de preconceitos, os organizadores sempre estão atentos para manter o ambiente amigável
      e receptivo a todas as minorias e prontos a banir todo participante que não respeite
      seus pares e tenha qualquer tipo comportamento nocivo.
    </p>
    <p>
      A comunidade se originou com o uso do framework Vue.js, baseado em JavaScript, mas,
      apesar do foco em tecnologias web de front-end, não há restrições sobre tecnologias,
      ferramentas ou tecnologias a serem discutidas, apresentadas e destacadas nos eventos
      ou nos canais de conversação, portanto, não se limite a discutir sobre o framework,
      somos totalmente abertos à outros frameworks, tecnologias e linguagens, sempre sendos
      inclusivos, estamso de braços abertos para aprender sobre o que há de mais novo no
      mundo da tecnologia. O <em>bleeding edge</em> é assunto comum e recorrente nos chats.
    </p>
    <p>
      Inicialmente criamos um grupo de <em>Whatsapp</em> para discutirmos e comunicarmos as
      datas dos eventos, porém, devido a limitação do número de participantes permitidos em
      grupos no <em>Whatsapp</em>, tivemos que migrar para o <em>Telegram</em>, mas o grupo
      <em>legado</em> no <em>Whatsapp</em> continua ativo para que ninguém fique para trás,
      porém pedimos que os novos membros entrem no grupo do <em>Telegram</em> para ficarem
      a par das últimas novidades, comunicados, eventos e questões.
    </p>
    <p>
      Originalmente criamos uma organização na plataforma de eventos <em>Meetup</em>, porém,
      perante as útlimas alterações realizadas na plataforma sobre cobranças e valores, fomos
      forçados a migrar para outra plataforma equivalente que forneça funcionalidades
      semelhantes. Atualmente ainda mantemos a organização ativa na plataforma <em>Meetup</em>,
      porém em breve estaremos migrando para uma nova plataforma para melhor atender as
      necessidades da comunidade com o menor impacto possível nos membros e na organização.
    </p>
    <p>
      Aos novos membros e aos antigos participantes de eventos: não se acanhem, os canais de
      comunicação foram feitos para que conversas sejam viabilizadas mais facilmente. Temos
      nos grupos de <em>Whatsapp</em> e <em>Telegram</em> alguns dos nomes mais conhecidos
      na região, pessoas com muita experiẽncia em diversos segmentos e muitos anos atuando
      na área. Pergunte, converse, solucione suas dúvidas e peça dicas sem medo. Estamos
      sempre interessados em ajudar. Nenhuma pergunta é idiota ou insignificante o suficiente
      para ser ignorada. Participe, interaja e aproveite para fazer amigos e talvez até mesmo
      conseguir uma vaga de estágio ou a vaga de emprego que você sempre quis. Facilitar
      essas conexões é nosso maior objetivo. Temos os grupos de chat e o fórum para estas
      finalidades. Converse lá com a gente!
    </p>
    <p>
      Sinta-se convidado a entrar em contato através dos grupos de <em>Whatsapp</em> e
      <em>Telegram</em>:
    </p>
    <div class="links-chat-groups">
      <a class="whatsapp link" :href="groupsLinks.whatsapp" target="_blank">
        <q-icon name="img:statics/icons/icons8-whatsapp.svg" size="64px"></q-icon>
      </a>
      <a class="telegram link" :href="groupsLinks.telegram" target="_blank">
        <q-icon name="img:statics/icons/icons8-telegram-app.svg" size="64px"></q-icon>
      </a>
    </div>
    <p>
      Inscreva-se na plataforma através do link
      <a href="https://www.meetup.com/pt-BR/Vue-js-Norte/">
        Meetup Vue.js Norte
        <q-icon name="launch" size="0.8em"/>
      </a>
    </p>
    <p>
      Acesso o fórum através do link pro
      <a href="https://perguntas.vuejsnorte.com.br/">Fórum VueJs Norte</a>
    </p>
    <div class="row">
      <template v-for="(picture, k) in pictures">
        <div class="col-xs-6 col-lg-6 q-pa-sm" :key="`img-${k}`">
          <q-img class="link" :src="picture.url" :ratio="16/9" @click="() => showImage(picture)"/>
        </div>
      </template>
    </div>
    <q-dialog v-model="showingImage" auto-close maximized>
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">{{ imageToShow.description || 'Foto' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-img responsive :src="imageToShow.url" :ratio="16/9"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QIcon, QPage, QDialog, QCard, QCardSection, QSpace, ClosePopup } from 'quasar'

const pictures = [
  { url: 'statics/comunidade/comunidade1.jpeg', description: '8º Meetup Especial Hacktoberfest' },
  { url: 'statics/comunidade/comunidade2.jpeg', description: '7º Meetup' },
  { url: 'statics/comunidade/comunidade3.jpeg', description: '5º Meetup' },
  { url: 'statics/comunidade/comunidade4.jpeg', description: '1º Meetup' }
]

export default {
  name: 'PageComunidade',
  components: { QIcon, QPage, QDialog, QCard, QCardSection, QSpace },
  directives: {
    ClosePopup
  },
  data () {
    return {
      pictures,
      showingImage: false,
      imageToShow: pictures[0],
      groupsLinks: {
        whatsapp: '#',
        telegram: '#'
      }
    }
  },
  methods: {
    showImage (picture) {
      this.imageToShow = picture
      this.showingImage = true
    },
    async loadData () {
      const collection = this.$firebase.firestore
        .collection('groups')
      const snapshot = await collection.get()
      const docs = snapshot.docs
        .map(doc => ({
          ...doc.data,
          ref: doc
        }))
      const {
        whatsapp = this.groupsLinks.whatsapp,
        telegram = this.groupsLinks.telegram
      } = docs
      this.groupsLinks = {
        whatsapp,
        telegram
      }
    },
    loadMembers: async function () {
      const uri = 'https://back-api.renatoelysiqueira.now.sh/members'
      const membros = await fetch(uri)
        .then(res => res.json())
        .catch(err => {
          /* eslint-disable-next-line no-console */
          console.error(`Failed to fetch members: ${err.message}`, err)
          return []
        })
      this.members = membros
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-indent: 3em;
  text-align: justify;
  font-size: 1.1em;
  line-height: 2em;
}
.link {
  cursor: pointer;
}
.links-chat-groups {
  display: flex;
  justify-content: center;
  min-height: 1em;
  height: auto;
  margin-bottom: 1em;
  &>div {
    margin: 0.5em;
  }
}
.fullscreen-image {
  min-width: 80vw;
}
</style>
