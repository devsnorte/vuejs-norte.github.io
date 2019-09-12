<template>
  <q-layout view="hHh Lpr fFf">
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list>
          <q-item-label header>Navegação</q-item-label>
          <template v-for="(menu, key) in menus">
            <q-item v-if="'url' in menu" :key="key" clickable tag="a" target="_blank" :href="menu.url">
              <q-item-section>
                <q-item-label>
                  <span>{{ menu.label }}&nbsp;</span>
                  <q-icon name="launch" />
                </q-item-label>
                <q-item-label v-if="menu.targetDate">
                  <timer :target="new Date(menu.targetDate)" show-date countdown/>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-else-if="menu.route" :key="key" clickable tag="a" :to="menu.route">
              <q-item-section>
                <q-item-label>
                  <span>{{ menu.label }}</span>
                </q-item-label>
                <q-item-label v-if="menu.targetDate">
                  <timer :target="new Date(menu.targetDate)" show-date countdown/>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header v-else :key="key">{{ menu.label }}</q-item-label>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
    <q-page-sticky class="lt-md" position="top-left" :offset="[15, 15]">
      <q-btn flat primary fab-mini icon="menu" @click="toggleDrawer"/>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { QScrollArea, QList, QItem, QItemLabel, QItemSection, QPageSticky } from 'quasar'
import { menus } from '../router'
import Timer from 'components/Timer'
import UtilsMixin from '../components/UtilsMixin.vue'

export default {
  name: 'SidebarLayout',
  components: { QScrollArea, QList, QItem, QItemLabel, QItemSection, QPageSticky, Timer },
  mixins: [UtilsMixin],
  data () {
    return {
      extraLinks: [],
      leftDrawer: true
    }
  },
  computed: {
    menus () {
      return [...menus, ...this.extraLinks]
    }
  },
  methods: {
    toggleDrawer () {
      this.leftDrawer = !this.leftDrawer
    },
    async loadLinks () {
      const collection = await this.$firebase.firestore.collection('links')
      const snapshot = await collection.get()
      const data = snapshot.docs.map(doc => ({ ...doc.data(), ref: doc }))
      this.extraLinks = data.slice(0).sort(this.sortBy('idx'))
    }
  },
  mounted () {
    this.loadLinks()
  }
}
</script>
