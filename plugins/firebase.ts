import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const { firebase } = useRuntimeConfig()
  const app = initializeApp(firebase)
  const auth = getAuth(app)
  return {
    provide: {
      auth
    }
  }
})
