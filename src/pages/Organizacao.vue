<template>
  <q-page class="flex column content">
    <h1 class="text-h1 title">Organização</h1>
     <p>
      Atualmente a organização do meetup conta com {{ organizadores.length }} membros. Não temos líderes definidos
      pois acreditamos que as diferentes visões de cada membro organizador pode agregar na construção da comunidade.
    </p>
    <card-organizacao :organizadores="organizadores"></card-organizacao>
  </q-page>
</template>

<script>
import CardOrganizacao from 'components/CardOrganizacao'
export default {
  name: 'Organizacao',
  components: {
    CardOrganizacao
  },
  data () {
    return {
      organizadores: [{
        img: 'statics/organizacao/patrick.png',
        nome: 'Patrick Monteiro',
        github: 'https://github.com/patrickmonteiro',
        linkedin: 'https://www.linkedin.com/in/engpatrickmonteiro/'
      },
      {
        img: 'statics/organizacao/iago.jpeg',
        nome: 'Iago Cavalcante',
        github: 'https://github.com/iagocavalcante',
        linkedin: 'https://www.linkedin.com/in/iago-a-cavalcante/'
      },
      {
        img: 'statics/organizacao/romulo.jpg',
        nome: 'Romulo Gabriel',
        github: 'https://github.com/iagocavalcante',
        linkedin: 'https://github.com/Yemolai'
      },
      {
        img: 'statics/organizacao/renato.jpg',
        nome: 'Renato Siqueira',
        github: 'https://github.com/RenatoSiqueira',
        linkedin: 'https://www.linkedin.com/in/renatosiqueira/'
      },
      {
        img: 'statics/organizacao/thayana.jpg',
        nome: 'Thayana Mamoré',
        github: 'https://github.com/thauska',
        linkedin: 'https://www.linkedin.com/in/thayanacmamore/'
      },
      {
        img: 'statics/organizacao/bianca.jpg',
        nome: 'Bianca Silva',
        github: 'https://github.com/biancassilva',
        linkedin: 'https://www.linkedin.com/in/biancassilva/'
      },
      {
        img: 'statics/organizacao/tiago.jpg',
        nome: 'Tiago  Danin',
        github: 'https://github.com/TiagoDanin',
        linkedin: 'https://www.linkedin.com/in/tiagodanin/'
      },
      {
        img: 'statics/organizacao/uriel.jpg',
        nome: 'Uriel Campos',
        github: 'https://github.com/urielfcampos',
        linkedin: 'https://www.linkedin.com/in/uriel-ferreira-campos-66355514a/'
      },
      {
        img: 'statics/organizacao/amir.jpg',
        nome: 'Amir Zahlan',
        github: 'https://github.com/amimaro',
        linkedin: 'https://www.linkedin.com/in/amir-zahlan-2143806b/'
      },
      {
        img: 'statics/organizacao/daniel.jpg',
        nome: 'Daniel Pinon',
        github: 'https://github.com/iagocavalcante',
        linkedin: 'https://www.linkedin.com/in/daniel-pinon-784495150/'
      },
      {
        img: 'statics/organizacao/joao.jpg',
        nome: 'João Ferreira',
        github: 'https://github.com/lubien',
        linkedin: ''
      }]
    }
  }
}
</script>
