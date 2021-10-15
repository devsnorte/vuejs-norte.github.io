<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          color="primary"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="text-black text-bold">
          <q-img src="logo-60x60.png" style="height: 32px; max-width: 32px" />
          Vue.js Norte
        </q-toolbar-title>

        <div class="text-black gt-xs">
          <q-tabs
            class="bg-white text-black"
          >
            <q-route-tab
              v-for="(item, index) in essentialLinks"
              :key="index"
              exact
              :to="item.route"
              :label="item.title"
            />
            <!-- <q-route-tab exact to="/comunidade" label="Comunidade" />
            <q-route-tab exact to="/utilidades" label="Utilidades" />
            <q-route-tab exact to="/links" label="Links" /> -->
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="lt-sm">
      <q-tabs
        align="justify"
        dense
        no-caps
        indicator-color="white"
        class="bg-white text-grey-7"
        active-color="primary"
      >
        <q-route-tab
          v-for="(tab, index) in essentialLinks"
          :key="index"
          dense
          :icon="tab.icon"
          :label="tab.title"
          content-class="text-weight-thin"
          :to="tab.route"
        />
      </q-tabs>
    </q-footer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'INÍCIO',
    icon: 'mdi-home',
    route: '/',
    bold: true
  },
  {
    title: 'COMUNIDADE',
    icon: 'mdi-account-multiple',
    route: '/comunidade',
    bold: true
  },
  {
    title: 'UTILIDADES',
    icon: 'mdi-bookshelf',
    route: '/utilidades',
    bold: true
  },
  {
    title: 'LINKS',
    icon: 'mdi-open-in-new',
    route: '/links',
    bold: true
  }
]

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
