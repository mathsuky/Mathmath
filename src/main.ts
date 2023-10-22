import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import VueMathjax from 'vue-mathjax-next'
// import VueKatex from 'vue-katex'
// import 'katex/dist/katex.min.css'
// import 'katex/dist/katex.min.css'

// import VueKatex from '@hsorby/vue3-katex'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // MDIのCSSをインポート

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi' // アイコンフォントをMDIに設定
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)
// app.use(VueMathjax)
// app.use(VueKatex, {
//   globalOptions: {
//     delimiters: [
//       { left: '$', right: '$', display: false },
//       { left: '$$', right: '$$', display: true }
//     ]
//   }
// })

app.mount('#app')
