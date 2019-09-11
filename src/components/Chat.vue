<template>
  <!-- based on https://css-tricks.com/replicating-google-hangouts-chat/ -->
  <section class="chat-popup-window">
    <header class="top-bar">
      <h1 class="text-subtitle2">Hangouts</h1>
    </header>
    <q-list>
      <q-item v-for="message in messages" :key="message.id">
        <q-item-section>
          <q-chat-message
            :sent="message.sender.id === user.id"
            :text="[message.text]"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-input v-model="textToSend" @keyup.enter="() => sendMessage()"></q-input>
    <q-btn color="primary" flat icon="send" @click="() => sendMessage()"/>
  </section>
</template>

<script>
import { QList, QItem, QItemSection, QChatMessage, QInput, QBtn } from 'quasar'
import animalNames from '../animal-names.json'
const STORAGE_KEY = 'chat:user'

const rndStr = (size, prev = '') => {
  const curr = prev + Math.random().toString(36).slice(2)
  if (curr.length < size) {
    return curr + rndStr(size - curr.length)
  }
  return curr.slice(curr.length - size)
}

export default {
  name: 'Chat',
  components: { QList, QItem, QItemSection, QChatMessage, QInput, QBtn },
  data () {
    return {
      textToSend: null,
      user: null,
      ref: null,
      messages: []
    }
  },
  mounted () {
    console.log(rndStr())
    this.loadUser()
    this.loadMessages()
  },
  methods: {
    sendMessage () {
      const text = this.textToSend
      console.log({ text })
      const timestamp = (new Date()).getTime()
      this.$firebase.database.ref('/messages').push({ text, timestamp })
        .then(result => {
          console.log({ result })
          this.textToSend = null
        })
        .catch(err => {
          console.error('failed to send message', err)
          throw new Error(err.code)
        })
    },
    async generateNewUser () {
      const colors = ['blue', 'red', 'yellow', 'brown', 'amber', 'grey', 'purple', 'pink', 'black', 'white', 'acre', 'green', 'magenta', 'cyan']
      const color = colors[Math.floor(Math.random() * colors.length)]
      const animal = animalNames[Math.floor(Math.random() * animalNames.length)]
      const name = `${color}-${animal}-${Math.floor(10 + Math.random() * 90)}`
      const id = await this.$firebase.auth.signInAnonymously()
        .then(() => this.$firebase.auth.currentUser.uid)
        .catch(err => {
          alert(`Não foi possível criar usuário: ${err.code} - ${err.message}`)
          throw new Error(err.code)
        })
      console.log({ id })
      const user = { id, name }
      this.user = user
    },
    saveUser () {
      const { user } = this
      const state = { user }
      const serialized = JSON.stringify(state)
      localStorage.setItem(STORAGE_KEY, serialized)
    },
    async loadUser () {
      const serializedSavedUser = localStorage.getItem(STORAGE_KEY)
      if (serializedSavedUser) {
        const savedUser = JSON.parse(serializedSavedUser)
        if (savedUser.user && savedUser.user.id && savedUser.user.name) {
          const { id, name } = savedUser.user
          this.user = { id, name }
        } else {
          await this.generateNewUser()
          this.saveUser()
        }
      } else {
        await this.generateNewUser()
        this.saveUser()
      }
    },
    loadMessages () {
      if (!this.textToSend || !this.textToSend.length) return
      const messagesRef = this.$firebase.database.ref('/messages')
      console.log({ messagesRef })
      this.ref = messagesRef
    }
  }
}
</script>

<style>
.top-bar {
  background: #666;
  position: relative;
  overflow: hidden;
  padding: 0 9px;
}
.top-bar::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  bottom: -100%;
  opacity: 0.25;
  background: #3eaf7c;
}
.top-bar > * {
  position: relative;
}
</style>
