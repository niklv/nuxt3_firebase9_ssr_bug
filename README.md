# Nuxt 3 + Firebase 9 bug

## Setup

Make sure to install the dependencies and provide firebase creadentials

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npx nuxi dev
```

## Production

Build the application for production:

```bash
npx nuxi build && npx nuxi preview
```

## Bug description

```bash
npx nuxi dev
```
Open `http://localhost:3000`. In server console you will receive error:
```log
Component auth has not been registered yet
  at Provider.initialize (file://./.nuxt/dist/server/server.mjs:2647:19)  
  at initializeAuth (file://./node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:584:27)  
  at Module.getAuth (file://./node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:5985:12)  
  at file://./.nuxt/dist/server/server.mjs:1728:38  
  at callWithNuxt (file://./.nuxt/dist/server/server.mjs:254:20)  
  at applyPlugin (file://./.nuxt/dist/server/server.mjs:205:29)  
  at Module.applyPlugins (file://./.nuxt/dist/server/server.mjs:215:11)  
  at async createNuxtAppServer (file://./.nuxt/dist/server/server.mjs:51:5)  
  at async renderToString (file://./node_modules/vue-bundle-renderer/dist/index.mjs:247:19)  
  at async renderMiddleware (file://./.nuxt/nitro/index.mjs:206:20)
```

Stop server. And run production build: 
```bash
npx nuxi build && npx nuxi preview
```

Open `http://localhost:3000`. There are no error in server console. And auth module is initialized as normal.

### Summarize
In total, we have that nuxt dev mode and prod mode handles differenly `firebase-js-sdk` in SSR.

