import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const app = initializeApp({
    apiKey: "AIzaSyD7HNiatrCf4rhH-TZYHZ8oi3LXK8yN3NI",
    authDomain: "nuxt3-bug.firebaseapp.com",
    projectId: "nuxt3-bug",
    storageBucket: "nuxt3-bug.appspot.com",
    messagingSenderId: "357432814914",
    appId: "1:357432814914:web:0cfcffb76ece8f55576cdb"
  })
  const auth = getAuth(app)
  return {
    provide: {
      auth
    }
  }
})
