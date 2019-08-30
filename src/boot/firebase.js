import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBA8lwuawgssJcmauoOlms93JkWD58EiaM',
  authDomain: 'vuejsnortechatexperiment.firebaseapp.com',
  databaseURL: 'https://vuejsnortechatexperiment.firebaseio.com',
  projectId: 'vuejsnortechatexperiment',
  storageBucket: '',
  messagingSenderId: '129750093617',
  appId: '1:129750093617:web:c79406a51d5fa571'
}

export default async ({ router, Vue }) => {
  const app = firebase.initializeApp(FIREBASE_CONFIG)
  const auth = firebase.auth()
  const database = firebase.database()
  Vue.prototype.$firebase = { app, auth, database }
}
