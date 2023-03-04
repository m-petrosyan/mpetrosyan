import {createApp} from 'vue'
import App from './App.vue'
import intersection from "v-intersection";
import './assets/style/main.scss'

createApp(App)
    .use(intersection)
    .mount('#app')
