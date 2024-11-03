import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import './assets/style.css'; // Import Tailwind CSS
import router from './router'

createApp(App).use(router).mount('#app')
