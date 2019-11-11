<template>
  <q-page class="flex column content">
    <h1 class="text-h1 title">Comunidade</h1>
    <p>
      A comunidade Vuejs Norte surgiu com a popularização do framework Vuejs. Sentimos falta de encontros sobre front-end na região,
      então decidimos iniciar os encontros conhecidos como "meetups" para estimular a comunidade, apresentar novas tecnologias e principalmente
      manter o network entre os participantes.
    </p>
    <p>
       Outro objetivo foi aproximar as empresas da comunidade em geral, por isso sempre temos convidados que representam as empresas da região falando
      um pouco sobre sua <i>stack</i> de desenvolvimento, cultura e etc.
    </p>
    <p>
      Inscreva-se na nossa plataforma oficial através do link
      <a href="https://www.meetup.com/pt-BR/Vue-js-Norte/">
        Meetup Vue.js Norte
        <q-icon name="launch" size="0.8em"/>
      </a>
    </p>
    <div class="row">
      <div class="col-xs-6 col-lg-6 q-pa-sm">
        <q-img src="statics/comunidade/comunidade1.jpeg" :ratio="16/9"/>
      </div>
      <div class="col-xs-6 col-lg-6 q-pa-sm">
        <q-img src="statics/comunidade/comunidade2.jpeg" :ratio="16/9"/>
      </div>
      <div class="col-xs-6 col-lg-6 q-pa-sm">
        <q-img src="statics/comunidade/comunidade3.jpeg" :ratio="16/9"/>
      </div>
      <div class="col-xs-6 col-lg-6 q-pa-sm">
        <q-img src="statics/comunidade/comunidade4.jpeg" :ratio="16/9"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageComunidade'
}
</script>

<style>
</style>
