# Nuxt 3 + Firebase 9 bug

## Setup

Make sure to install the dependencies and provide firebase creadentials

```bash
cp .env.sample .env
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

After setup edit .env file and set firebase credentials
Then run 

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

### Note
If in case you do not specify firebase credentialse in .env in dev mode you get same Error but in production you will get error that 
```log
Firebase: Error (auth/invalid-api-key).
  at createErrorInternal (file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:466:40)  
  at _assert (file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:470:15)  
  at file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:5919:13  
  at Component.instanceFactory (file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:5936:11)  
  at Provider.getOrInitializeService (file://./server/node_modules/@firebase/component/dist/esm/index.esm2017.js:290:39)  
  at Provider.initialize (file://./server/node_modules/@firebase/component/dist/esm/index.esm2017.js:234:31)  
  at initializeAuth (file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:584:27)  
  at getAuth (file://./server/node_modules/@firebase/auth/dist/node-esm/index-2bbaab7c.js:5985:12)  
  at file://./server/chunks/app/server.mjs:3044:16  
  at callWithNuxt (file://./server/chunks/app/server.mjs:335:20)
```
This error means that firebase auth initialized without proper credentials. And it is different from error in dev mode.
