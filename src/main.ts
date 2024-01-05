import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './routes'

// createApp(App).mount('#app')
// const app = createApp(App)

const app = createApp(App)

app.use(createPinia())
app.use(router)

// mounting to div with id app of index.html
app.mount('#app')
