import './assets/main.css'
import clickOutside from './directives/clickOutside'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', clickOutside)
app.mount('#app')
