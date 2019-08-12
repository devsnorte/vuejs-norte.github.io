<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated>
      <q-toolbar >
        <q-btn
          class="lt-md"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="gt-sm text-weight-bold">
          Vue.js Norte
        </q-toolbar-title>

        <q-space />
        <div class="gt-sm">
          <template v-for="(menu, key) in menus">
            <q-btn flat dense v-if="menu.route" :key="key" :to="menu.route" class="q-mr-md" size="lg">
              {{menu.label}}
            </q-btn>
            <q-btn flat dense v-if="menu.url" :key="key" @click="openURL(menu.url)" class="q-mr-md" size="lg">
              {{menu.label}}
              <q-icon name="launch" size="0.8em"/>
            </q-btn>
          </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      elevated
      side="left"
      behavior="mobile"
      content-class="bg-grey-2 lt-sm"
    >
      <q-list>
        <template v-for="(menu, key) in menus">
          <q-item v-if="menu.url" :key="key" clickable tag="a" target="_blank" :href="menu.url">
            <q-item-section>
              <q-item-label>
                <span class="text-h6">{{ menu.label }}</span><q-icon name="launch" /></q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-if="menu.route" :key="key" clickable tag="a" :to="menu.route">
            <q-item-section>
              <q-item-label>
                <span class="text-h6">{{ menu.label }}</span></q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QSpace, openURL } from 'quasar'

export default {
  name: 'MyLayout',
  components: { QSpace },
  data () {
    return {
      leftDrawerOpen: !this.$q.platform.is.desktop,
      menus: [
        { label: 'Início', route: '/' },
        { label: 'Comunidade', route: '/comunidade' },
        { label: 'Links', route: '/links' },
        { label: 'Github', url: 'https://github.com/vuejs-norte/vuejs-norte.github.io' }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
