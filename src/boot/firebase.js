import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDMNW8Lt6-sC96kae2GWaab69-kz8kDbT4',
  authDomain: 'vuejs-norte.firebaseapp.com',
  databaseURL: 'https://vuejs-norte.firebaseio.com',
  projectId: 'vuejs-norte',
  storageBucket: 'vuejs-norte.appspot.com',
  messagingSenderId: '686873595132',
  appId: '1:686873595132:web:86c33b8725838691'
}

export default async ({ Vue }) => {
  const app = firebase.initializeApp(FIREBASE_CONFIG)
  const auth = firebase.auth()
  const database = firebase.database()
  Vue.prototype.$firebase = { app, auth, database }
}
