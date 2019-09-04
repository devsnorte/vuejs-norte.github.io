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

export default {
  name: 'PageLinks',
  components: { QMarkupTable },
  mounted () {
    this.loadData()
  },
  data () {
    return { blogs: [], cursos: [], comunidades: [], videos: [] }
  },
  methods: {
    async loadData () {
      this.blogs = await this.loadCollectionData('blogs')
      this.cursos = await this.loadCollectionData('cursos')
      this.comunidades = await this.loadCollectionData('comunidades')
      this.videos = await this.loadCollectionData('videos')
    },
    async loadCollectionData (name) {
      const collection = this.$firebase.firestore.collection(name)
      const snapshot = await collection.get()
      const docs = snapshot.docs.map(doc => ({ ...doc.data(), ref: doc }))
      return docs
    }
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
