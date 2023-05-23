import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

import './assets/style/main.scss'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)


import Loader from '@/components/UI/Loader.vue'
import Trailer from '@/components/UI/Trailer.vue'
import BtnMore from '@/components/UI/BtnMore.vue'
import Actors from '@/components/UI/Actors.vue'

import VueLazyload from 'vue-lazyload'

import errorImage from '@/assets/images/error.png'



app.use(VueLazyload, {
  error: errorImage
})

app.component('Loader', Loader)
app.component('Trailer', Trailer)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)

app.mount('#app')
