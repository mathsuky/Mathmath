import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // MDIのCSSをインポート
import VueMathjax from 'vue-mathjax-next'
import Markdown from 'vue3-markdown-it'
import markdownItLatex from 'markdown-it-latex';


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
app.use(VueMathjax)
app.use(Markdown, {
  // プラグインを追加します
  plugins: [
    {
      plugin: markdownItLatex,
      options: {}  // ここにプラグインのオプションを設定します
    }
  ]
});

app.mount('#app')
