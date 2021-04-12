import { createApp } from 'vue'

import router from './router/index'
import vuex from './store/index'
import App from './App.vue'
import './style/global.css'

const app = createApp(App)

app.use(router)
app.use(vuex)
app.mount("#app")
