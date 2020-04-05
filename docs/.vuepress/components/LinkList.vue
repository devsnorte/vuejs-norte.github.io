<template>
  <div class="main-wrapper">
    <div class="container">
      <header class="text-center">
        <img
          class="profile-pic img-fluid"
          src="https://raw.githubusercontent.com/vuejs-norte/artworks/master/png/logo-256x256.png"
          alt
        />
        <ul class="list-inline">
          <li v-for="conta in socialAccounts" :key="conta.id" class="list-inline-item">
            <a :href="conta.url" target="_blank">
              <i :class="['fa fa-2x', 'fa-' + conta.company]" style="color: #43a16f;"></i>
            </a>
          </li>
        </ul>
      </header>
      <btn-lg v-for="link in links" :key="link.id" :href="link.url" target="_blank">
        {{link.title}}
      </btn-lg>
    </div>
  </div>
</template>

<script>
import BtnLg from "./Button/BtnLg";

export default {
  name: 'LinkList',
  components: {
    BtnLg
  },
  data() {
    return {
      socialAccounts: [
        {
          company: "github",
          url: "https://github.com/vuejs-norte"
        },
        {
          company: "twitter",
          url: "https://twitter.com/vuejsnorte"
        },
        {
          company: "instagram",
          url: "https://instagram.com/vuejsnorte"
        },
        {
          company: "facebook",
          url: "https://facebook.com/vuejsnorte"
        },
        {
          company: "telegram",
          url: "https://t.me/vuejsnorte"
        }
      ],
      links: [
        {
          title: "Canal Youtube VueJSNorte",
          url: "https://youtube.com/VueJSNorte"
        },
        {
          title: "Plataforma Meetup VueJSNorte",
          url: "https://www.meetup.com/pt-BR/Vue-js-Norte/"
        },
        {
          title: "Fórum VueJS Norte",
          url: "https://perguntas.vuejsnorte.com.br/"
        },
        {
          title: "Discord VueJS Norte",
          url: "https://discord.gg/TRBVGRj"
        },
        {
          title: "Site Oficial",
          url: "https://vuejsnorte.com.br/"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  .container
    max-width 700px !important
    padding-right 15px
    padding-left 15px
    margin-right auto
    margin-left auto

  @media (min-width: 576px)
    .container
      max-width 540px

  @media (min-width: 768px)
    .container
      max-width 720px

  @media (min-width: 992px)
    .container
      max-width 960px

  @media (min-width: 1200px)
    .container
      max-width 1140px

  .text-center
    text-align center
    padding-bottom 1.5rem !important

  .profile-pic
    height 120px
  
  .img-fluid
    max-width 100%
    margin-bottom 1.5rem !important

  .list-inline
    padding-left 0;
    list-style none

  .list-inline-item
    display inline-block

  .list-inline-item:not(:last-child)
    margin-right 0.5rem
</style>